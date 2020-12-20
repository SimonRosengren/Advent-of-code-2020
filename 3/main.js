var fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8')

const map = input.split('\n')

let currentX = 0;

//let nrOfTrees = 0;

// Part 1
// map.forEach((c, index) => {
//     var test = c.toString();
//     test = test.substring(0, currentX) + 'x' + test.substring(currentX + 1);
//     console.log(test)
//     if (c[currentX] === '#') {
//         nrOfTrees++;
//     }
//     if (currentX + 3 >= (c.length - 1)) {
//         currentX = (currentX + 3) - (c.length - 1);
//     } else {
//         currentX += 3;
//     }
// })

//console.log(nrOfTrees)

// Part 2
const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
]

let results = [];

slopes.forEach((slope, i) => {
    console.log('*********************NEW SLOPE******************************')
    let nrOfTrees = 0;
    currentX = 0;
    for (let j = 0; j < map.length; j+=slopes[i][1]) {
        var test = map[j].toString();
        test = test.substring(0, currentX) + 'x' + test.substring(currentX + 1);
        console.log(test)
        if (map[j][currentX] === '#') {
            nrOfTrees++;
        }
        if (currentX + slopes[i][0] >= (map[j].length - 1)) {
            currentX = (currentX + slopes[i][0]) - (map[j].length - 1);
        } else {
            currentX += slopes[i][0];
        }
    }
    results[i] = nrOfTrees;
})

let product = results[0];
for (let i = 1; i < results.length; i++) {
    product *= results[i]
}
console.log(product)

