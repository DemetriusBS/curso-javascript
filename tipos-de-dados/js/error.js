console.log("Linha 1")
//throw new Error("Ocorreu um erro na aplicação!")
console.log("Linha 2")

try {
    console.log(soma(10, new Array(10)))

} catch (error) {
    console.log(error)
    
}finally{
    console.log("Sempre será executado!")
}

function soma(a, b){
    return a + b
    return a[3]
}