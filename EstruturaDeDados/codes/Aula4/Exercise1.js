const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

const description = "1 - Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor" 

function presentsExercise() { 
    const number = prompt("Digite um numero: ", "number");
    const result = previous(number);
    logger.separation();
    const message = `O número anterior a ${number} é ${result}`
    logger.log(message)
    logger.separation();
}

function previous(number) { 
    return number - 1
}

module.exports = {
    description,
    presentsExercise
}