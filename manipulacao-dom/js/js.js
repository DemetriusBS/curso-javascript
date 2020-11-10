
var nomeBootInputText = window.document.getElementById("nomeBoot")
var estadoSelect = document.getElementById("estadoSelectBoot")

function selecionarCampos() {

    console.log("typeof: " + typeof nomeBootInputText)
    console.log("object call: " + Object.prototype.toString.call(nomeBootInputText))

    console.log("Recuperar valor com value: " + nomeBootInputText.value)

    //nomeBootInputText.disabled = true
    console.log("disabled: nomeBootInputText = true")

    //nomeBootInputText.readOnly = true
    console.log("readOnly: nomeBootInputText = true")

    console.log("tagName: " + nomeBootInputText.tagName)

    nomeBootInputText.value = "Jessica"

}

function selecionarCampoSelect(){
    console.log("object call: " + Object.prototype.toString.call(estadoSelect))
    console.log("estadoSelect.value " + estadoSelect.value)
    console.log("estadoSelect.selectedIndex " + estadoSelect.selectedIndex)
    console.log("tagName: " + estadoSelect.tagName)
    console.log("tagName type: " + estadoSelect.type)
    estadoSelect.selectedOptions //Quando há a opção de selecionar mais de uma opção no select (Multiple(marcar esta opção no select, próximo ao id))
    estadoSelect.selectedOptions.item(0)
    estadoSelect.selectedOptions[1]
    estadoSelect.lenght
    estadoSelect.disabled = true
}

var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot")

function selecionarCampoEmailCheck(){
    console.log("object call: " + Object.prototype.toString.call(emailPromocionalCheck))
    console.log("tagName: " + emailPromocionalCheck.tagName)
    console.log("tagName type: " + emailPromocionalCheck.type)
    console.log("Valor: " + emailPromocionalCheck.value)
    console.log("Valor checked(marcado): " + emailPromocionalCheck.checked)
}

var formaContatoRadio = document.querySelector("[name = formaContatoRadioBoot]")

function selecionarCampoRadio(){
    console.log("object call: " + Object.prototype.toString.call(formaContatoRadio))
    console.log("tagName: " + formaContatoRadio.tagName)
    console.log("tagName type: " + formaContatoRadio.type)
    console.log("Valor: " + formaContatoRadio.value)
    console.log("Valor checked(marcado): " + formaContatoRadio.checked)
}

var radios = document.getElementsByName("formaContatoRadioBoot")

function selecionarCamposRadios(){
    console.log("object call: " + Object.prototype.toString.call(radios))
    
}

var elemento = document.querySelectorAll("input[type=text]")

var radios = document.querySelectorAll("[name=formaContatoRadioBoot]")

var formulario = document.querySelector("#formBoot")

console.log("Form type: ", Object.prototype.toString.call(formulario))

var inputNome = document.getElementById("nomeBoot")

inputNome.value = "Demetrius"

function exibirDados(elemento){
    console.log(elemento)
}