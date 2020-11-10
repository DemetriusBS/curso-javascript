//Wrapper
var valorString = "Curso JS Mestre Jedi"
console.log(valorString.substr(0,5))

//Processo Wrapper
var valorStringTemp = new String(valorString)
var substr = valorStringTemp.substr(0,5)
valorStringTemp = null
console.log(substr)
substr = null
