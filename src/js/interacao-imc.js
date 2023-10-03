// Declaração das variáveis
let resultadoDoImc = document.getElementById("resultado-do-imc")
let imagem = document.getElementById("imagem")
let textoResultado = document.getElementById("texto-resultado")
let botaoCalcular = document.getElementById('botao-calcular')
let botaoLimparDados = document.getElementById("botao-limpar-dados")
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")

altura.addEventListener('keydown', function(){
                let alturaLength = altura.value.length
                if (alturaLength === 1){
                        altura.value += '.'
                }
})

peso.addEventListener('keydown', function(){
        let pesoLength = peso.value.length
        if (pesoLength === 2){
                peso.value += '.'
        }
})


function calcularImc(){
        let altura = document.getElementById('altura').value
        let peso = document.getElementById('peso').value

        if (altura == '' || peso == ''){
            textoResultado.classList.remove("animacao")
            textoResultado.innerHTML = `Ops, você deve preencher os campos para poder prosseguir!`
            textoResultado.style.marginTop = "60px"
            textoResultado.style.color = "red"
            textoResultado.classList.add("animacao")
        } else {
                imc = peso / (altura * altura )
                textoResultado.style.marginTop = "60px"
        
                if (imc < 10){
                        textoResultado.classList.add("animacao")
                        textoResultado.innerHTML = `Ops, confira se você digitou as informações corretamente!`
                        textoResultado.style.color = "red"
                }
                else if (imc < 18.5){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está ABAIXO DO PESO`
                }
                else if (imc >= 18.5 && imc <= 24.9){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "green"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com seu peso NORMAL`
                }
                else if (imc >= 25 && imc <= 29.9){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com SOBREPESO`
                }
                else if (imc >= 30 && imc <= 34.9){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE DE PRIMEIRO GRAU`
                }
                else if (imc >= 35 && imc <= 39.9){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE DE SEGUNDO GRAU`
                }
                else if (imc > 40){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE GRAVE`
                }
        }
}


function limparDados() {
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
    textoResultado.classList.remove("animacao")
}