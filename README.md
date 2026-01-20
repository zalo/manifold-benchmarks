# Manifold Benchmarks

Performance benchmarking suite for [Manifold](https://github.com/elalish/manifold), the high-performance geometry library.

## Dashboard

**[View Performance Dashboard](https://elalish.github.io/manifold-benchmarks/bench/)**

The dashboard shows historical performance data with interactive graphs for:
- Primitive creation (Sphere, Cube, Cylinder)
- Boolean operations (Union, Difference, Intersection)
- Batch Boolean operations (up to 10,000 hulls)
- Memory usage
- Parallel efficiency (CPU utilization)

## How It Works

This repository runs automated benchmarks against the [manifold](https://github.com/elalish/manifold) library:

1. **Triggered by pushes** to manifold's master branch (via repository_dispatch)
2. **Weekly scheduled runs** every Sunday at 3 AM UTC
3. **Manual dispatch** for testing specific commits/tags

Results are stored in the `gh-pages` branch and visualized using [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark).

## Benchmarks

| Benchmark | Description |
|-----------|-------------|
| `BM_SphereCreation` | Create spheres at various resolutions (16-512) |
| `BM_CubeCreation` | Create cubes of various sizes |
| `BM_CylinderCreation` | Create cylinders at various resolutions |
| `BM_BooleanUnion` | Union of two overlapping spheres |
| `BM_BooleanDifference` | Difference of two overlapping spheres |
| `BM_BooleanIntersection` | Intersection of two overlapping spheres |
| `BM_BatchBooleanUnion` | Union of 100-10,000 touching convex hulls |
| `BM_LargeUnionMemory` | Memory usage for large batch operations |
| `BM_ParallelEfficiency` | CPU utilization for parallel operations |
| `BM_Transform` | Translation, rotation, and scaling |
| `BM_ConvexHull` | Computing convex hull |
| `BM_Volume` | Volume calculation |
| `BM_SurfaceArea` | Surface area calculation |
| `BM_BoundingBox` | Bounding box calculation |

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
./build/manifold_benchmark --benchmark_repetitions=10
```

## Backfilling Historical Data

To benchmark historical releases:

1. Go to Actions > "Backfill Historical Benchmarks"
2. Click "Run workflow"
3. Enter comma-separated tags (e.g., `v3.0.0,v3.1.0,v3.2.0,v3.3.0`)
4. Click "Run workflow"

The workflow will benchmark each tag sequentially and update the dashboard.

## Metrics Collected

- **Timing**: Wall-clock time in nanoseconds/milliseconds
- **Output complexity**: Triangle counts for geometry operations
- **Peak memory**: VmHWM from `/proc/self/status` (Linux only)
- **CPU efficiency**: Ratio of cpu_time to real_time indicates parallel utilization

## Alert Thresholds

The benchmark system alerts (via GitHub commit comments) when performance regresses by more than 150% from the previous run. This threshold accounts for typical CI runner variance.

## Contributing

To add new benchmarks:

1. Add benchmark functions to `benchmark/manifold_benchmark.cpp`
2. Follow the existing pattern using Google Benchmark macros
3. Test locally before submitting

## License

Same license as [manifold](https://github.com/elalish/manifold) (Apache 2.0).
