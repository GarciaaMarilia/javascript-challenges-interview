function permutations(number) {
 if (number === "" || number === null || number === undefined) {
  throw new Error("Input cannot be an empty string or invalid.");
 }

 const numStr = number.toString();
 const results = new Set();

 function backtrack(path, options) {
  if (path[0] == "0") return;
  if (path.length === numStr.length) {
   results.add(Number(path.join("")));
   return;
  }

  for (let i = 0; i < options.length; i++) {
   const newOption = options[i];

   const remainingOptions = options.slice(0, i).concat(options.slice(i + 1));
   path.push(newOption);
   backtrack(path, remainingOptions);
   path.pop();
  }
 }

 backtrack([], numStr.split(""));
 return [...results];
}

module.exports = permutations;
