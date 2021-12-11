const s = process.argv.slice(2)[0];

const RomanToInteger = (s) => {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    arrayS = s.split('');
    let number = 0;
    for (x = 0; x < arrayS.length; x++) {
        const before = values[arrayS[x - 1]];
        const integer = values[arrayS[x]];
        const after = values[arrayS[x + 1]];

        if (arrayS.length === 1) {
            number += integer;
            break;
        }

        if (before === undefined) {
            if (integer >= after) {
                number += integer;
            } else {
                number -= integer;
            }
        } else if (integer < after) {
            number -= integer;
        } else if (integer >= after) {
            number += integer;
        } else if (after === undefined) {
            number += integer;
        }
    }
    return number;
};

console.log(RomanToInteger(s));
