var fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const data = input.toString().split('\n')

// Part I
data.forEach(val => {
    let valueToFind = 2020 - val;
    if(data.includes(valueToFind.toString())) {
        console.log(valueToFind * val);
    }
})

// Part II
data.forEach(val => {
    let rest = 2020 - val;
    data.forEach(val => {
        
    })
})




const findOtherHalf = (part, total) => {
    data.forEach(val => {
        let valueToFind = total - val;
        if(data.includes(valueToFind.toString())) {
            return valueToFind
        }
    })
}