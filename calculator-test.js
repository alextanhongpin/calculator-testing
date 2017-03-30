const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect

const Calculator = require('./calculator.js')

describe('Calculator', () => {
  it('should create new calculator', (done) => {
  	const calculator = new Calculator()
    expect(calculator).to.be.an.instanceof(Calculator)
    done()
  })

  it('should initialized with default value', (done) => {
  	const values = [1, 0, -10, '1', 'Hello', true, -0.1, 50.3]
  	values.forEach((v) => {
  		const calculator = new Calculator(v)
  		expect(calculator.value).to.be.equal(0)
  	})
  	done()
  })

  it('should add the number', (done) => {
  	const calculator = new Calculator()
  	const output1 = calculator.add(10)
  	expect(output1).to.be.equal(10)

  	const output2 = calculator.add(10, 20, 30)
  	expect(output2).to.be.equal(60)

  	calculator.save(output2)
  	expect(calculator.value).to.be.equal(60)

  	done()
  })

  it('should minus the number')
  it('should multiply the number')
  it('should be chainable')
})
