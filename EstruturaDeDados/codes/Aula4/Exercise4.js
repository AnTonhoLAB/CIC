const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

const description = '4 - Escreva um algoritmo para ler o número total de eleitores de um município, o número de \n    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa \n    em relação ao total de eleitores.'

function presentsExercise() { 
    const blankVotes = prompt('Digite o numero de votos em branco: ', 'number');
    const nullVotes = prompt('Digite o numero de votos inválidos: ', 'number');
    const validVotes = prompt('Digite o numero de votos válidos: ', 'number');

    const totalVotes = totalFrom(blankVotes, nullVotes, validVotes)

    const blankPercentage = calculatePercentage(totalVotes, blankVotes);
    const nullPercentage = calculatePercentage(totalVotes, nullVotes);
    const validPercentage = calculatePercentage(totalVotes, validVotes);

    logger.separation()
    logger.log(`De ${totalVotes} votos \n${blankPercentage}% foram em branco \n${nullPercentage}% foram inválidos  \n${validPercentage}% foram válidos`);
    logger.separation()
}

function totalFrom(blankVotes, nullVotes, validVotes) { 
    return blankVotes + nullVotes + validVotes
}

function calculatePercentage(total, value) { 
    return ((value * 100) / total);
}

module.exports = {
    description,
    presentsExercise
}