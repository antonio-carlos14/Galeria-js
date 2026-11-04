// listas : ARRAYS
const frutas = ["Maçã" , "Banana" , "Uva" , "Maracujá"]
console.log(frutas)

// ==================================================================================== //

// Index : ordem de frutas presentes na lista, busca pelo local do ARRAY
const frutas = ["Maçã" , "Banana" , "Uva" , "Maracujá"] 
console.log(frutas[0]) 
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])

// em caso de adição e frutas : use push
frutas.push("abacaxi") // adiciona sempre no final do ARRAY
console.log(frutas)

// LENGTH : conta a quantidade de itens no ARRAY
console.log(frutas.length)

//POP : exclui item no final do ARRAY
frutas.pop() // item a ser excluido
console.log(frutas)

// ======================================================================================== //
                            'SISTEMA DADOS DINÂMICOS'

const prompt = require("prompt-sync") ()

const quantidade = Number(prompt("Quantos preços? : "))

const precos = []

for (let i = 1 ; i <= quantidade ; i++) {
   const preco = Number(prompt(`Preço ${i} : `))
  precos.push(preco)
}
console.log(precos)

// ============================================================================================ //

// SORT : organiza o ARRAY, se for ( b - a ; Crescente / b - a ; Decrescente)  
const numeros = {5, 1, 4, 2]

  numeros.sort((a, b) => a - b)
console.log(numeros)

// ============================================================================================= //

// forEach : roda pela quantidade de itens do ARRAY
numeros.forEach ((num) => {
  console.log(num) 
})

// =============================================================================================== //
                                   'OBJETO'
/* const produto = []// ARRAY
const produto = { } OBJETO */

const produto = {
  nome: "Caderno",
  precp: 15,
  estoque: 40,
}
console.log(produto.nome) // Forma e procurar o objeto, mostra item

// ================================================================================================== //

// Modifica item
produto.preco = 18                                
console.log(produto) / console.log(produto.preco)
// Adiciona novo
produto.categoria = "Papelaria" // Em caso de colocar uma informação que não está contida na variável, a mesma é adicionada
console.log(produto) 

// =================================================================================================== //
                             'FORMATO DE DADOS DINÂMICOS'

const produto = require("prompt-sync") ()
const produto = {
  nome: prompt("Nome do produto: "),
  preco: Number(prompt("Preço: ")),
  estoque: number(prompt("Estoque: ")),
}
console.log(produto)


