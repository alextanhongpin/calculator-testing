const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect

const Calculator = require('./calculator.js')

describe('Calculator', () => {

  it('shall create new calculator', (done) => {
  	const calculator = new Calculator()
    expect(calculator).to.be.an.instanceof(Calculator)
    done()
  })

  it('shall initialize with default value', (done) => {
  	const values = [1, 0, -10, '1', 'Hello', true, -0.1, 50.3]
  	values.forEach((v) => {
  		const calculator = new Calculator(v)
  		expect(calculator.value).to.be.equal(0)
  	})
  	done()
  })

  it('shall add the number', (done) => {
  	const calculator = new Calculator()
  	calculator.plus(10)

    expect(calculator.value).to.be.equal(10)
  	done()
  })


  it('shall minus the number', (done) => {
    const calculator = new Calculator()
    calculator.minus(10, 20, 30)
    expect(calculator.value).to.be.equal(-60)
    done()
  })


  it('shall multiply the number', (done) => {
    const calculator = new Calculator()
    calculator.plus(1)

    expect(calculator.value).to.be.equal(1)
    calculator.multiply(10, 20)
    expect(calculator.value).to.be.equal(200)
    done()
  })

  it('shall divide if is int', (done) => {
    const calculator = new Calculator()
    calculator.plus(1).divide(2)
    expect(calculator.value).to.be.equal(0.5)
    done()
  })

  it('shall not be divisible by 0', (done) => {
    const calculator = new Calculator()
    calculator.divide(2)
    expect(calculator.value).to.be.equal(0)
    done()
  })

  it('shall be able to undo', (done) => {
    const calculator = new Calculator()
    calculator.plus(1)
    expect(calculator.value).to.be.equal(1)

    calculator.undo()
    expect(calculator.value).to.be.equal(0)
    done()
  })

  it ('shall be chainable', (done) => {
    const calculator = new Calculator()
    calculator.plus(1).multiply(10).divide(2).minus(3)
    expect(calculator.value).to.be.equal(2)
    done()
  })

  it ('should be able to reset', (done) => {
    const calculator = new Calculator()
    calculator.plus(1).multiply(10).divide(2).minus(3)
    expect(calculator.value).to.be.equal(2)
    calculator.reset()
    expect(calculator.value).to.be.equal(0)
    done()
  })

  // it('shall throw error when saving non-integer', (done) => {
  //   const calculator = new Calculator()
  //   expect(() => { calculator.save(null) }).to.throw('CalculatorError: Cannot save() non-integer number')
  //   done()
  // })
})
