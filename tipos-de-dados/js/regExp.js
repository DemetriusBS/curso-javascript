var regexpLiteral = /JS/ //Literal

var regexpConstrutor = new RegExp("Jedi")

var stringCurso = "Formação Completa JavaScript Mestre JS Jedi"

console.log(regexpLiteral.test(stringCurso))

console.log(regexpConstrutor.exec(stringCurso))