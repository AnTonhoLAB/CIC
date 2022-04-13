const logger = require('./Logger');
const prompt = require('./PromptSync/prompt');

function startAppMenu(exercisesFactory) { 
    logger.startApp();

    while(true) { 
        logOptions(exercisesFactory);
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

    logger.finishApp();
}

function logOptions(exercisesFactory) { 
    logger.logl('Escolha o exercicio');

    exercisesFactory.exercises.forEach(presentExercise)
    logger.logl('0 - Sair');
}

function presentExercise(exercise, index, arr) {
  logger.logl(`${index + 1} - ${exercise.description}`);
}

module.exports = {
    startAppMenu,
}
