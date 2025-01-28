function binarySearch(numbers, element) {
 let start = 0;
 let end = numbers.length;
 if (numbers.length === 0) {
  return "Element not found";
 }
 while (start <= end) {
  let middle = Math.floor((start + end) / 2);

  if (numbers[middle] === element) {
   return `Element is in ${middle} index`;
  }

  if (numbers[middle] > element) {
   end = middle - 1;
  } else {
   start = middle + 1;
  }
 }

 return "Element not found";
}

module.exports = binarySearch;
