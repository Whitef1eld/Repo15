// only change code below this line
const product = (...args) => {
    // only change code above this line
    return args.reduce((a, b) => a * b, 1);
}

console.log(product(4, 3, 10, 2)); // change this line

module.exports = product;
