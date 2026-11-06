const prompt = require("prompt-sync") ()

const nome = prompt("digite seu nome: ")
console.log(`meu nome é ${nome}`)

//looping 

const prompt = require ("prompt-sync") ()

let idade = Number(prompt("digite sua idade"))

while (idade >= 18) {
console.log("você entrou na festa!")
}


// contador++\-- (aumenta ou diminui de 1 em 1)
// variavel = variavel +1 (aumenta conforme indicado,+1,+2...)

let contador = 0

while (contador <= 5) {
    console.log(`O numero é ${contador}`)
        contador++

}

console.log("programa finalizado")


// do while

let contador = 0

while (contador <= 3) {
    console.log(`Contador while: ${contador}`)
    contador++
}

do {
    console.log(contador)
        contador++
} while (contador <= 3)


// do while (sistema de acesso de senha)

const prompt = require("prompt-sync") ()

const senhaCorreta = "1234"
let senha = ""

do {
    senha = prompt("digite sua senha: ")
} while (senha !== senhaCorreta)

console.log("Acesso liberado!")

//====================================================================================//

//ESTRUTURA DE REPETIÇÃO
//FOR:Quando sei a quantidade exata de repetições necessárias,DEBUG : ver como o código está sendo executado
// for (contador ; condição ; incremento) {
// console.log
// }

for (let i = 1 ; i <= 5; i++) {
  console.log(i}
//====================================//
let soma = 0 
for (let numero = 1 ; numero <= 4 ; numero++) { // INICIALMENTE : soma = 0 numero = 1 
  soma = soma+ numero }
console.log(soma)
//====================================//
let peca = 0
for (let i = 1 ; i <= 6 ; i++ ) {
  pecas = pecas + 2
}
console.log(pecas)
//====================================//
//SEM VALORES FIXOS,DADOS DINÂMICOS
const prompt = require("prompt-sync") ()

let pecas = Number(prompt("quantas peças: "))

for ( let i = 1 ; i <= 1 ; i++) {
    pecas = pecas + 2
}
console.log(pecas)
//===================================//
const prompt = require("prompt-sync") ()

const dias= Number(prompt("quantos dias de venda: "))
let total = 0

for (let dia = 1 ; dia <= dias ; dia++) {
    const venda = Number(prompt(`venda do dia ${dia}: `))
    total = total + venda
}
console.log(`você vendeu um total de ${total}`)
//=====================================//
// pode fazer for (let i...; i...; i += 2
//=====================================//
const prompt = require("prompt-synk") ()

const dias = Number(promt("quantos dias de venda: ))
                          
let diasDeBoasVendas = 0

for (let dia = 1 ; dia < dias; dia++) {
  if (venda >= 100) {
    diasComBoasVendas = diasComBoasVendas + 1
  }
}
console.log(...)
