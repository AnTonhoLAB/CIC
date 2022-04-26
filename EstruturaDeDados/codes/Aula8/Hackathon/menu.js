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
    var nome = prompt('Digite seu nome:','any')
    var idade = prompt('Digite sua idade:','number')
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
}

const quickSort = (arr, min, max) => {
    if (min >= max){
        return
    }

    const pivo = partition(arr, min, max)
    quickSort(arr, min, pivo - 1)
    quickSort(arr, pivo + 1, max)
}  

const partition = (arr, min, max) => {
    //Last element as pivot
    let pivo = arr[max]
    let i = min
    for (let j = min; j < max; j++){
        if (arr[j] <= pivo){
            swap (arr, i, j)
            i++
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
    break
    console.log("1- Listar")
    console.log("2- Cadastrar")
    console.log("0- Sair")
    const escolhaUser = prompt('Digite a opção desejada: ','numeber')
    console.log(" Voce escolheu a opção ",escolhaUser)

    if(escolhaUser==1)
    {
        listar()
    } else if(escolhaUser==2){
        cadastrar()
    } else if(escolhaUser==0){
        break
    } else {
        console.log('Escolha inválida')
    }  
}   


function listar(){
    quickSort(listauser, 0, listauser.length - 1)
    console.log(listauser)

    /*
// escolher a opção: listar por id, nome ou idade
    console.log(" Digite a opção que deseja ordenar: ")
    console.log("1- ID")
    console.log("2- Nome")
    console.log("3- Idade")
    const escolhaUser2 = prompt('Digite a opção desejada: ','numeber')
    console.log(" Voce escolheu a opção ",escolhaUser2)
// escolher se é crescente ou descrescente
    console.log("1- Crescente")
    console.log("2- Decrescente")
    const escolhaUser3 = prompt('Digite a opção desejada: ','numeber')
    console.log(" Voce escolheu a opção ",escolhaUser3)
    console.log(listauser)

    // Chamar o quicksort com os parametros
    */
}

let arrs = [5,6,2,1,9,7]
console.log("array para ordenar :", arrs)
quickSort(arrs, 0, arrs.length - 1)
console.log("array ja ordenado  :", arrs)