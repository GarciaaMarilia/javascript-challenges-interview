const permutations = require("./index");

test("permutations function exists", () => {
 expect(typeof permutations).toEqual("function");
});

test("Finds the permutations", () => {
 // Basic tests
 expect(permutations(1)).toEqual([1]);
 expect(permutations(12)).toEqual([12, 21]);
 expect(permutations(19)).toEqual([19, 91]);

 // 3 Digits
 expect(permutations(112)).toEqual([112, 121, 211]); // Remove duplications
 expect(permutations(138)).toEqual([138, 183, 318, 381, 813, 831]);

 // 4 Digits
 expect(permutations(1023)).toEqual([
  1023, 1032, 1203, 1230, 1302, 1320, 2103, 2130, 2013, 2031, 2310, 2301, 3102,
  3120, 3012, 3021, 3210, 3201,
 ]);

 // Same digits
 expect(permutations(111)).toEqual([111]);

 // Empty string
 expect(() => permutations("")).toThrow();
});
