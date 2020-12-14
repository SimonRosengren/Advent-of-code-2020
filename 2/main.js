var fs = require('fs')
const fullInput = fs.readFileSync('./input.txt', 'utf8')

let nrOfCorrectPasswords = 0

fullInput.toString().split('\n').forEach(input => {
    const splitData = input.toString().split(':')
    const policy = splitData[0]
    const password = splitData[1]

    const splitPolicy = policy.split('-').join(',').split(' ').join(',').split(',')

    const minAmount = splitPolicy[0]
    const maxAmount = splitPolicy[1]
    const letter = splitPolicy[2]

    const nrOfOccurences = (password.match(new RegExp(letter, 'g')) || {}).length

    if (nrOfOccurences >= minAmount && nrOfOccurences <= maxAmount) {
        nrOfCorrectPasswords++
    }
})

console.log(nrOfCorrectPasswords)