console.log('------------FOR IN-----------')

var objCliente = { nome: 'Demetrius', idade: 23, dataNasc: new Date('1993-08-18') }

for (var chave in objCliente) {
    console.log('Chave: ', chave)
    console.log('Valor: ', objCliente[chave])
}

console.log('-----------FOR IN------------')

var arrayQualquer = ['a', 'b', 'c', 1, 2, 3]

for (var index in arrayQualquer) {// for...in: index recebe o index do elemento do array
    console.log('Index: ', index)
    console.log('Index: ', arrayQualquer[index])
}

console.log('----------FOR OF-------------')

for (var valor of arrayQualquer) {// for ... of: valor recebe o valor do elemento do array
    console.log('Valor: ', valor)
}