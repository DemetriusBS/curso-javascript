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