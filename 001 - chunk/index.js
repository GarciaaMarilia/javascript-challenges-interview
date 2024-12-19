function chunk(arr, size) {
 const newChunk = [];

 for (let i = 0; i < arr.length; i += size) {
  newChunk.push(arr.slice(i, i + size));
 }

 return newChunk;
}

// function chunk(arr, size) {
//  const newChunk = [];
//  let index = 0;

//  while (index < arr.length) {
//   newChunk.push(arr.slice(index, index + size));
//   index += size;
//  }

//  return newChunk;
// }

module.exports = chunk;