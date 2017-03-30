class Calculator {
  constructor () {
  	this.value = 0
  }
  add (val) {
  	const args = [].slice.call(arguments)
  	args.every(this.validateInt)
  	const total = args.reduce((total, next) => {
  		total += next
  		return total
  	}, 0)
  	return this.value = total
  }
  minus (val) {
  	this.validateInt(val)
  	this.value -= val
  	return this
  }
  times (val) {
  	this.validateInt(val)
  	this.value *= val
  	return this
  }
  divide (val) {
  	this.validateInt(val)
  	this.value /= val
  	return this
  }
  validateInt (value) {
  	if (!Number.isInteger(value)) {
  		throw new Error('Must initialize with an int')
  	}
  	return true
  }
  save (val) {
  	this.value = val
  }
  reset () {
  	this.value = 0
  }
}

module.exports = Calculator
