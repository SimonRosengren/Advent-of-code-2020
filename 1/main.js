var fs = require('fs');ß
const input = fs.readFileSync('input.txt', 'utf8');
const data = input.toString().split('\n')

data.forEach(val => {
    let valueToFind = 2020 - val;
    if(data.includes(valueToFind.toString())) {
        console.log(valueToFind * val);
    }
})
