const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');
const bubble = require('../Aula5/Class5');

const description = "Crie um programa que dado uma string, coloque as letras dela em ordem \ncrescente pelo algoritmo Bubblesort." 

function presentsExercise() { 
    logger.separation();
    var text = prompt("Digite um texto: ");
    var arrayText = Array.from(text)

    logger.log(arrayText);
    bubble.bubbleSortFor(arrayText);
    logger.log(arrayText);

    logger.separation();
}

module.exports = {
    description,
    presentsExercise
}