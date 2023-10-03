// Declaração das variáveis
let resultadoDoImc = document.getElementById("resultado-do-imc")
let imagem = document.getElementById("imagem")
let textoResultado = document.getElementById("texto-resultado")
let botaoCalcular = document.getElementById('botao-calcular')
let botaoLimparDados = document.getElementById("botao-limpar-dados")
let altura = document.getElementById("altura")
let peso = document.getElementById("peso")

altura.addEventListener('keydown', function(event){
                let alturaLength = altura.value.length
                if (event.key === '.' || event.key === ','){
                        event.preventDefault()
                } else if (event.key === 'Backspace') {
                        return
                } else if (alturaLength === 1) {
                        altura.value += '.';
                }
})

peso.addEventListener('keydown', function(event){
        let pesoLength = peso.value.length
        if (event.key === '.' || event.key === ','){
                event.preventDefault()
        } else if (event.key === 'Backspace') {
                return
        } else if (pesoLength === 2) {
                peso.value += '.';
        }
})

altura.addEventListener('input', function(event) {
        if (event.data === null && altura.value.length > 0) {
            // O evento "input" foi acionado sem adição de dados (possivelmente pressionando o botão de apagar em um dispositivo móvel).
            // Nesse caso, remova o último caractere do valor.
            altura.value = altura.value.slice(0, -1);
        }
    })


function calcularImc(){
        let altura = document.getElementById('altura').value
        let peso = document.getElementById('peso').value

        if (altura !== Number || peso !== Number){
            textoResultado.classList.remove("animacao")
            textoResultado.innerHTML = `Ops, você deve preencher os campos apenas com valores numéricos!`
            textoResultado.style.marginTop = "60px"
            textoResultado.style.color = "red"
            textoResultado.classList.add("animacao")
        }

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