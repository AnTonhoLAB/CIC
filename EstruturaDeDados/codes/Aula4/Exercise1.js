const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

function presentsExercise() { 
    const number = prompt("Digite um numero: ", "number");
    const result = previous(number);
    const message = `O número anterior a ${number} é ${result}`
    logger.logl(message)
}

function previous(number) { 
    return number - 1
}

module.exports = {
    presentsExercise
}