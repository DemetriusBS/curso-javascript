//while
var i = 0
while (i < 11) {
    console.log(i)
    i++
}

//Não travar o navegador
i = 0
while (true) {
    console.log(i)
    i++
    if(i == 1000) break
}