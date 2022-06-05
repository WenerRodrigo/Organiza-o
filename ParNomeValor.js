// par nome/valor
const saudacao = 'opa' //contexto léxico 1

function exec(){
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}
// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'wener',
    idade: 27,
    peso: 83,
    endereco: {
        logradouro: 'tremenbe',
        numero: 796
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)