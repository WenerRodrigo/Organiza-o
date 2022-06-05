console.log(Math.ceil(6.1))

const objt1 = {}
objt1.nome = 'bola'
//objt1['nome' = 'bola']
console.log(objt1.nome)

function Obj (nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec...')
    }
}

const objt2 = new Obj('cadeira')
const objt3 = new Obj('mesa')
console.log(objt2.nome)
console.log(objt3.nome)
objt3.exec()