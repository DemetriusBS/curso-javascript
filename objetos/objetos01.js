//Como criar objetos
//Literal
var objPessoa01 = { nome: 'Diego' }
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
var obj02 = new Array(1, 2, 3)
var obj03 = new Date()//Data atual
var obj04 = new Error('Ocorreu um erro')
var obj05 = new RegExp(/teste/)

//Criar objeto literal
var objetoPessoa = {
    nome: 'Pedro Damasceno',
    cpf: 23456789555,
    dataNasc: new Date(1977, 2, 25),
    ativo: true,
    'teste prop: ': "teste",
    contatos: [1254697723, 1280246557],
    endereco: { rua: 'Rua das magnólias', numero: 1023, cep: 1457894 },
    saudacao: function () {
        return 'Olá, me chamo ' + this.nome + '!';
    }
}

console.log(objetoPessoa)

//Acessar propriedades
console.log('Nome: ', objetoPessoa.nome)
console.log('CPF: ', objetoPessoa.cpf)
console.log('Data de nascimento: ', objetoPessoa.dataNasc)
console.log('Ativo?: ', objetoPessoa.ativo)
console.log('Teste: ', objetoPessoa['teste prop'])
console.log('Contatos: ', objetoPessoa.contatos[0])
for (var contato of objetoPessoa.contatos) {
    console.log('Contato: ', contato)
}
console.log('Endereço: ', objetoPessoa.endereco.rua)
for (var key in objetoPessoa.endereco) {
    console.log(key, objetoPessoa.endereco[key]) 
    }

//Chamar método
console.log(objetoPessoa.saudacao)
console.log(objetoPessoa.saudacao())