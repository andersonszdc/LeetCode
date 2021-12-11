// const arr = process.argv.slice(2)[0]
const arr = ['abab', 'aba', ''];

const LongestCommonPrefix = (arr) => {
    let x = 1;

    if (arr.some((str) => str == '')) return '';

    for (i = 0; i < arr[0].length; i++) {
        let y = arr[0].slice(0, i + 1);
        if (arr.find((str) => str.slice(0, i + 1) != y)) break;
        x = y;
    }
    return x;
};

console.log(LongestCommonPrefix(arr));
