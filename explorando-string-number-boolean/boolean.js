var a = true; //Literal
console.log(a, 'Tipo: ', typeof a)

var b = new Boolean(false)
console.log(b, 'Tipo: ', typeof b)
console.log(b.toString(), 'Tipo: ', typeof b.toString())

//Retornar o valor primitivo
console.log('valueOf: ', b.valueOf(), typeof b.valueOf())
console.log(b.toString().toUpperCase())
console.log(b.toString().length)