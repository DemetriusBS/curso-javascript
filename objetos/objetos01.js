//Como criar objetos
//Literal
/*
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
objetoProduto.nome = 'Mesa'
objetoProduto.preco = 89.99
objetoProduto.dimensoes = { largura: '1m', comprimento: '1,5m', altura: '90cm' }
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
var obj1 = { matricula: 18 }
console.log('obj1: ', obj1.matricula)
var obj2 = obj1
console.log('obj2 matricula: ', obj2.matricula)
obj2.matricula = 28
console.log('obj1 matricula: ', obj1.matricula)
console.log('obj2 matricula: ', obj2.matricula)

obj2 = null //Limpar a memória
console.log('Tipo objeto: typeof', typeof obj1)
console.log('Tipo objeto: instanceof', obj1 instanceof Object)

//Verificar se uma propriedade ou método existe no objeto ou em sua cadeia de protótipos

var pedido = new Object()
pedido.total = 233.45
console.log('cliente in pedido: ', 'cliente' in pedido)
console.log('total in pedido: ', 'total' in pedido)

//O in verifica se a propriedade ou método existe no objeto e na cadeia de protótipo

console.log('toString in pedido: ', 'toString' in pedido)

console.log('total in pedido com hasOwnProperty: ', pedido.hasOwnProperty('total'))
console.log('toString in pedido com hasOwnProperty: ', pedido.hasOwnProperty('toString'))

//Deletar propriedades do objeto e método
pedido.totalItens = 23
console.log('Removeu a prop totalItens?: ', delete pedido.totalItens)
console.log('totalItens: ', pedido.totalItens)

//Como obter as chaves(nome de propriedades) do objeto
var produtoTeste = { nome: 'teste', valor: 12, ativo: true }
var chaves = Object.keys(produtoTeste)
console.log('Object.keys(produtoTeste): ', chaves)
console.log('Tipo com typeof: ', typeof chaves)
console.log(Object.prototype.toString.call(chaves))
console.log('Verificar se é um array com Array.isArray: ', Array.isArray(chaves))

//Acessar os valores das propriedades do objeto
for (var prop in produtoTeste) {
    console.log(produtoTeste[prop])
}

var valoresProp = Object.values(produtoTeste) //ES2017
console.log('Object.values(produtoTeste): ', valoresProp)

//Recuperar as propriedades e valores do objeto
var chavesValores = Object.entries(valoresProp)
console.log(chavesValores)

for (const [chave, valor] of chavesValores) {
    console.log(chave + ':', valor)
}

//Criando propriedades de objeto de acesso e dado - get e set - atributos de propriedade

var folhaPagamento = {
    _total: 0, //Nomenclatura para atributos privados
    set total(valor) {
        // novoValor = valor + 1
        //this._total = novoValor
        this._total = valor
    },
    get total() {
        //Regra de negócio para tratar o retorno
        return this._total
    }
}

folhaPagamento.total = 75233,75
console.log('Total da folha de pagamento: R$ ', folhaPagamento.total)

console.log('Atributos das propriedades do objeto: ', Object.getOwnPropertyDescriptors(folhaPagamento))

var salarios = {
  _remuneracao: 988,

  set aaaa(novoValor){
      this._remuneracao = novoValor
  },

  get aaaa(){
      return this._remuneracao
  }
}

salarios.aaaa = 1050
console.log(salarios)


//Verificar se uma propriedade é iteravel / enumerável

var objTeste = { a: 1, b: 2, c: 3 }
console.log('a in objTeste:', 'a' in objTeste)
console.log(objTeste.propertyIsEnumerable('a'))
console.log(objTeste.propertyIsEnumerable('toString'))
console.log(objTeste.propertyIsEnumerable('length'))

console.log(objTeste)
for (var [k, v] of Object.entries(objTeste)) {
    console.log(k, v)
}

Object.defineProperty(objTeste, 'a', {
    enumerable: false,
    configurable: false
})

console.log('----------------------------------')

for (var [k, v] of Object.entries(objTeste)) {
    console.log(k, v)
}

delete objTeste.a

//Tornar uma propriedade gravável em não gravável
objTeste.b = 10
console.log(objTeste.b)

Object.defineProperty(objTeste, 'b', {
    writable: false
})

objTeste.b = 20
console.log(objTeste.b)


//Definindo propriedades e atributos 
var objAluno2 = {}
Object.defineProperties(objAluno2, {
    nome: {
        value: 'Fernanda',
        enumerable: true,
        configurable: true,
        writable: true
    },
    turma: {
        value: 'A',
        enumerable: true,
        configurable: false,
        writable: false
    }
})

console.log(objAluno2)
objAluno2.turma = 'B'
delete objAluno2.turma
console.log(objAluno2)

var objAluno3 = {}
Object.defineProperties(objAluno3, {
    _nome: {
        value: 'Mateus',
        enumerable: true,
        configurable: true,
        writable: true
    },
    nome: {
        get: function () {
            return this._nome + 'Turma: A'
        },
        set: function (valor) {
            this._nome = valor
        }
    }
})

objAluno3.nome = 'Diego '
console.log('Nome do aluno: ', objAluno3.nome)


//Recuperar as informações de atributos de propriedades

var objCarro = {marca: 'Fiat', cor: 'Preta'}
console.log('1 - Object.getOwnPropertyDescriptors(objCarro): ', Object.getOwnPropertyDescriptors(objCarro))
Object.defineProperty(objCarro, 'cor', {enumerable: false, configurable: false, writable: false})
console.log('2 - Object.getOwnPropertyDescriptors(objCarro): ', Object.getOwnPropertyDescriptors(objCarro))


//Travar objeto para ficar não extensível
var moto = {marca: 'Yamaha', cor: 'Vermelha'}
console.log('(Object.getOwnPropertyDescriptors(moto): ', Object.getOwnPropertyDescriptors(moto))
console.log('Object.isExtensible(moto):', Object.isExtensible(moto))
console.log('Object.preventExtensions(moto): ', Object.preventExtensions(moto))
moto.placa = 'AMD 4766'
moto.ligar = function(){
    return 'moto ligada'
}
console.log('(Object.getOwnPropertyDescriptors(moto): ', Object.getOwnPropertyDescriptors(moto))
console.log('Object.isExtensible(moto):', Object.isExtensible(moto))
console.log('placa' in moto)
console.log('ligar' in moto)

moto.cor = 'Azul'
console.log('(Object.getOwnPropertyDescriptors(moto): ', Object.getOwnPropertyDescriptors(moto))
console.log('Object.isExtensible(moto):', Object.isExtensible(moto))

console.log("delete moto.cor: ", delete moto.cor)
console.log('(Object.getOwnPropertyDescriptors(moto): ', Object.getOwnPropertyDescriptors(moto))

//Object.defineProperty(moto, 'cor', {value: 'Amarela'}) Gera um erro pois o objeto não é extensível
*/


/*Como selar um objeto - um objeto selado não é extensível 
Não pode add props
As props não são configuráveis
Não deletável
*/

var livro ={titulo: 'JS', paginas: 155}
console.log(Object.isExtensible(livro))
console.log(Object.isSealed(livro))
console.log("Selando o objeto: ", Object.seal(livro))
console.log(Object.isExtensible(livro))
console.log(Object.isSealed(livro))

console.log("Tentando deletar: ", delete livro.titulo)

livro.paginas = 1456
console.log(Object.getOwnPropertyDescriptors(livro))

