const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');
const exercisesFactory = require('../Aula4/ExercisesFactory');
// const exercise1 = require('../Aula4/Exercise1')

logger.startApp();

while(true) { 
    logOptions();
    const userChoice = prompt("Escolha Uma opção:  ", "number");

    if (Object.hasOwn(exercisesFactory.exercises, userChoice - 1)) { 
        exercisesFactory.exercises[userChoice - 1].presentsExercise();
    } else { 
        logger.logl('Opção invalida');
    }

    logger.log('Deseja continuar?');
    const continueChoice = prompt("digite 0 pra sair ou qualquer outro numero para continuar:  ", "number");
    
    switch (continueChoice) { 
        case 0: 
            break
        default: 
            continue
    }

}

function logOptions() { 
    logger.logl("Escolha o exercicio");

    exercisesFactory.exercises.forEach(function(exercise){
        logger.logl(exercise.description);
    });
}

logger.finishApp();