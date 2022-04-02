const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

const description = '6 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem \n    do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual \n    do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo \n    de fábrica de um carro, calcular e escrever o custo final ao consumidor.'

function presentsExercise() { 
    const carPrice = prompt('Digite o valor do carro: ', 'number');
    const carFinalPrice = calculateFinalPriceFor(carPrice);

    logger.log(carFinalPrice);
}

function calculateFinalPriceFor(carPrice) { 

    const taxPercentage = 45;
    const taxPrice = calculatePercentage(carPrice, taxPercentage);

    const distributorPercentage = 28
    const distribuidorPrice = calculatePercentage(carPrice, distributorPercentage);

    return carPrice + taxPrice + distribuidorPrice
}
function calculatePercentage(carPrice, percentage) { 
    return ((percentage * 100) / carPrice);
}

module.exports = {
    description,
    presentsExercise
}