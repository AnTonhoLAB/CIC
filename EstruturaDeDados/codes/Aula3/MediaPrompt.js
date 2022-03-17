
const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

logger.startApp();

const notaA1 = prompt("Digite a nota da N1 ", "number");
const notaA2 = prompt("Digite a nota da N2 ", "number");
const notaFinal = notaA1 + notaA2

if (notaFinal >= 6) { 
    console.log("Aprovado");
} else if (notaFinal < 6 && notaFinal >=5) { 
    console.log("Recuperação");
} else { 
    console.log("Reprovado");
}

console.log("O aluno terminou com a nota", notaFinal);

logger.finishApp();