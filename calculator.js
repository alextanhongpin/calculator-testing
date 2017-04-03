class Calculator {
  constructor () {
    // Holds the list of values
    this.values = [0]

    // Holds the list of operators
    this.operators = []
  }
  plus () {
    const values = [...arguments]
    const output = values.reduce((a, b) => a + b, this.value)
    this.operators.push('add')
    this.values.push(output)
    return this
  }
  minus () {
    const values = [...arguments]
    const output = values.reduce((a, b) => a - b, this.value)
    this.operators.push('minus')
    this.values.push(output)
    return this
  }
  multiply () {
    const values = [...arguments]
    const output = values.reduce((a, b) => a * b, this.value)
    this.operators.push('times')
    this.values.push(output)
    return this
  }
  divide () {
    const values = [...arguments]
    const output = values.reduce((a, b) => a / b, this.value)
    this.operators.push('divide')
    this.values.push(output)
    return this
  }

  get value () {
    return this.values[this.values.length - 1]
  }
  reset () {
    this.values = [0]
    this.operators = []
    return this
  }
  undo () {
    this.operators.pop()
    this.values.pop()
    return this
  }
}

module.exports = Calculator
