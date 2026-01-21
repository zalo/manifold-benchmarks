# Manifold Benchmarks

Performance benchmarking suite for [Manifold](https://github.com/elalish/manifold), the high-performance geometry library.

## Dashboard

**[View Performance Dashboard](https://zalo.github.io/manifold-benchmarks/bench/)**

The dashboard shows historical performance data across manifold versions with interactive graphs for:
- Boolean operations at high resolution (the core workload)
- Batch Boolean operations (1000-5000 spheres)
- Peak memory usage (MB)
- CPU/parallel efficiency

## How It Works

This repository runs automated benchmarks against the [manifold](https://github.com/elalish/manifold) library:

1. **Triggered by pushes** to manifold's master branch (via repository_dispatch)
2. **Weekly scheduled runs** every Sunday at 3 AM UTC
3. **Manual dispatch** for testing specific commits/tags

Results are stored in the `gh-pages` branch and visualized using [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark).

## Benchmarks

The suite focuses on the most representative and punishing operations:

| Benchmark | Description | Metrics |
|-----------|-------------|---------|
| `BM_BooleanUnion` | Union of two high-res spheres (128, 256) | Time, triangles |
| `BM_BooleanDifference` | Difference of two high-res spheres | Time, triangles |
| `BM_BatchBoolean` | Union of 1000-5000 touching spheres | Time, peak memory |
| `BM_ConvexHull` | Convex hull of high-res sphere (v3.x only) | Time |
| `BM_ParallelEfficiency` | Same as BatchBoolean with CPU tracking | Time, cpu_efficiency |
| `BM_MemoryUsage` | Memory stress test with large batches | Time, peak_memory_MB |

## Running Locally

### Prerequisites

- CMake 3.18+
- C++17 compiler
- TBB (optional, for parallel benchmarks)
- Built manifold library

### Build

```bash
# Clone this repo
git clone https://github.com/zalo/manifold-benchmarks.git
cd manifold-benchmarks

# Clone and build manifold
git clone --recurse-submodules https://github.com/elalish/manifold.git
cd manifold
cmake -B build -DCMAKE_BUILD_TYPE=Release -DMANIFOLD_PAR=TBB
cmake --build build -j$(nproc)
cd ..

# Build benchmarks
cmake -B build -DCMAKE_BUILD_TYPE=Release -DMANIFOLD_PATH=$(pwd)/manifold
cmake --build build -j$(nproc)

# Run benchmarks
./build/manifold_benchmark
```

### Output Formats

```bash
# Console output (default)
./build/manifold_benchmark

# JSON output for analysis
./build/manifold_benchmark --benchmark_format=json --benchmark_out=results.json

# Run specific benchmarks
./build/manifold_benchmark --benchmark_filter="BM_Boolean.*"

# Multiple repetitions for statistical analysis
./build/manifold_benchmark --benchmark_repetitions=3
```

## Backfilling Historical Data

To benchmark historical releases:

1. Go to Actions > "Backfill Historical Benchmarks"
2. Click "Run workflow"
3. Enter comma-separated tags (e.g., `v2.0.0,v3.0.0,v3.3.0`)
4. Click "Run workflow"

The workflow will benchmark each tag sequentially and update the dashboard with version labels.

### Version Compatibility Notes

- **v1.0.0**: Not supported (requires CUDA which CI runners don't have)
- **v2.0.0+**: Uses minimal benchmark suite (no Hull operations)
- **v3.0.0+**: Full benchmark suite with ConvexHull

The backfill workflow automatically detects which benchmark suite to use based on the manifold version's available APIs.

## Metrics Collected

- **Timing**: Wall-clock time in milliseconds
- **Output complexity**: Triangle counts for geometry operations
- **Peak memory**: VmHWM from `/proc/self/status` (Linux only), reported in MB
- **CPU efficiency**: Ratio of cpu_time to real_time (values > 1.0 indicate parallel utilization)

## Alert Thresholds

The benchmark system alerts (via GitHub commit comments) when performance regresses by more than 150% from the previous run. This threshold accounts for typical CI runner variance.

## Contributing

To add new benchmarks:

1. Add benchmark functions to `benchmark/manifold_benchmark.cpp`
2. Follow the existing pattern using Google Benchmark macros
3. Test locally before submitting

## License

Same license as [manifold](https://github.com/elalish/manifold) (Apache 2.0).
