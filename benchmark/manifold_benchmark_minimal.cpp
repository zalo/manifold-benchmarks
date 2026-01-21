// Manifold Performance Benchmarks - Minimal/Focused Version
//
// This benchmark suite works with manifold v2.0.0+ by avoiding
// APIs that were added later (like Hull).
//
// Focused on the most representative/punishing operations:
// - Boolean operations at high resolution
// - Batch Boolean (large-scale parallel operations)
// - Memory usage tracking
// - CPU/parallel efficiency
//
// Run with: ./manifold_benchmark_minimal --benchmark_format=json --benchmark_out=results.json

#include <benchmark/benchmark.h>
#include "manifold.h"

#include <cmath>
#include <vector>
#include <chrono>
#include <ctime>

#ifdef __linux__
#include <fstream>
#include <sstream>
#include <string>
#include <unistd.h>
#endif

using namespace manifold;

// =============================================================================
// Helper Functions
// =============================================================================

// Create a grid of touching spheres for batch Boolean tests
static std::vector<Manifold> CreateTouchingSpheres(int count) {
  std::vector<Manifold> spheres;
  spheres.reserve(count);

  int n = static_cast<int>(std::cbrt(static_cast<double>(count))) + 1;
  double spacing = 2.0;  // Spheres of radius 1.0 will touch

  for (int i = 0; i < count; ++i) {
    int x = i % n;
    int y = (i / n) % n;
    int z = i / (n * n);
    spheres.push_back(
        Manifold::Sphere(1.0, 16).Translate(
            glm::vec3(x * spacing, y * spacing, z * spacing)));
  }
  return spheres;
}

#ifdef __linux__
// Get current resident set size in KB
static size_t GetCurrentRSSKb() {
  std::ifstream status("/proc/self/statm");
  if (!status.is_open()) return 0;

  size_t size, resident;
  status >> size >> resident;
  long page_size = sysconf(_SC_PAGESIZE);
  return (resident * page_size) / 1024;
}

// Get peak resident set size from /proc/self/status (Linux only)
static size_t GetPeakRSSKb() {
  std::ifstream status("/proc/self/status");
  if (!status.is_open()) return 0;

  std::string line;
  while (std::getline(status, line)) {
    if (line.rfind("VmHWM:", 0) == 0) {
      std::istringstream iss(line.substr(6));
      size_t value = 0;
      std::string unit;
      if (iss >> value >> unit) {
        return value;  // Already in kB
      }
    }
  }
  return 0;
}
#else
static size_t GetCurrentRSSKb() { return 0; }
static size_t GetPeakRSSKb() { return 0; }
#endif

// =============================================================================
// Boolean Operations - High Resolution (Core Workload)
// =============================================================================

static void BM_BooleanUnion(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere1 = Manifold::Sphere(1.0, resolution);
  Manifold sphere2 = Manifold::Sphere(1.0, resolution).Translate(glm::vec3(0.5, 0, 0));

  Manifold result;
  for (auto _ : state) {
    result = sphere1 + sphere2;
    benchmark::DoNotOptimize(result);
  }

  state.counters["triangles"] = static_cast<double>(result.NumTri());
}
BENCHMARK(BM_BooleanUnion)->Arg(128)->Arg(256)->Unit(benchmark::kMillisecond);

static void BM_BooleanDifference(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere1 = Manifold::Sphere(1.0, resolution);
  Manifold sphere2 = Manifold::Sphere(0.8, resolution).Translate(glm::vec3(0.5, 0, 0));

  Manifold result;
  for (auto _ : state) {
    result = sphere1 - sphere2;
    benchmark::DoNotOptimize(result);
  }

  state.counters["triangles"] = static_cast<double>(result.NumTri());
}
BENCHMARK(BM_BooleanDifference)->Arg(128)->Arg(256)->Unit(benchmark::kMillisecond);

// =============================================================================
// Batch Boolean - Large Scale (Most Representative)
// =============================================================================

static void BM_BatchBoolean(benchmark::State& state) {
  const int count = static_cast<int>(state.range(0));
  std::vector<Manifold> spheres = CreateTouchingSpheres(count);

  size_t mem_before = GetCurrentRSSKb();
  Manifold result;

  for (auto _ : state) {
    result = Manifold::BatchBoolean(spheres, OpType::Add);
    benchmark::DoNotOptimize(result);
  }

  size_t mem_after = GetCurrentRSSKb();
  size_t peak_mem = GetPeakRSSKb();

  state.counters["spheres"] = static_cast<double>(count);
  state.counters["triangles"] = static_cast<double>(result.NumTri());

  if (peak_mem > 0) {
    state.counters["peak_memory_MB"] = static_cast<double>(peak_mem) / 1024.0;
  }
  if (mem_after > mem_before) {
    state.counters["memory_delta_MB"] = static_cast<double>(mem_after - mem_before) / 1024.0;
  }
}
BENCHMARK(BM_BatchBoolean)
    ->Arg(1000)
    ->Arg(5000)
    ->Unit(benchmark::kMillisecond);

// =============================================================================
// CPU Efficiency / Parallel Utilization
// =============================================================================

static void BM_ParallelEfficiency(benchmark::State& state) {
  const int count = static_cast<int>(state.range(0));
  std::vector<Manifold> spheres = CreateTouchingSpheres(count);

  double total_cpu_time = 0;
  double total_real_time = 0;

  for (auto _ : state) {
    auto start_cpu = std::clock();
    auto start_real = std::chrono::high_resolution_clock::now();

    auto result = Manifold::BatchBoolean(spheres, OpType::Add);
    benchmark::DoNotOptimize(result);

    auto end_real = std::chrono::high_resolution_clock::now();
    auto end_cpu = std::clock();

    total_cpu_time += static_cast<double>(end_cpu - start_cpu) / CLOCKS_PER_SEC;
    total_real_time += std::chrono::duration<double>(end_real - start_real).count();
  }

  // CPU efficiency: ratio of CPU time to wall-clock time
  // Values > 1.0 indicate parallel utilization
  if (total_real_time > 0) {
    double efficiency = total_cpu_time / total_real_time;
    state.counters["cpu_efficiency"] = benchmark::Counter(
        efficiency, benchmark::Counter::kDefaults);
  }

  state.counters["spheres"] = static_cast<double>(count);
}
BENCHMARK(BM_ParallelEfficiency)
    ->Arg(1000)
    ->Arg(5000)
    ->UseRealTime()
    ->Unit(benchmark::kMillisecond);

// =============================================================================
// Memory Stress Test
// =============================================================================

static void BM_MemoryUsage(benchmark::State& state) {
  const int count = static_cast<int>(state.range(0));

  size_t peak_mem = 0;

  for (auto _ : state) {
    std::vector<Manifold> spheres = CreateTouchingSpheres(count);
    auto result = Manifold::BatchBoolean(spheres, OpType::Add);
    benchmark::DoNotOptimize(result);
    benchmark::ClobberMemory();

    size_t current_peak = GetPeakRSSKb();
    if (current_peak > peak_mem) {
      peak_mem = current_peak;
    }
  }

  if (peak_mem > 0) {
    state.counters["peak_memory_MB"] = static_cast<double>(peak_mem) / 1024.0;
  }

  state.counters["spheres"] = static_cast<double>(count);
}
BENCHMARK(BM_MemoryUsage)
    ->Arg(1000)
    ->Arg(5000)
    ->Unit(benchmark::kMillisecond);

// No BENCHMARK_MAIN() - we link with benchmark::benchmark_main
