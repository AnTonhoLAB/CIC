
const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

logger.startApp();

console.log("1 - Digitar \n2 - Excluir \n3 - Editar\n");
const userChoice = prompt("Escolha Uma opção: ", "number");

switch (userChoice) { 
    case 1:
        console.log('Voce escolheu 1 - Digitar');
        break;
    case 2:
        console.log('Voce escolheu 2 - Excluir');
        break;
    case 3:
        console.log('Voce escolheu 3 - Editar');
        break;
    default:
        console.log('Voce escolheu uma opção invalida');   
}

logger.finishApp();