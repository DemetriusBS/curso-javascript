var periodo = 'Matutino'
//var mensagem = expressão ? true : false
var mensagem = periodo == 'Matutino' ? 'Bom dia!' : 'Olá!'
console.log(mensagem)

periodo = 'Vespertino'
var mensagem2 = periodo == 'Matutino' ? 'Bom dia!' : periodo == 'Vespertino' ? 'Boa tarde!' : 'Boa noite!'
console.log(mensagem2)
