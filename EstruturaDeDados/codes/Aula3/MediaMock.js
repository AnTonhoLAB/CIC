// Class 3 16/03/2022

const logger = require('../../../Common/Logger');

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

console.log("O aluno terminou com a nota", notaFinal);

logger.finishApp();