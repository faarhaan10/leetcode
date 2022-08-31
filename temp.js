const plusOne = digits => {
    const lastIndex = digits.length - 1

    const incrementPlus = index => {
        const lastDigit = digits[index] + 1;

        if (lastDigit <= 9) {
            digits[index] = lastDigit;
        }
        else {
            if (index === 0) {
                digits.splice(0, 1, 1, 0)
            }
            else {
                digits[index] = 0;
                incrementPlus(index - 1)
            }
        }
    }
    incrementPlus(lastIndex)



    return digits

}
const out = plusOne([8, 9, 9, 9])
console.log(out)