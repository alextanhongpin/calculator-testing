const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect

const Calculator = require('./calculator-refactor.js')

describe('Calculator', () => {

  it('shall create new calculator', (done) => {
  	const calculator = new Calculator()
    expect(calculator).to.be.an.instanceof(Calculator)
    done()
  })

  it('shall initialized with default value', (done) => {
  	const values = [1, 0, -10, '1', 'Hello', true, -0.1, 50.3]
  	values.forEach((v) => {
  		const calculator = new Calculator(v)
  		expect(calculator.value).to.be.equal(0)
  	})
  	done()
  })

  it('shall add the number', (done) => {
  	const calculator = new Calculator()
  	const output1 = calculator.add(10)

    expect(calculator.value).to.be.equal(0)
  	expect(output1).to.be.equal(10)

  	const output2 = calculator.add(10, 20, 30)

    expect(calculator.value).to.be.equal(0)
    expect(output2).to.be.equal(60)

  	calculator.save(output2)
  	expect(calculator.value).to.be.equal(60)
  	done()
  })

  it('shall not add if input is non-integer')

  it('shall minus the number', (done) => {
    const calculator = new Calculator()
    const output1 = calculator.minus(10, 20, 30)

    expect(output1).to.be.equal(-60)
    calculator.save(output1)
    expect(calculator.value).to.be.equal(-60)

    const output2 = calculator.minus(-60)
    expect(output2).to.be.equal(0)
    calculator.save(output2)
    expect(calculator.value).to.be.equal(0)

    done()
  })

  it('shall not minus if input is non-integer')

  it('shall multiply the number', (done) => {
    const calculator = new Calculator()
    const added1 = calculator.add(1)
    calculator.save(added1)

    expect(calculator.value).to.be.equal(1)
    const output = calculator.times(10, 20)
    expect(output).to.be.equal(200)
    calculator.save(output)

    expect(calculator.value).to.be.equal(200)
    done()
  })

  it('shall divide if is int', (done) => {
    const calculator = new Calculator()
    const add1 = calculator.add(1)
    calculator.save(add1)

    expect(calculator.value).to.be.equal(1)
    const output = calculator.divide(2)
    expect(output).to.be.equal(0.5)

    calculator.save(output)
    expect(calculator.value).to.be.equal(0.5)
    done()
  })

  it('shall not be divisible by 0', (done) => {
    const calculator = new Calculator()
    calculator.divide(0)
    console.log(calculator)
    done()
  })

  it('shall be able to undo', (done) => {
    const calculator = new Calculator()
    const add1 = calculator.add(1)
    calculator.save(add1)

    expect(calculator.value).to.be.equal(1)
    calculator.undo()
    expect(calculator.value).to.be.equal(0)
    done()
  })

  it('shall be able to save', (done) => {
    const calculator = new Calculator()
    calculator.save(10)
    expect(calculator.value).to.be.equal(10)
    done()
  })

  it('shall throw error when saving non-integer', (done) => {
    const calculator = new Calculator()
    expect(() => { calculator.save(null) }).to.throw('CalculatorError: Cannot save() non-integer number')
    done()
  })

})
