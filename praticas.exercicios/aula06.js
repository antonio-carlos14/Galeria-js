const prompt = require(`prompt-sync`)()

const turno = Number(prompt(`Quantos turnos?: `))

let turnosAcimaDaMeta = 0

for (let i = 1 ; i <= turno ; i++ ) {
    const pecas = Number(prompt(`peças do turno ${turno}: `))

    if (turno > pecas) {
        pecas = turno
    }
}
console.log(turnosAcimaDaMeta)

const resumo = {
 turnosAcimaDaMeta 
}
console.log(resumo)

module.exports = {
    turnosAcimaDaMeta
}

//REVER
