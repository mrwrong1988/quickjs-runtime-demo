cmake_minimum_required(VERSION 3.10)

project(runtime)

# add_executable(runtime src/helloworld.c src/fib.c)
add_executable(runtime src/with-libuv.c src/timer.c)

include_directories(/usr/local/include)

# libuv
add_library(libuv STATIC IMPORTED)
set_target_properties(libuv PROPERTIES IMPORTED_LOCATION "/usr/local/lib/libuv_a.a")

# quickjs
add_library(quickjs STATIC IMPORTED)
set_target_properties(quickjs PROPERTIES IMPORTED_LOCATION "/usr/local/lib/quickjs/libquickjs.a")

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -pthread")

# 将libuv, quickjs链接到 runtime
# target_link_libraries(runtime libuv quickjs)
target_link_libraries(runtime m dl libuv quickjs)
