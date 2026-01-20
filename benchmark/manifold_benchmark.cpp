// Manifold Performance Benchmarks
//
// This benchmark suite measures the performance of core Manifold operations
// including primitive creation, Boolean operations, and memory usage.
//
// Run with: ./manifold_benchmark --benchmark_format=json --benchmark_out=results.json

#include <benchmark/benchmark.h>
#include "manifold/manifold.h"

#include <cmath>
#include <vector>

#ifdef __linux__
#include <fstream>
#include <sstream>
#include <string>
#endif

using namespace manifold;

// =============================================================================
// Helper Functions
// =============================================================================

// Create a grid of touching ("kissing") convex hulls for batch Boolean tests
static std::vector<Manifold> CreateKissingConvexHulls(int count) {
  std::vector<Manifold> hulls;
  hulls.reserve(count);

  // Arrange in a cubic grid
  int n = static_cast<int>(std::cbrt(static_cast<double>(count))) + 1;
  double spacing = 2.0;  // Spheres of radius 1.0 will touch

  for (int i = 0; i < count; ++i) {
    int x = i % n;
    int y = (i / n) % n;
    int z = i / (n * n);
    hulls.push_back(
        Manifold::Sphere(1.0, 16).Translate(
            {x * spacing, y * spacing, z * spacing}));
  }
  return hulls;
}

#ifdef __linux__
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
static size_t GetPeakRSSKb() { return 0; }
#endif

// =============================================================================
// Primitive Creation Benchmarks
// =============================================================================

static void BM_SphereCreation(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  for (auto _ : state) {
    auto sphere = Manifold::Sphere(1.0, resolution);
    benchmark::DoNotOptimize(sphere);
  }
  state.SetComplexityN(resolution * resolution);
}
BENCHMARK(BM_SphereCreation)
    ->RangeMultiplier(2)
    ->Range(16, 512)
    ->Complexity();

static void BM_CubeCreation(benchmark::State& state) {
  const double size = static_cast<double>(state.range(0));
  for (auto _ : state) {
    auto cube = Manifold::Cube({size, size, size});
    benchmark::DoNotOptimize(cube);
  }
}
BENCHMARK(BM_CubeCreation)->Arg(1)->Arg(10)->Arg(100);

static void BM_CylinderCreation(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  for (auto _ : state) {
    auto cylinder = Manifold::Cylinder(1.0, 1.0, 1.0, resolution);
    benchmark::DoNotOptimize(cylinder);
  }
}
BENCHMARK(BM_CylinderCreation)
    ->RangeMultiplier(2)
    ->Range(16, 256);

// =============================================================================
// Boolean Operation Benchmarks
// =============================================================================

static void BM_BooleanUnion(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere1 = Manifold::Sphere(1.0, resolution);
  Manifold sphere2 = Manifold::Sphere(1.0, resolution).Translate({0.5, 0, 0});

  Manifold result;
  for (auto _ : state) {
    result = sphere1 + sphere2;
    benchmark::DoNotOptimize(result);
  }

  state.counters["output_tris"] = static_cast<double>(result.NumTri());
}
BENCHMARK(BM_BooleanUnion)
    ->RangeMultiplier(2)
    ->Range(16, 256);

static void BM_BooleanDifference(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere1 = Manifold::Sphere(1.0, resolution);
  Manifold sphere2 = Manifold::Sphere(0.5, resolution).Translate({0.5, 0, 0});

  Manifold result;
  for (auto _ : state) {
    result = sphere1 - sphere2;
    benchmark::DoNotOptimize(result);
  }

  state.counters["output_tris"] = static_cast<double>(result.NumTri());
}
BENCHMARK(BM_BooleanDifference)
    ->RangeMultiplier(2)
    ->Range(16, 256);

static void BM_BooleanIntersection(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere1 = Manifold::Sphere(1.0, resolution);
  Manifold sphere2 = Manifold::Sphere(1.0, resolution).Translate({0.5, 0, 0});

  Manifold result;
  for (auto _ : state) {
    result = sphere1 ^ sphere2;
    benchmark::DoNotOptimize(result);
  }

  state.counters["output_tris"] = static_cast<double>(result.NumTri());
}
BENCHMARK(BM_BooleanIntersection)
    ->RangeMultiplier(2)
    ->Range(16, 256);

// =============================================================================
// Batch Boolean Benchmarks (the "kissing hulls" benchmark)
// =============================================================================

static void BM_BatchBooleanUnion(benchmark::State& state) {
  const int count = static_cast<int>(state.range(0));
  std::vector<Manifold> hulls = CreateKissingConvexHulls(count);

  Manifold result;
  for (auto _ : state) {
    result = Manifold::BatchBoolean(hulls, OpType::Add);
    benchmark::DoNotOptimize(result);
  }

  state.counters["hulls"] = static_cast<double>(count);
  state.counters["output_tris"] = static_cast<double>(result.NumTri());
}
BENCHMARK(BM_BatchBooleanUnion)
    ->Arg(100)
    ->Arg(500)
    ->Arg(1000)
    ->Arg(5000)
    ->Arg(10000)
    ->Unit(benchmark::kMillisecond);

// =============================================================================
// Memory Benchmarks
// =============================================================================

static void BM_LargeUnionMemory(benchmark::State& state) {
  const int count = static_cast<int>(state.range(0));

  for (auto _ : state) {
    std::vector<Manifold> hulls = CreateKissingConvexHulls(count);
    auto result = Manifold::BatchBoolean(hulls, OpType::Add);
    benchmark::DoNotOptimize(result);
    benchmark::ClobberMemory();
  }

  size_t peak_kb = GetPeakRSSKb();
  if (peak_kb > 0) {
    state.counters["peak_memory_mb"] = benchmark::Counter(
        static_cast<double>(peak_kb) / 1024.0, benchmark::Counter::kDefaults);
  }
}
BENCHMARK(BM_LargeUnionMemory)
    ->Arg(1000)
    ->Arg(5000)
    ->Unit(benchmark::kMillisecond);

// =============================================================================
// CPU Utilization / Parallel Efficiency Benchmarks
// =============================================================================

// This benchmark uses UseRealTime() so that cpu_time/real_time ratio
// indicates parallel efficiency:
// - Ratio > 1.0 = Good multi-threaded utilization
// - Ratio ~= 1.0 = Mostly single-threaded
// - Ratio < 1.0 = Waiting on I/O or locks

static void BM_ParallelEfficiency(benchmark::State& state) {
  const int count = static_cast<int>(state.range(0));
  std::vector<Manifold> hulls = CreateKissingConvexHulls(count);

  for (auto _ : state) {
    auto result = Manifold::BatchBoolean(hulls, OpType::Add);
    benchmark::DoNotOptimize(result);
  }
}
BENCHMARK(BM_ParallelEfficiency)
    ->Arg(1000)
    ->Arg(5000)
    ->UseRealTime()
    ->Unit(benchmark::kMillisecond);

// =============================================================================
// Transformation Benchmarks
// =============================================================================

static void BM_Transform(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere = Manifold::Sphere(1.0, resolution);

  for (auto _ : state) {
    auto result = sphere.Translate({1.0, 2.0, 3.0})
                      .Rotate(45.0, 30.0, 60.0)
                      .Scale({2.0, 2.0, 2.0});
    benchmark::DoNotOptimize(result);
  }
}
BENCHMARK(BM_Transform)
    ->RangeMultiplier(2)
    ->Range(16, 256);

// =============================================================================
// Hull Benchmarks
// =============================================================================

static void BM_ConvexHull(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere = Manifold::Sphere(1.0, resolution);

  for (auto _ : state) {
    auto result = sphere.Hull();
    benchmark::DoNotOptimize(result);
  }
}
BENCHMARK(BM_ConvexHull)
    ->RangeMultiplier(2)
    ->Range(16, 256);

// =============================================================================
// Query Benchmarks
// =============================================================================

static void BM_Volume(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere = Manifold::Sphere(1.0, resolution);

  for (auto _ : state) {
    auto volume = sphere.Volume();
    benchmark::DoNotOptimize(volume);
  }
}
BENCHMARK(BM_Volume)
    ->RangeMultiplier(2)
    ->Range(16, 512);

static void BM_SurfaceArea(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere = Manifold::Sphere(1.0, resolution);

  for (auto _ : state) {
    auto area = sphere.SurfaceArea();
    benchmark::DoNotOptimize(area);
  }
}
BENCHMARK(BM_SurfaceArea)
    ->RangeMultiplier(2)
    ->Range(16, 512);

static void BM_BoundingBox(benchmark::State& state) {
  const int resolution = static_cast<int>(state.range(0));
  Manifold sphere = Manifold::Sphere(1.0, resolution);

  for (auto _ : state) {
    auto box = sphere.BoundingBox();
    benchmark::DoNotOptimize(box);
  }
}
BENCHMARK(BM_BoundingBox)
    ->RangeMultiplier(2)
    ->Range(16, 512);

// No BENCHMARK_MAIN() - we link with benchmark::benchmark_main
