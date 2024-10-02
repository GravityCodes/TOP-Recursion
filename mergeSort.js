function mergeSort(array) {
    if (array.length < 2) {
        return array;  // Base case: Arrays with less than two elements are already sorted
    }

    const arrayHalf = parseInt(array.length / 2);  // Declare with const to avoid scope issues
    const leftArray = array.slice(0, arrayHalf);   // Declare left array
    const rightArray = array.slice(arrayHalf);     // Declare right array

    // Recursively sort both halves
    const sortedLeft = mergeSort(leftArray);
    const sortedRight = mergeSort(rightArray);

    // Merge the sorted halves
    let leftIndex = 0, rightIndex = 0;
    let sortedArray = [];

    // Compare elements from left and right arrays and merge them into sortedArray
    while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
        if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
            sortedArray.push(sortedLeft[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(sortedRight[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate remaining elements from both left and right arrays
    return sortedArray.concat(sortedLeft.slice(leftIndex)).concat(sortedRight.slice(rightIndex));
}

// Example: Sorting an array
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);