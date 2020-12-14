//string
//toString()
var nome = new String("Maria da Silva")
console.log("1 - Tipo: ", typeof nome)
console.log("2 - Tipo: ", typeof nome.toString())

//length
console.log("Length: ", nome.length)

//Iterar na string
for (var indice in nome) {
  console.log("Índice: " + indice, nome[indice])
}

//Recuperar valor a partir do index
console.log(nome.charAt(9))

//Recuperar o código do caractere que representa aquela determinada posição
console.log(nome.charCodeAt(9))

//recuperar o index a partir de um valor
console.log(nome.indexOf('S'))

//Recuperando o índice do último caractere pesquisado
console.log(nome.lastIndexOf('a'))

//Concatenar mais dados na string
console.log(nome.concat(' - Seja bem vindo(a)!').concat(" Obrigado por nos visitar!"))

//Retorna um código html
console.log('sub', nome.sub())
console.log('sup', nome.sup())

//Buscar uma quantidade de caracter a partir de um índice
console.log(nome.substr(0, 5))

//Buscar parte de uma string informando o índice inicial e final
console.log(nome.substring(0, 10))
console.log(nome.substring(5))

//replace - substituir dados em uma string
console.log(nome.replace('a', '?'))
console.log(nome.replace(/a/g, '?'))

nome = nome.replace(/\?/g, function (x) {
  return 'a'
})

console.log(nome)

//split - dividir a string
console.log(nome.split(''))
console.log(nome.split(" "))
console.log(nome.split(" ", 1))
console.log(nome.split('a'))
console.log(nome.split(/ da /g))

//Texto em caixa alta e baixa
console.log(nome.toLowerCase())
console.log(nome.toUpperCase())

//Match - Realizar uma pesquisa com RegExp
var texto = "Casa de Papel de Madeira de Ferro"
var resultado = texto.match(/de/g)
console.log("Tipo: ", Object.prototype.toString.call(resultado))
console.log(resultado)

//search
var resultado2 = texto.search(/de/g) //retorna -1 quando não encontra nada
console.log("Tipo: ", Object.prototype.toString.call(resultado2))
console.log(resultado2)

//Para verificar se uma string começa com algo '?'
console.log(nome.startsWith('Maria'))
console.log(nome.startsWith('Maria', 4))

//Retirar os espaços antes e depois do texto
var texto2 = "  texto"
console.log(texto2.trim())

//valueOf - String
var nome2 = new String('Pedro')
console.log(typeof nome2)
console.log(nome2.valueOf())

//Precisar repetir o valor da string
console.log(nome2.repeat(3))