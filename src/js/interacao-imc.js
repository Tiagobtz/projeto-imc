// Declaração das variáveis
let resultadoDoImc = document.getElementById("resultado-do-imc")
let imagem = document.getElementById("imagem")
let textoResultado = document.getElementById("texto-resultado")
let botaoCalcular = document.getElementById('botao-calcular')
let botaoLimparDados = document.getElementById("botao-limpar-dados")
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")
let spans = document.querySelectorAll('.spans')

altura.addEventListener('keydown', function(event){
        let alturaLength = altura.value.length
        if (event.key === '.' || event.key === ','){
            event.preventDefault()
        } else if (alturaLength === 1) {
             altura.value += '.'
        }
})

peso.addEventListener('keydown', function(event){
        if (event.key === ','){
            event.preventDefault()
            peso.value += '.'
        }
})

altura.addEventListener('input', function(event) {
        if (event.data === null && altura.value.length > 0) {
            altura.value = altura.value.slice(0, -1);
        }
})

peso.addEventListener('input', function(event) {
        if (event.data === null && peso.value.length > 0) {
            peso.value = peso.value.slice(0, -1);
        }
})

altura.addEventListener("blur", function(){
        textoResultado.classList.remove("animacao")
        checarAltura()
})

peso.addEventListener("blur", function(){
        textoResultado.classList.remove("animacao")
        checarPeso()
})

function calcularImc(){
        let altura = document.getElementById('altura').value
        let peso = document.getElementById('peso').value
        
        imc = peso / (altura * altura )

        if (altura || peso){
                
                window.location.href = "#resultado-do-imc"

                if (imc === Infinity || imc <= 10){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `Ops, você deve ser mais coerente ao preencher os campos, pois dessa forma não irei conseguir calcular seu IMC!`
                        margin()
                }
                else if (imc < 18.5){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está ABAIXO DO PESO`
                        margin()
                }
                else if (imc >= 18.5 && imc <= 24.99){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "green"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com seu peso NORMAL`
                        margin()
                }
                else if (imc >= 25 && imc <= 29.9){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com SOBREPESO`
                        margin()
                }
                else if (imc >= 30 && imc <= 34.9){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE DE PRIMEIRO GRAU`
                        margin()
                }
                else if (imc >= 35 && imc <= 39.9){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE DE SEGUNDO GRAU`
                        margin()
                }
                else if (imc > 40){
                        textoResultado.classList.add("animacao")
                        textoResultado.style.color = "red"
                        textoResultado.innerHTML = `O resultado do cálculo do seu IMC é de ${imc.toFixed(2)} você está com OBESIDADE GRAVE`
                        margin()
                }
        } else if (altura === '' || peso === ''){
                checarAltura()
                checarPeso()
        }
        
}

function checarAltura(){
        let altura = document.getElementById('altura').value
        if (altura === ''){
                spans[0].style.display = 'block'
                spans[0].innerHTML = '*Campo obrigatório'
        } else {
                spans[0].style.display = 'none'
        }
}

function checarPeso(){
        let peso = document.getElementById('peso').value
        if (peso === ''){
                spans[1].style.display = 'block'
                spans[1].innerHTML = '*Campo obrigatório'
        } else {
                spans[1].style.display = 'none'
        }
}

function margin(){
        textoResultado.style.marginTop = "50px"
}

function limparDados() {
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
    textoResultado.innerHTML = '- Preencha os campos com sua altura e peso corretamente e depois click no botão para ver o resultado do seu IMC.'
    textoResultado.style.color = '#000'
    textoResultado.style.marginTop = "50px"
}