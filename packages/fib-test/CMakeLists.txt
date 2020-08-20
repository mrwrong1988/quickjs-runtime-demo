cmake_minimum_required(VERSION 3.10)

project(fib-test)

add_executable(fib-test src/fib-test.c src/fib.c)

add_library(fib SHARED src/fib.c)
# set_target_properties(fib PROPERTIES PREFIX "")
set_target_properties(fib PROPERTIES COMPILE_FLAGS "-fPIC")

include_directories(/usr/local/include)

# quickjs
add_library(quickjs STATIC IMPORTED)
set_target_properties(quickjs PROPERTIES IMPORTED_LOCATION "/usr/local/lib/quickjs/libquickjs.a")

# libfib
add_library(libfib SHARED IMPORTED)
set_target_properties(libfib PROPERTIES IMPORTED_LOCATION "./libfib.so")

set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -pthread")

# 将quickjs链接到 fib-test
target_link_libraries(fib-test libfib m dl quickjs)
