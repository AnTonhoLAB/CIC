const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

const description = '5 - Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de \n    reajuste. Calcular e escrever o valor do novo salário'

function presentsExercise() { 
    const salary = prompt('Digite o valor do salário mensal atual: ', 'number');
    const percentage = prompt('Digite o valor do reajuste em %: ', 'number');

    const readjustment = encrease(salary, percentage);
    logger.separationIn(`Com um reajuste de ${percentage}% \no salario vai de: R$ ${salary} \npara: R$ ${readjustment}`);
}

function encrease(salary, percentage) { 
    return (((salary * percentage) / 100) + salary)
}

module.exports = {
    description,
    presentsExercise
}