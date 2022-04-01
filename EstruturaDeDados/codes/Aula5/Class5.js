const logger = require('../../../Common/Logger');
const prompt = require('../../../Common/PromptSync/prompt');

logger.startApp();

let array = [3, 6, 4, 1, 2, 9];

// bubbleSortFor(array);
bubbleSortWhile(array);

function bubbleSortFor(array) { 

    for(var n = 0; n <= array.length; n++) { 
        for (var i = 0; i <= array.length - 2; i++) { 
            if(array[i] > array[i + 1]) { 
                var aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux
            }
        }
    }
}

function bubbleSortWhile(array) { 
    let n = 0
    while(n <= array.length) { 
        for (var i = 0; i <= array.length - 2; i++) { 
            if(array[i] > array[i + 1]) { 
                var aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux
            }
        }
        n++
    }
}

logger.separationIn(array);

logger.finishApp();