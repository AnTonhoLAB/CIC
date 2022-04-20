let text = "Oi seja bem vindo"

// Com casting
let arrayOfCharactersA = Array.from(text)
console.log(arrayOfCharactersA)

// Com map
let arrayOfCharactersB = [...text].map((x) => x)
console.log(arrayOfCharactersB)

// Com for
let arrayOfCharactersC = []
for (let charactere of text) {
    arrayOfCharactersC.push(charactere)
}

console.log(arrayOfCharactersC)