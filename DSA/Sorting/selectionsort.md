# SelectionSort

The selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and replaces that element at the beginning of the unsorted list.

Here is the code example. [Link](/DSA/Sorting/selectionsort.js)

## working of selection sort

1. Set the first element as `minimum`.
2. Compare `minimum` with the second element. If the second element is smaller than `minimum`, assign the second element as `minimum`.
3. Repeat this till the last element. This will put the minimum element in the last index.
4. Now, switch the `minimum` element in last index with the first index.
5. Mark the next index element as `minimum` and repeat the steps.