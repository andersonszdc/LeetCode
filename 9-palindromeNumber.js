let x = process.argv.slice(2)[0]

const isPalindrome = (x) => {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false
    }
    let reverted = 0
    while (x > reverted) {
        reverted = reverted * 10 + x % 10
        x = parseInt(x/10)
    }
    if (x == reverted || x == parseInt(reverted/10)) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome(x))
