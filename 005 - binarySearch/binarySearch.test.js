const binarySearch = require("./index");

test("binarySearch function exists", () => {
 expect(typeof binarySearch).toEqual("function");
});

test("Find index using binary search", () => {
 // Basic tests
 expect(binarySearch([1, 8, 9, 15, 21, 47, 53, 96], 15)).toEqual(
  "Element is in 3 index"
 );

 // Element at the start of the array
 expect(binarySearch([1, 8, 9, 15, 21, 47, 53, 96], 1)).toEqual(
  "Element is in 0 index"
 );

 // Element at the end of the array
 expect(binarySearch([1, 8, 9, 15, 21, 47, 53, 96], 96)).toEqual(
  "Element is in 7 index"
 );

 // Element not found
 expect(binarySearch([1, 8, 9, 15, 21, 47, 53, 96], 50)).toEqual(
  "Element not found"
 );

 // Empty array
 expect(binarySearch([], 10)).toEqual("Element not found");

 // Single element array (element found)
 expect(binarySearch([10], 10)).toEqual("Element is in 0 index");

 // Single element array (element not found)
 expect(binarySearch([10], 5)).toEqual("Element not found");

 // Array with duplicate elements (first occurrence index)
 expect(binarySearch([1, 1, 2, 2, 3, 3, 4, 4], 3)).toEqual(
  "Element is in 4 index"
 );

 // Large array test
 const largeArray = Array.from({ length: 1000 }, (_, i) => i + 1);
 expect(binarySearch(largeArray, 500)).toEqual("Element is in 499 index");

 // Negative numbers in the array
 expect(binarySearch([-10, -5, 0, 5, 10, 15, 20], -5)).toEqual(
  "Element is in 1 index"
 );
});
