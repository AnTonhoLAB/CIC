const prompt=require('./utils/prompt')

let ultimoid = 14
let listauser = [
    { id: 5, nome: "Isaac Newton", idade: 28 },
    { id: 4, nome: "Friedrich Gauss", idade: 33 },
    { id: 3, nome: "Marie Curie", idade: 29 },
    { id: 2, nome: "Hedy Lamarr", idade: 23 },
    { id: 1, nome: "Albert Einstein", idade: 39 },
    { id: 6, nome: "Nicolau Copernico", idade: 30 },
    { id: 7, nome: "Galileu Galilei", idade: 25 },
    { id: 8, nome: "Alexander Volta", idade: 36 },
    { id: 9, nome: "Andrã0-Marie AmpÃ¨re", idade: 23 },
    { id: 10, nome: "James Clerk Maxwell", idade: 25 },
    { id: 11, nome: "James Prescott Joule", idade: 33 },
    { id: 12, nome: "James Watt", idade: 23 },
    { id: 13, nome: "Archimedes de Siracusa", idade: 39 },
    { id: 14, nome: "Simom Ohm", idade: 35 }
]

console.clear()

// função de cadastrar o usuario
function cadastrar(){
    // pega as informações do usuario
    beautifulSpaceClear()
    var nome = prompt('Digite seu nome: ','any')
    var idade = prompt('Digite sua idade: ','number')
    var userid = ultimoid + 1
    ultimoid = ultimoid + 1
    // transforma os dados em objeto
    const usuario = { 
        id: userid,
        nome: nome,
        idade: idade
    }
    // coloca o objeto dentro do array
    listauser.push(usuario)

    beautifulSpaceClear()
    prompt('Usuario cadastrado com sucesso, digite qualquer caractere pra continuar: ')
}

const quickSort = (arr, min, max, sortBy, order) => {
    if (min >= max){
        return
    }

    const pivo = partition(arr, min, max, sortBy, order)
    quickSort(arr, min, pivo - 1, sortBy, order)
    quickSort(arr, pivo + 1, max, sortBy, order)
}  

const partition = (arr, min, max, sortBy, order) => {
    //Last element as pivot
    let pivo = arr[max]
    let i = min
    for (let j = min; j < max; j++){
       
        if (order) { 
            if (arr[j][sortBy] <= pivo[sortBy]){
                swap (arr, i, j)
                i++
            }
        } else { 
            if (arr[j][sortBy] >= pivo[sortBy]){
                swap (arr, i, j)
                i++
            }
        }


    }

    swap (arr, i, max)
    return i
}

const swap = (arr, left, right) =>  {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
}

while (true){
    beautifulSpaceClear()
    console.log("1- Listar")
    console.log("2- Cadastrar")
    console.log("0- Sair")
    beautifulSpace()
    const escolhaUser = prompt('Digite a opção desejada: ','numeber')

    if(escolhaUser == 1) {
        listar()
    } else if(escolhaUser == 2) {
        cadastrar()
    } else if(escolhaUser == 0) {
        beautifulSpaceClear()
        console.log("Até mais! bye")
        beautifulSpace()
        break
    } else {
        console.log('Escolha inválida')
    }  
}   

function listar() {

    // mostrar ao usuario as opções: listar por id, nome ou idade
    beautifulSpaceClear()
    console.log("Digite a opção que deseja ordenar: ")
    console.log("1- ID")
    console.log("2- Nome")
    console.log("3- Idade")
    beautifulSpace()

    // ler do usuario as opções
    const escolhaUser2 = prompt('Digite a opção desejada: ','number')
    let sortBy = "id"

    switch (escolhaUser2) { 
        case 1:
            orderBy = "id" 
            break
        case 2: 
            orderBy = "nome" 
            break
        case 3:
            orderBy = "idade" 
            break
        default: 
            console.clear()
            prompt('Opção invalida, digite enter para continuar: ')
            return
    }

    // escolher se é crescente ou descrescente
    beautifulSpaceClear()
    console.log("1- Crescente")
    console.log("2- Decrescente")
    beautifulSpace()
 
    let order = true
    const escolhaUserOrder = prompt('Digite a opção desejada: ','number')

    switch (escolhaUserOrder) { 
        case 1:
            order = true
            break
        case 2: 
            order = false 
            break
        default: 
            console.clear()
            prompt('Opção invalida, digite enter para continuar: ')
            return
    }

    // Chamar o quicksort com os parametros
    beautifulSpaceClear()
    quickSort(listauser, 0, listauser.length - 1, sortBy, order)
    console.log(listauser)
    beautifulSpace()

    prompt('Digite enter para continuar: ')
}

function beautifulSpace() { 
    console.log("")
    console.log("-----------------------------------")
    console.log("")
}

function beautifulSpaceClear() { 
    console.clear()
    console.log("")
    console.log("-----------------------------------")
    console.log("")
}