# Test Challenge 1

You are given a Calculator API that exposes the following API:

- add()
- minus()
- times()
- product()

This is an example on how the add operation works:

```javascript
const calculator = new Calculator()

console.log(calculator.value) // Logs 0

const output1 = calculator.add(10) // Returns 10
console.log(calculator.value) // Logs 0

calculator.save(output1)
console.log(calculator.value) // Logs 10
```

You can also add multiple values:

```javascript
const calculator = new Calculator()

const output1 = calculator.add(10, 20, 30)
console.log(output1) // Logs 60
console.log(calculator.value) // Logs 0

calculator.save(output1)
console.log(calculator.value) // Logs 60
```

The same applies to the operators `minus`, `times`, and `product`.

Write a unit test to ensure the calculator is working fine. You can also refactor the code to ensure it is working correctly. 