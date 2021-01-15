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

//Criar um objeto com construtor Object
var objetoProduto = new Object()
objetoProduto.nome ='Mesa'
objetoProduto.preco = 89.99
objetoProduto.dimensoes = {largura: '1m', comprimento: '1,5m', altura: '90cm'}
objetoProduto['nome no formato string válido'] = 'deu certo isso'
var nomeProp = 'novoNome'
objetoProduto[nomeProp] = 'deu certo o novo nome'
objetoProduto[''] = 'vazio'
objetoProduto['123'] = 123

//Acessar usando operador membro
console.log('Nome: ', objetoProduto['nome'])
console.log('Altura: ', objetoProduto.dimensoes.altura)
console.log('Cubo', objetoProduto.dimensoes.cubo)
//console.log('Cubo', objetoProduto.dimensoes.cubo.valor) //Gerou erro ao acessar uma propriedade de undefined
console.log(objetoProduto['nome no formato string válido'], objetoProduto['nome no formato string válido'])

for (var elemento in objetoProduto.dimensoes) {
    console.log(elemento, objetoProduto.dimensoes[elemento])
}

//Objeto por referência
var obj1 = {matricula: 18}
console.log('obj1: ', obj1.matricula)
var obj2 = obj1
console.log('obj2 matricula: ', obj2.matricula)
obj2.matricula = 28
console.log('obj1 matricula: ', obj1.matricula)
console.log('obj2 matricula: ', obj2.matricula)

obj2 = null //Limpar a memória
console.log('Tipo objeto: typeof', typeof obj1)
console.log('Tipo objeto: instanceof', obj1 instanceof Object)