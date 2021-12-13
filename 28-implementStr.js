const strStr = (haystack, needle) => {
    const itHave = haystack.includes(needle)

    if (needle === '') {
        return 0
    }

    if (itHave) {
        return haystack.indexOf(needle)
    } else {
        return -1
    }

}

console.log(strStr('abcde', 'de'))