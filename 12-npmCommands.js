// npm is automatically downloaded with node itself
// npm --v gives the version of npm

//local dependency - use it only in this particular project
// npm i <packagename>

// global dependency - use it in any project on your device
//npm install -g <packagename>

//package.json - manifest file(stores important info about thr project/ packages)
//It can be created using :
//  Manual approach (create package.json in the root, create properties etc)
//  npm init (step by step asks questions, press enter to skip)
//  npm init -y (everything default)

// Lets use a package called 'lodash' :
const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)