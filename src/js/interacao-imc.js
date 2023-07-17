// Declaração das variáveis
let resultadoDoImc = document.getElementById("resultado-do-imc")
let imagem = document.getElementById("imagem")
let textoResultado = document.getElementById("texto-resultado")
let botaoCalcular = document.getElementById('botao-calcular')
let botaoLimparDados = document.getElementById("botao-limpar-dados")

function calcularImc(){
        let altura = document.getElementById("altura").value
        let peso = document.getElementById("peso").value

        if (altura == '' || peso == ''){
            alert("[ERRO] Você deve preencher os campos para poder prosseguir")
        } else {
                imc = peso / (altura * altura )
                textoResultado.style.marginTop = "60px"
        if (imc < 2){
                alert('[ERRO] Você deve preencher o campo que exige a altura com o uso de vírgula ou ponto, para que o cálculo seja feito corretamente')
                textoResultado.style.marginTop = "0"
        }
        else if (imc < 18.5){
                textoResultado.style.color = "red"
                textoResultado.classList.add("animacao")
                textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está ABAIXO DO PESO`
        }
        else if (imc >= 18.5 && imc <= 24.9){
                textoResultado.style.color = "green"
                textoResultado.classList.add("animacao")
                textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com seu peso NORMAL`
        }
        else if (imc >= 25 && imc <= 29.9){
                textoResultado.style.color = "red"
                textoResultado.classList.add("animacao")
                textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com SOBREPESO`
        }
        else if (imc >= 30 && imc <= 34.9){
                textoResultado.style.color = "red"
                textoResultado.classList.add("animacao")
                textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE DE PRIMEIRO GRAU`
        }
        else if (imc >= 35 && imc <= 39.9){
                textoResultado.style.color = "red"
                textoResultado.classList.add("animacao")
                textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE DE SEGUNDO GRAU`
        }
        else if (imc > 40){
                textoResultado.style.color = "red"
                textoResultado.classList.add("animacao")
                textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE GRAVE`
        }
    }
}


function limparDados() {
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
}