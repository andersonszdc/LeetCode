const isConsecutive = (curr, next) => {
    if (next === curr + 1 || (curr === 9 && next === 0)) {
        return true;
    }

    return false;
};

const isAntecedent = (prev, curr) => {
    if (curr === prev + 1 || (prev === 9 && curr === 0)) {
        return true;
    }

    return false;
};

const largestNumber = (num) => {
    // transformar o number em uma array de numbers
    const arr = num.toString().split('').map(Number);

    let Nums = [];
    let newNum = [];

    // montar uma array com os números de dígitos consecutivos
    for (i = 0; i < arr.length; i++) {
        if (isConsecutive(arr[i], arr[i + 1])) {
            newNum.push(arr[i]);

            // último dígito de uma sequência
        } else if (isAntecedent(arr[i - 1], arr[i])) {
            newNum.push(arr[i]);
            Nums.push(Number(newNum.join('')));
            newNum = [];
        }
    }

    // verificar qual o maior número
    let number = 0;
    for (i = 0; i < Nums.length; i++) {
        if (Nums[i] > number) {
            number = Nums[i];
        }
    }

    return number;
};

console.log(largestNumber(9012364509789));
