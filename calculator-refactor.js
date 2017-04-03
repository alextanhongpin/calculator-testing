class Calculator {
  constructor () {
    // Holds the current value
    this.value = 0

    // Holds the last value
    this.lastValue = 0

    // Holds the list of values
    this.values = [0]

    // Holds the last operator
    this.lastOperator = null

    // Holds the list of operators
    this.operators = []
  }
  add () {
    const values = [...arguments]
    this.lastOperator = 'add'
    this.lastValue = values.reduce((a, b) => a + b, this.value)
    return this.lastValue
  }
  minus () {
    const values = [...arguments]
    this.lastOperator = 'minus'
    this.lastValue = values.reduce((a, b) => a - b, this.value)
    return this.lastValue
  }
  times () {
    const values = [...arguments]
    this.lastOperator = 'times'
    this.lastValue = values.reduce((a, b) => a * b, this.value)
    return this.lastValue
  }
  divide () {
    const values = [...arguments]
    this.lastOperator = 'divide'
    this.lastValue = values.reduce((a, b) => a / b, this.value)
    return this.lastValue
  }
  save (val) {
    if (val === null || val === undefined) {
      throw new Error('CalculatorError: Cannot save() non-integer number')
    }
    this.value = val

    this.values.push(this.value)
    this.operators.push(this.lastOperator)

    this.lastValue = 0
    this.lastOperator = null
  }
  reset () {
    this.value = 0
    this.lastValue = 0
    this.lastOperator = null
    this.values = [0]
    this.operators = []
  }
  undo () {
    this.operators.pop()
    this.values.pop()

    this.lastOperator = this.operators[this.operators.length - 1]
    this.lastValue = this.values[this.values.length - 1]
    this.value = this.lastValue
  }
}

module.exports = Calculator
