// Declaração das variáveis
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")
let resultadoDoImc = document.getElementById("resultado-do-imc")
let imagem = document.getElementById("imagem")
let textoResultado = document.getElementById("texto-resultado")
let botaoCalcular = document.getElementById('botao-calcular')
let botaoLimparDados = document.getElementById("botao-limpar-dados")

botaoCalcular.addEventListener("click", function(){
    if (altura.value.length == 0 || peso.value.length == 0){
        alert("[ERRO] Você deve preencher os campos para poder prosseguir")
    } else {
        
        altura = parseFloat(altura.value)
        altura /= 100
        peso = parseFloat(peso.value)
        let imc = peso / (altura * altura )

        if (imc < 18.5){
            textoResultado.classList.add("animacao")
            textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está DESNUTRIDO`
        }
        else if (imc >= 18.5 && imc <= 24.9){
            textoResultado.classList.add("animacao")
            textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com seu peso NORMAL`
        }
        else if (imc >= 25 && imc <= 29.9){
            textoResultado.classList.add("animacao")
            textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com SOBREPESO`
        }
        else if (imc >= 30 && imc <= 39.9){
            textoResultado.classList.add("animacao")
            textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE`
        }
        else if (imc > 40){
            textoResultado.classList.add("animacao")
            textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE GRAVE`
        }
    }
})

botaoLimparDados.addEventListener("click", function(){
    altura.value = ''
    peso.value = ''
})