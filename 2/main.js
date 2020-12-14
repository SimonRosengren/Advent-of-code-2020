var fs = require('fs')
const fullInput = fs.readFileSync('./input.txt', 'utf8')

let nrOfCorrectPasswords = 0
let nrOfCorrectPasswordsPartTwo = 0;
// Part I

fullInput.toString().split('\n').forEach(input => {
    const splitData = input.toString().split(':')
    const policy = splitData[0]
    const password = splitData[1]

    const splitPolicy = policy.split('-').join(',').split(' ').join(',').split(',')

    const minAmount = splitPolicy[0]
    const maxAmount = splitPolicy[1]
    const letter = splitPolicy[2]

    // Part I
    const nrOfOccurences = (password.match(new RegExp(letter, 'g')) || {}).length

    if (nrOfOccurences >= minAmount && nrOfOccurences <= maxAmount) {
        nrOfCorrectPasswords++
    }

    // Part II

    if ( password[parseInt(minAmount) + 1] === letter ) {
        if ( password[parseInt(maxAmount) + 1] !== letter ) {
            nrOfCorrectPasswordsPartTwo++;
        }
    }

    if ( password[parseInt(maxAmount) + 1] === letter ) {
        if ( password[parseInt(minAmount) + 1] !== letter ) {
            nrOfCorrectPasswordsPartTwo++;
        }
    }
})

console.log(`Part I: ${nrOfCorrectPasswords}`)

console.log(`Part II: ${nrOfCorrectPasswordsPartTwo}`)

