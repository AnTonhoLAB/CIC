const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

const description = '2 - Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e \n    escrever a área do retângulo'

function presentsExercise() { 

    const base = prompt('Digite a base: ', 'number');
    const height = prompt('Digite a altura: ', 'number');
    const area = calculateAreaFor(base, height);

    logger.separation();
    const message = `Com base: ${base} e altura ${height} \nA area é igual a ${area}m²`
    logger.log(message)
    logger.separation();
}

function calculateAreaFor(base, height) { 
    return base * height
}

module.exports = {
    description,
    presentsExercise
}