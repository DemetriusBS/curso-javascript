//Operador '='

var numero  = 10
var numero2 = 1
var nome = 'Pedro'
var verdadeiro = true

numero = numero = numero2
console.log(numero)

//Operador '+='
var numero3 = 10
numero3 = numero3 + 1
numero3++
numero3 += 1
console.log(numero3)
nome += ' Silva'
console.log('Nome completo: ', nome)
numero3 += true
console.log(numero3)


//Operador '-='
var sub = 30
sub -= 20
console.log(sub)

//Operador '*='
var multi = 2
multi *= 2
console.log(multi)


//Operador '/='
var div = 5
div /= 2
console.log(div)


//Operador '%='
var mod = 9
mod %= 2
console.log(mod)


//Operador '**='ES7
var exp = 3
exp **= 3
console.log(exp)

//Operador <<= Left Shift
var num1 = 320
console.log('1 - num1 em Base10: ', num1)
console.log('2 - num1 em Base2: ', num1.toString(2))
num1 <<= 8
console.log('3 - num1 em Base2: ', num1.toString(2))
console.log('4 - num1 em Base10: ', num1)


//Operador >>= Right Shift
var num2 = 320
console.log('1 - num2 em Base10: ', num2)
console.log('2 - num2 em Base2: ', num2.toString(2))
num2 >>= 7
console.log('3 - num2 em Base2: ', num2.toString(2))
console.log('4 - num2 em Base10: ', num2)


//Operador >>>= Right Shift Sem Sinal
var num3 = -320
console.log('1 - num3 em Base10: ', num3)
console.log('2 - num3 em Base2: ', num3.toString(2))
num3 >>>= 7
console.log('3 - num3 em Base2: ', num3.toString(2))
console.log('4 - num3 em Base10: ', num3)


