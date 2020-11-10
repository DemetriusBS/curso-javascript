var cliente = "Pedro"
console.log(window.cliente)

function realizarVenda(){
    var msgVenda = "Venda realizada com sucesso."
    console.log("Cliente: ", cliente)
    console.log(msgVenda)
}

function total(){
    var msgVenda = "Total: 6.6"
    console.log(msgVenda, "Escopo Function interna")
}

realizarVenda()
total()