var contaStatus = false
console.log("Status da conta: ", contaStatus)

var contaStatus = true
console.log("Status da conta: ", contaStatus)

console.log(typeof contaStatus)

if(contaStatus == true){
    console.log("Enviar e-mail.")
}else{
   console.log("Ative sua conta.")
}

console.log(!contaStatus)

var nome = "Demetrius"
var preco = 65.4
var vazio = ""

console.log(!!nome)
console.log(!!preco)
console.log(!!vazio)