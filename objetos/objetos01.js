//Como criar objetos
//Literal
var objPessoa01 = {nome: 'Diego'}
console.log(objPessoa01.nome)

//Construtor
var objPessoa02 = new Object()
objPessoa02.nome = 'Maria'
console.log(objPessoa02.nome)

//Object.create que irá criar um objeto com protótipo
var objPessoa03 = Object.create(Object.prototype)
objPessoa03.nome = 'João'
console.log(objPessoa03.nome)

//Funções construtoras
var obj01 = new Object()
var obj02 = new Array(1,2,3)
var obj03 = new Date()//Data atual
var obj04 = new Error('Ocorreu um erro')
var obj05 = new RegExp(/teste/)
