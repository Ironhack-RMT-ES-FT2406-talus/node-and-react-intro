
console.log("ejecuta javascript con node")

let someNumber = 0;
someNumber += 20
console.log(someNumber)


// que pasa si yo quiero ejecuta todo lo que hay acá y luego automaticamente todo lo que hay en patata.js
// require("./patata.js") // siempre el acceso de forma relativa, las carpetas importan

// sintaxis ES5 
// const dataImportada = require("./patata.js")
// 1. ejecuta TODO el código que haya dentro del archivo
// 2. opcionalmente recibe una data que este archivo este exportando


// sintaxis ES6
import dataImportada from "./patata.js"

console.log(dataImportada.variableEnPatata)
console.log(dataImportada.otraVariableEnPatata)

import "./script2.js" // ejecuta el archivo sin importar data
