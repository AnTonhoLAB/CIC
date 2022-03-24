const isLogable = true;

let t0 = performance.now();

const brakeLine = '\n';

function startApp() { 
    if (isLogable) { 
        console.clear();
        t0 = performance.now();
        console.log('------ Programa Iniciado ------ \n');
    }
}

function finishApp() { 
    if (isLogable) { 
        const t1 = performance.now();
        console.log(`\n----- Programa Finalizado -----`);
        console.log(`tempo de execução: ${t1 - t0} milliseconds. \n`);
    }
}

function log(messageLog) { 
    if(isLogable) { 
        console.log(messageLog);
    }
}

function logl(messageLog) { 
    if(isLogable) { 
        console.log(messageLog, brakeLine);
    }
}

function separation() { 
    console.log(brakeLine);
    console.log('---------------------------------');
    console.log(brakeLine);
}


module.exports = { 
    startApp,
    finishApp,
    log,
    logl,
    separation
}