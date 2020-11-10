//Programação Funcional
function sejaBemVindo(){
    console.log("Seja bem vindo a Formação JavaScript Mestre Jedi")

}

console.log("Chamando a função seja bem vindo sejaBemVindo():")
sejaBemVindo()

//Programação OO
var objProfessor = {
    nome: "Professor Madson Aguiar",
    curso: "Formação JS Mestre Jedi!!!",
    mistrarAula: function(){
        console.log("Ministrando aula de JavaScript!")
    }
}

console.log("Objeto Professor")
console.log(objProfessor)

console.log("Acessando propriedades do objeto: objProfessor.nome")
console.log(objProfessor.nome)
console.log(objProfessor.curso)

console.log("Chamando o método do objeto professor: objProfessor.mistrarAula() ")
objProfessor.mistrarAula()