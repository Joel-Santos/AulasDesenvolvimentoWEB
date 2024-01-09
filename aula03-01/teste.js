function calcularNovoPreco(){
    const preco = document.getElementById("valorProduto").value
    let novopreco = qst1(preco)
    alert(novopreco)
}

// 1- Calcule o preço total de um produto após aplicar um desconto de 20%.
function qst1(produto, desconto){
    let preco = document.getElementById(produto).value
    let novoPreco = document.getElementById("novoPreco")
    const percDesconto = document.getElementById(desconto).value
    //console.log(preco)
   // const desc = 0.20
    preco -= preco*(percDesconto/100)
    novoPreco.innerHTML += `Novo Preço = ${preco}`
    //alert(preco)
}


console.log(`Valor final: ${qst1(20)}`)
// 2- Converta uma temperatura em Celsius para Fahrenheit 
//F = C x 1,8 + 32.
function qst2(temp){
    let f =  temp * 1.8 + 32
    return f
}
console.log(`Temperatura em F° ${qst2(20)}`)
// 3 - Calcule o perímetro e a área de um retângulo.



// 4 - Calcular e apresentar a idade a partir do ano de nascimento.




