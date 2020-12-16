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

//isNaN - Retorna true se for valor NaN
var a = 'abc'
var b = '32'
var c = 23
var d = NaN // Valor especial

console.log(a, Number.isNaN(a))
console.log(b, Number.isNaN(b))
console.log(c, Number.isNaN(c))
console.log(d, Number.isNaN(d))

//toPrecision
var numero = 2356.45698
console.log(numero, numero.toPrecision(6), typeof numero.toPrecision(6))

//valueOf - Retorna o valor primitivo do dado
var valorX = new Number(23467)
console.log(valorX.valueOf(), typeof valorX.valueOf())

//isFinite
console.log(2 / 2)
console.log('isFinite: ', Number.isFinite(2 / 2))
console.log(1000 / 1)
console.log('isFinite: ', Number.isFinite(1000 / 1))
console.log(1000 / 0)
console.log('isFinite: ', Number.isFinite(1000 / 0))

//Valores pré definidos no js
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)
console.log(valorX.toString().length)