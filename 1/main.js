var fs = require("fs");
const input = fs.readFileSync("input.txt", "utf8");
const data = input.toString().split("\n");

// Part I
data.forEach((val) => {
  let valueToFind = 2020 - val;
  if (data.includes(valueToFind.toString())) {
    console.log(valueToFind * val);
  }
});

// Part II
for (let i = 0; i < data.length; i++) {
  const rest = 2020 - data[i];
  for (let j = 0; j < data.length; j++) {
    if (i === j) break; // I assume that using the same element twice is against the rules.
    const valueToFind = rest - data[j];
    if (
      data.includes(valueToFind.toString()) &&
      data.indexOf(valueToFind.toString()) !== i &&
      data.indexOf(valueToFind.toString() !== j)
    ) {
      console.log(data[i] * data[j] * valueToFind)
    }
  }
}
