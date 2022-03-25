const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');
const exercises = require('../Aula4/ExercisesFactory');
// const exercise1 = require('../Aula4/Exercise1')

logger.startApp();

while(true) { 
    logOptions();
    const userChoice = prompt("Escolha Uma opção:  ", "number");
    
    switch (userChoice) { 
        case 1:
            exercises.exercise1.presentsExercise()
            break;
        case 2: 
            exercises.exercise2.presentsExercise()
            break;
        case 3:
            exercises.exercise3.presentsExercise()
            break;
        case 4:
            exercises.exercise3.presentsExercise()
            break;
        case 5:
            exercises.exercise3.presentsExercise()
            break;
        case 6:
            exercises.exercise3.presentsExercise()
            break;
        case 7:
            exercises.exercise3.presentsExercise()
            break; 
        case 8:
            exercises.exercise3.presentsExercise()
            break;
        case 9: 
            exercises.exercise3.presentsExercise()
            break;  
        case 0: 
            break;
        default:
            console.log('Voce escolheu uma opção invalida');   
            break;
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
    logger.logl(exercises.exercise1.description);
    logger.logl(exercises.exercise2.description);
    logger.logl(exercises.exercise3.description);
    logger.logl(exercises.exercise4.description);
    logger.logl(exercises.exercise5.description);
    logger.logl(exercises.exercise6.description);
    logger.logl(exercises.exercise7.description);
    logger.logl(exercises.exercise8.description);
    logger.logl(exercises.exercise9.description);
}


logger.finishApp();