                                 'FUNCTION'

// PRIMEIRO a fazer
function ola() { // ou function prompt dependendo do caso, isso é um exemplo
    console.log("Olá, mundo!")
}

// SEGUNDO a fazer
ola() 

// ========================================================================================== //

//EXEMPLO 1
 function nome() {
    const nome = "Antônio"
    console.log(`My name is ${nome}!`)
}
nome() 

// =========================================================================================== //

//EXEMPLO 2
function nome(nome, idade) {
    console.log(`My name is ${nome}, e tenho ${idade} anos!`)
}
nome("Antônio", 17 ) // Sempre na ordem dos paraâmetros, e mesma quantidade 

// ================================================================================================ //

// EXEMPLO 3 (sem console.log, método adequado)
function soma(a, b) {
    return a + b
}



const resultado = soma(3, 5)

// PARTE NÃO COLOCADA NOS CÓDIGOS
console.log(resultado) 

//FUNÇÃO DE MULTIPLICAÇÃO
function multiplicação(a, b) {
    return a * b
}

//CHAMADAS
const resMulti = multiplicação(2, 2)

//TESTES
console.log(resMulti) 

// ============================================================================================== //

//COM ESTRUTURAS DE REPETIÇÃO
function verificarAprovação(nota) {
    if (nota >= 7) {
        return "Aprovado"
    } else {
        // em caso de ser preciso algo dentro do bloco, colocar acima do return
        return "Reprovado" // RETURN : ultima coisa a ser colocada
    }
}
const res = verificarAprovação(4)

console.log(res)

// ================================================================================================= //

// DADOS DINÂMICOS
const prompt = require("prompt-sync") ()

function verificarAprovacao(nota) {
    if (nota >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}

const nota = Number(prompt("Digite sua nota: "))

const status = verificarAprovacao(nota)

console.log(status)*/

// ================================================================================================== //
  
// FUNÇÃO aerofunction
const soma = () => {
    //arrow function
}

//FUNÇÃO nomeada
const soma = function() {
    //função someada
}
