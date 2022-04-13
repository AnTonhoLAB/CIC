const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');
const bubble = require('../Aula5/Class5');
const menu = require('../../../Common/Menu');

const description = "Faça um programa que leia n nomes inserindo-os em uma lista de form\nordenada utilizando a ideia do algoritmo Insertionsort. No final, o programa \ndeve mostrar todos os nomes ordenados alfabeticamente." 
var names

function presentsExercise() { 
    // logger.separation();
    // var name = prompt("Digite um texto: ");
    // var arrayText = Array.from(text)

    // logger.log(arrayText);
    // bubble.bubbleSortFor(arrayText);
    // logger.log(arrayText);

    // logger.separation();

    // const addName = new AddName()
    const addName = new AddName()
    const nameFactory = { exercises: [addName] }

    menu.startAppMenu(nameFactory);
}

module.exports = {
    description,
    presentsExercise
}

class AddName { 

    static get description() {
        return this.description
    }

    constructor() {
        this.description = "Addcionar nome"
    }

    presentsExercise() {
        
    }
}