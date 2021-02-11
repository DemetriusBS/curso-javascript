/*
//Literal
var array =[]
array[0] = 'Teste'
array.push('Teste 2')
console.log('Exibir array: ', array)

var nomes = ['Pedro', 'João', 'Maria']
console.log('Nomes: ', nomes)
console.log('nomes[0]: ', nomes[0])
console.log('nomes.length: ', nomes.length)

//Construtor
var numeros = new Array(33, 47, 74, 88, 95)
console.log('numeros: ', numeros)
var numeros2 = new Array(2)
console.log('numeros2: ', numeros2)
console.log('numeros2.length: ', numeros2.length)
numeros2[0] = 56
numeros2[1] = 77
console.log(numeros2)
*/

//CRIAR UM ARRAY COM TIPAGEM FRACA

var arrayTipagemFraca = [
    'string',
    24.33,
    true,
    { livro: 'Javascript', detalhe: { paginas: 23, ativo: true } },
    [0, 1, 2, 3, 4, ['a', 'b', 'c']],
    function(a, b){
        return a + b
    },
]

console.log('array', arrayTipagemFraca)
console.log(arrayTipagemFraca[3])