// IMPORTING
const names = require('./3-names')
const sayHi = require('./4-utils')
console.log(names)

const data = require('./5-alternativeSynatx')
console.log(data)

require('./6-mindGrenade')



sayHi('Siddhant')
sayHi(names.john)
sayHi(names.peter)

// CommonJS, every file in node is a module (by default)
// Modules - Encapsulated Code (only share minimum)