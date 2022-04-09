const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

logger.startApp();

function startAppMenu(exercisesFactory) { 
    while(true) { 
        logOptions();
        const userChoice = prompt('Escolha Uma opção:  ', 'number');
    
        if (Object.hasOwn(exercisesFactory.exercises, userChoice - 1)) { 
            exercisesFactory.exercises[userChoice - 1].presentsExercise();
        } else if (userChoice == 0){ 
            break;
        } else { 
            logger.logl('Opção invalida');
        }
    
        logger.log('Deseja continuar?');
        const continueChoice = prompt('digite 0 pra sair ou qualquer outro numero para continuar:  ', 'number');
        
        if (continueChoice == 0) { 
            break;
        }
    }
}

function logOptions() { 
    logger.logl('Escolha o exercicio');

    exercisesFactory.exercises.forEach((exercise) => {
            logger.logl(exercise.description);
        });
    logger.logl('0 - Sair');
}

logger.finishApp();