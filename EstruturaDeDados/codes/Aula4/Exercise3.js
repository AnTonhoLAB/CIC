const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

const description = '3 - Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e \n    escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês \n    com 30 dias.'

function presentsExercise() { 
    const years = prompt('Digite os anos: ', 'number');
    const months = prompt('Digite os meses: ', 'number');
    const days = prompt('Digite os dias: ', 'number');

    logger.separation();
    const result = calcuateDaysBy(years, months, days);

    const pluralYears = years == 1 ? 'ano' : 'anos';
    const pluralMonths = months == 1 ? 'mes' : 'meses';
    const pluralDays = days == 1 ? 'dia' : 'dias';
    const resultPlural = result == 1 ? 'dia' : 'dias';

    const message = `${years} ${pluralYears} ${months} ${pluralMonths} e ${days} ${pluralDays} \né igual a ${result} ${resultPlural}`
    logger.log(message)
    logger.separation();
}

function calcuateDaysBy(years, months, days) { 
    return ((years * 360) + (months * 30) + days)
}

module.exports = {
    description,
    presentsExercise
}