cmake_minimum_required(VERSION 3.18)
project(manifold_benchmarks)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Path to manifold repository (must be pre-built)
set(MANIFOLD_PATH "" CACHE PATH "Path to manifold repository")

if(NOT MANIFOLD_PATH)
  message(FATAL_ERROR "MANIFOLD_PATH must be set to the manifold repository path")
endif()

# Find manifold library (check multiple build directories)
set(MANIFOLD_BUILD_DIRS
  "${MANIFOLD_PATH}/build"
  "${MANIFOLD_PATH}/build-release"
  "${MANIFOLD_PATH}/build-debug"
)

set(MANIFOLD_LIB_FOUND FALSE)
foreach(BUILD_DIR ${MANIFOLD_BUILD_DIRS})
  # First try the combined library at src/libmanifold (includes all dependencies)
  if(EXISTS "${BUILD_DIR}/src/libmanifold.so")
    set(MANIFOLD_LIB_PATH "${BUILD_DIR}/src/libmanifold.so")
    set(MANIFOLD_BUILD_DIR "${BUILD_DIR}")
    set(MANIFOLD_LIB_FOUND TRUE)
    set(MANIFOLD_USE_COMBINED TRUE)
    break()
  elseif(EXISTS "${BUILD_DIR}/src/libmanifold.a")
    set(MANIFOLD_LIB_PATH "${BUILD_DIR}/src/libmanifold.a")
    set(MANIFOLD_BUILD_DIR "${BUILD_DIR}")
    set(MANIFOLD_LIB_FOUND TRUE)
    set(MANIFOLD_USE_COMBINED TRUE)
    break()
  # Fall back to individual library
  elseif(EXISTS "${BUILD_DIR}/src/manifold/libmanifold.so")
    set(MANIFOLD_LIB_PATH "${BUILD_DIR}/src/manifold/libmanifold.so")
    set(MANIFOLD_BUILD_DIR "${BUILD_DIR}")
    set(MANIFOLD_LIB_FOUND TRUE)
    set(MANIFOLD_USE_COMBINED FALSE)
    break()
  elseif(EXISTS "${BUILD_DIR}/src/manifold/libmanifold.a")
    set(MANIFOLD_LIB_PATH "${BUILD_DIR}/src/manifold/libmanifold.a")
    set(MANIFOLD_BUILD_DIR "${BUILD_DIR}")
    set(MANIFOLD_LIB_FOUND TRUE)
    set(MANIFOLD_USE_COMBINED FALSE)
    break()
  endif()
endforeach()

if(NOT MANIFOLD_LIB_FOUND)
  message(FATAL_ERROR "Manifold library not found. Build manifold first:\n"
    "  cd ${MANIFOLD_PATH} && cmake -B build -DCMAKE_BUILD_TYPE=Release && cmake --build build")
endif()

message(STATUS "Found manifold library: ${MANIFOLD_LIB_PATH}")
message(STATUS "Using combined library: ${MANIFOLD_USE_COMBINED}")

# Determine include directory (changed between v2.x and v3.x)
# v3.x+: include/manifold/manifold.h
# v2.x: src/manifold/include/manifold.h
if(EXISTS "${MANIFOLD_PATH}/include/manifold/manifold.h")
  set(MANIFOLD_INCLUDE_DIR "${MANIFOLD_PATH}/include")
  message(STATUS "Using v3.x include path: ${MANIFOLD_INCLUDE_DIR}")
elseif(EXISTS "${MANIFOLD_PATH}/src/manifold/include/manifold.h")
  set(MANIFOLD_INCLUDE_DIR "${MANIFOLD_PATH}/src/manifold/include")
  # v2.x also needs utilities for public.h
  set(MANIFOLD_INCLUDE_DIRS
    "${MANIFOLD_PATH}/src/manifold/include"
    "${MANIFOLD_PATH}/src/utilities/include"
    "${MANIFOLD_PATH}/src/third_party/glm"
    "${MANIFOLD_PATH}/src/third_party/thrust"
  )
  message(STATUS "Using v2.x include paths")
else()
  message(FATAL_ERROR "Could not find manifold.h in expected locations")
endif()

# Import manifold as a library
# Determine if we're using static or shared library
if(MANIFOLD_LIB_PATH MATCHES "\\.a$")
  add_library(manifold STATIC IMPORTED)
else()
  add_library(manifold SHARED IMPORTED)
endif()

# Set include directories based on version
if(DEFINED MANIFOLD_INCLUDE_DIRS)
  set_target_properties(manifold PROPERTIES
    IMPORTED_LOCATION "${MANIFOLD_LIB_PATH}"
    INTERFACE_INCLUDE_DIRECTORIES "${MANIFOLD_INCLUDE_DIRS}"
  )
else()
  set_target_properties(manifold PROPERTIES
    IMPORTED_LOCATION "${MANIFOLD_LIB_PATH}"
    INTERFACE_INCLUDE_DIRECTORIES "${MANIFOLD_INCLUDE_DIR}"
  )
endif()

# If not using combined library, we need to link dependencies
if(NOT MANIFOLD_USE_COMBINED)
  # Import polygon library
  if(EXISTS "${MANIFOLD_BUILD_DIR}/src/polygon/libpolygon.a")
    add_library(polygon STATIC IMPORTED)
    set_target_properties(polygon PROPERTIES
      IMPORTED_LOCATION "${MANIFOLD_BUILD_DIR}/src/polygon/libpolygon.a"
    )
  endif()

  # Import collider library
  if(EXISTS "${MANIFOLD_BUILD_DIR}/src/collider/libcollider.a")
    add_library(collider STATIC IMPORTED)
    set_target_properties(collider PROPERTIES
      IMPORTED_LOCATION "${MANIFOLD_BUILD_DIR}/src/collider/libcollider.a"
    )
  endif()

  # Import quickhull library
  if(EXISTS "${MANIFOLD_BUILD_DIR}/src/third_party/libquickhull.a")
    add_library(quickhull STATIC IMPORTED)
    set_target_properties(quickhull PROPERTIES
      IMPORTED_LOCATION "${MANIFOLD_BUILD_DIR}/src/third_party/libquickhull.a"
    )
  endif()

  # Import graphlite library
  if(EXISTS "${MANIFOLD_BUILD_DIR}/src/third_party/graphlite/libgraphlite.a")
    add_library(graphlite STATIC IMPORTED)
    set_target_properties(graphlite PROPERTIES
      IMPORTED_LOCATION "${MANIFOLD_BUILD_DIR}/src/third_party/graphlite/libgraphlite.a"
    )
  endif()

  # Import Clipper2 library
  if(EXISTS "${MANIFOLD_BUILD_DIR}/src/third_party/clipper2/CPP/libClipper2.a")
    add_library(Clipper2 STATIC IMPORTED)
    set_target_properties(Clipper2 PROPERTIES
      IMPORTED_LOCATION "${MANIFOLD_BUILD_DIR}/src/third_party/clipper2/CPP/libClipper2.a"
    )
  elseif(EXISTS "${MANIFOLD_BUILD_DIR}/_deps/clipper2-build/libClipper2.a")
    add_library(Clipper2 STATIC IMPORTED)
    set_target_properties(Clipper2 PROPERTIES
      IMPORTED_LOCATION "${MANIFOLD_BUILD_DIR}/_deps/clipper2-build/libClipper2.a"
    )
  endif()
endif()

# Import cross_section if available
if(EXISTS "${MANIFOLD_BUILD_DIR}/src/cross_section/libcross_section.a")
  add_library(cross_section STATIC IMPORTED)
  set_target_properties(cross_section PROPERTIES
    IMPORTED_LOCATION "${MANIFOLD_BUILD_DIR}/src/cross_section/libcross_section.a"
  )
endif()

# Fetch Google Benchmark
include(FetchContent)
set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "" FORCE)
set(BENCHMARK_ENABLE_INSTALL OFF CACHE BOOL "" FORCE)
set(BENCHMARK_ENABLE_GTEST_TESTS OFF CACHE BOOL "" FORCE)

FetchContent_Declare(
  googlebenchmark
  GIT_REPOSITORY https://github.com/google/benchmark.git
  GIT_TAG v1.8.3
)
FetchContent_MakeAvailable(googlebenchmark)

# Find TBB (optional but recommended)
find_package(TBB QUIET)

# Build benchmark executable (full version with all APIs)
add_executable(manifold_benchmark benchmark/manifold_benchmark.cpp)

target_link_libraries(manifold_benchmark PRIVATE
  manifold
  benchmark::benchmark_main
)

# Build minimal benchmark executable (works with v2.0.0+, no Hull)
add_executable(manifold_benchmark_minimal benchmark/manifold_benchmark_minimal.cpp)

target_link_libraries(manifold_benchmark_minimal PRIVATE
  manifold
  benchmark::benchmark_main
)

# Link dependency libraries if not using combined library
if(NOT MANIFOLD_USE_COMBINED)
  if(TARGET polygon)
    target_link_libraries(manifold_benchmark PRIVATE polygon)
    target_link_libraries(manifold_benchmark_minimal PRIVATE polygon)
  endif()
  if(TARGET collider)
    target_link_libraries(manifold_benchmark PRIVATE collider)
    target_link_libraries(manifold_benchmark_minimal PRIVATE collider)
  endif()
  if(TARGET quickhull)
    target_link_libraries(manifold_benchmark PRIVATE quickhull)
    target_link_libraries(manifold_benchmark_minimal PRIVATE quickhull)
  endif()
  if(TARGET graphlite)
    target_link_libraries(manifold_benchmark PRIVATE graphlite)
    target_link_libraries(manifold_benchmark_minimal PRIVATE graphlite)
  endif()
  if(TARGET Clipper2)
    target_link_libraries(manifold_benchmark PRIVATE Clipper2)
    target_link_libraries(manifold_benchmark_minimal PRIVATE Clipper2)
  endif()
endif()

# Link cross_section if available
if(TARGET cross_section)
  target_link_libraries(manifold_benchmark PRIVATE cross_section)
  target_link_libraries(manifold_benchmark_minimal PRIVATE cross_section)
endif()

# Link TBB if found
if(TBB_FOUND)
  target_link_libraries(manifold_benchmark PRIVATE TBB::tbb)
  target_link_libraries(manifold_benchmark_minimal PRIVATE TBB::tbb)
  message(STATUS "TBB found - parallel benchmarks enabled")
else()
  message(STATUS "TBB not found - benchmarks will run single-threaded")
endif()

# Optimization flags
target_compile_options(manifold_benchmark PRIVATE -O3)
target_compile_options(manifold_benchmark_minimal PRIVATE -O3)

# Installation (optional)
install(TARGETS manifold_benchmark manifold_benchmark_minimal DESTINATION bin)
