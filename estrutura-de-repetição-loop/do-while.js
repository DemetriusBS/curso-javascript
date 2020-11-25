//do while
var meta = 10
var realizado = 30
var comissao = 0.0

do {
    if (realizado >= meta) {
        console.log('Valor da comissão em R$ ', ++comissao)
        if (comissao == 20) break;
    } else {
        console.log('Valor da comissão em R$ ', comissao += 2)
        break
    }
} while (comissao < realizado);