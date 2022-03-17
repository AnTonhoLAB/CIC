// Class 3 16/03/2022

const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

logger.startApp();

const notaA1 = 3
const notaA2 = 3
const notaFinal = notaA1 + notaA2

if (notaFinal >= 6) { 
    console.log("Aprovado");
} else if (notaFinal < 6 && notaFinal >=5) { 
    console.log("Recuperação");
} else { 
    console.log("Reprovado");
}

console.log("Com a nota", notaFinal);

const notaA3 = prompt("Digite o numero ", "number");
console.log("numero: ", recupera);

logger.finishApp();