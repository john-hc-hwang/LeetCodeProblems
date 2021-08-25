// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

const reverse = x => {
    if (x === 0) {
        return 0;
    }

    let resultNum = null;
    let resultString = '';
    let isNegative = false;
    let num = x;
    if (num < 0) {
        isNegative = true;
        num = num * (-1);
    }

    const stringNum = num.toString();

    for (let i = stringNum.length - 1; i >= 0; i--) {
        if (stringNum[i] !== 0) {
            resultString += stringNum[i];
        }
    }

    if (isNegative) {
        resultNum = Number(resultString) * -1;
    } else {
        resultNum = Number(resultString);
    }

    if (resultNum < -1 * (2 ** 31)) {
        return 0;
    }

    if (resultNum > 2 ** 31 - 1) {
        return 0;
    }

    return resultNum;
};
