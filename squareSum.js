var numbers =  [19,-6,-14,5,17,-8,-11,17,5,-13];
const squareSum = (numbers) => {
    return ((numbers.map(i => i * i))
        .reduce((a, n) => a + n));
};
console.log(squareSum(numbers));