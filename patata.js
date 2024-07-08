console.log("patata desde node")

const variableEnPatata = 2000
const otraVariableEnPatata = 1500


// sintaxis ES5
// module.exports = variableEnPatata
// module.exports = [variableEnPatata, otraVariableEnPatata]
// module.exports = {
//   variableEnPatata: variableEnPatata,
//   otraVariableEnPatata: otraVariableEnPatata
// }
// exporto la data para que cualquier otro modulo pueda hacer uso de ella

// sintaxis ES6 (lo mismo que arriba pero con sintaxis más reciente)
export default {
  variableEnPatata: variableEnPatata,
  otraVariableEnPatata: otraVariableEnPatata
}