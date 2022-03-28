const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

const description = '4 - Escreva um algoritmo para ler o número total de eleitores de um município, o número de \n    votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa \n    em relação ao total de eleitores.'

function presentsExercise() { 
    const blankVotes = prompt('Digite o numero de votos em branco: ', 'number');
    const nullVotes = prompt('Digite o numero de votos inválidos: ', 'number');
    const validVotes = prompt('Digite o numero de votos válidos: ', 'number');


}

function calculatePercentage(total, value) { 

}

module.exports = {
    description,
    presentsExercise
}