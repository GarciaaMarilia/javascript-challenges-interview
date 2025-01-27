function chunk(arr, size) {
 const newChunk = [];

 for (let i = 0; i < arr.length; i += size) {
  newChunk.push(arr.slice(i, i + size));
 }

 return newChunk;
}

module.exports = chunk;
