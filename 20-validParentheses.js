// const str = process.argv.slice(2)[0]
const s = "("

const IsValid = (s) => {
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const stack = [];

    for (let item of s) {
        if (item in map) {
            stack.push(item)
        } else {
            const last = stack.slice(-1)
            if (item === map[last]) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    if (stack.length > 0) return false

    return true
}

console.log(IsValid(s))