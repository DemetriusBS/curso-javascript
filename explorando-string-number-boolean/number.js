//toString
var valor = new Number(3.456)
console.log(valor, '1 - Tipo: ', typeof valor)
console.log(valor.toString(), '1 - Tipo: ', typeof valor.toString())

//toFixed
console.log(valor, 'typeof: ', typeof valor + " ", valor.toFixed(2), 'typeof: ' + typeof valor.toFixed(2))

//Converter para ponto flutuante
var valorPontoFlutuante = Number.parseFloat(valor.toFixed(2))
console.log(valorPontoFlutuante, typeof valorPontoFlutuante)

//Converter para um inteiro
var valorInteiro = Number.parseInt(valor)
console.log(valorInteiro, typeof valorInteiro)

//Verificar se é um inteiro
var v1 = 23.67
var v2 = "78"
var v3 = false
var v4 = 43

console.log(v1, Number.isInteger(v1))
console.log(v2, Number.isInteger(v2))
console.log(v3, Number.isInteger(v3))
console.log(v4, Number.isInteger(v4))