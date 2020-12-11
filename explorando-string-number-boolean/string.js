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
console.log(nome.substr(0,5))

//Buscar parte de uma string informando o índice inicial e final
console.log(nome.substring(0,10))
console.log(nome.substring(5))


