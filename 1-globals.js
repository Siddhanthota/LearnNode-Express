// GLOBALS - NO WINDOW!!!

console.log(__dirname) //__dirname - path to current directory

console.log(__filename) //__filename - file name

// Similarly,
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

setInterval(() => {
    console.log('hello world')
}, 1000); //prints hello world every second