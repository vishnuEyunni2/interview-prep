
# Mergesort

Mergesort is a recursive algorithm that continously splits the array in half until it cannot further be divided.

## How does it work?

Mergesort uses Divide and Conquer technique, we divide a problem into subproblems.

The code defines two functions: `mergesort` and `merge`. `mergesort` recursively divides the array into halves until each sub-array contains only one element.

It, then merges them back together using the `merge` function where the sub-arrays are sorted and combined into a single sorted array.

Link to mergesort example [here](/DSA/Sorting/mergesort.js) .