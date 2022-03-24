const isLogable = true;

let t0 = performance.now();

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
        console.log(messageLog, "\n");
    }
}

module.exports = { 
    startApp: startApp,
    finishApp: finishApp,
    log: log,
    logl: logl
}