//if ... else
var condicao = false
/*
if (condicao) console.log('0 - Entrou no bloco if')

if (condicao) {
    console.log('1 - Entrou no bloco if')
    console.log('2 - Entrou no bloco if')
}

if (condicao) {
    console.log('3 - Entrou no bloco if')
} else {
    console.log('4 - Entrou no bloco else')
}

if (condicao == true) {
    console.log('Bloco if')
} else {
    console.log('Bloco else')
}
*/

var texto = 'JS'

if (texto == 'js') {
    console.log('O texto é js!')
} else if (texto == 'Js') {
    console.log('O texto é Js')
} else if (texto == 'jS') {
    console.log('O texto é jS')
} else if (texto == 'JS') {
    console.log('O texto é JS!')
} else {
    console.log('Não foi encontrada a combinação!')
}

//----

condicao = true
var nome = 'Paulo'
if (condicao == true) {
    console.log('1 - Condição True')
    if (nome == 'Maria') {
        console.log('O cliente selecionado é Maria')
    } else {
        console.log('O cliente selecionado não é a Maria')
    }
} else {
    console.log('1 - Condição False')
}

//----

var a = 'a'
var bool = false
if (a == 'a' && bool == true) {
    console.log('a == a')
}

if (a == 'a' || bool == true) {
    console.log('2 - a == "a"')
}

if(false){
    console.log('true')
}

if(10 > 11){
    console.log('Retornou true')
}