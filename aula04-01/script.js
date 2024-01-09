function insert(num)
{
    let visor = document.getElementById("resultado")
    console.log(visor.innerText)
    visor.innerHTML +=num
}

function clean()
{
    let visor = document.getElementById("resultado")
    visor.innerHTML = ""
}





function back()
{
    let visor = document.getElementById("resultado").innerHTML
    document.getElementById('resultado').innerHTML = visor.substring(0, visor.length - 1)
}

function calcular()
{
  
    let visor = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = visor.replace("x","*")
    let calc = document.getElementById("resultado").innerHTML
    console.log(calc)
        if(calc)
        {
            document.getElementById('resultado').innerHTML = eval(calc);
        }
        else
        {
            document.getElementById('resultado').innerHTML = ""
        }

}























// function insert(num)
// {
//     let numero = document.getElementById('resultado').innerHTML;
//     document.getElementById('resultado').innerHTML = numero + num;
// }
// function clean()
// {
//     document.getElementById('resultado').innerHTML = "";
// }
// function back()
// {
//     let resultado = document.getElementById('resultado').innerHTML;
//     document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
// }
// function calcular()
// {
//     let resultado = document.getElementById('resultado').innerHTML;
//     if(resultado)
//     {
//         document.getElementById('resultado').innerHTML = eval(resultado);
//     }
//     else
//     {
//         document.getElementById('resultado').innerHTML = "Nada..."
//     }
// }