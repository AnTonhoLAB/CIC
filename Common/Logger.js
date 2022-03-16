const isLogable = true;

let t0 = performance.now();

function startApp() { 
    if (isLogable) { 
        console.clear();
        t0 = performance.now();
        console.log('------ Programa Iniciado ------');
    }
}

function finishApp() { 
    if (isLogable) { 
        const t1 = performance.now();
        console.log(`----- Programa Finalizado -----`);
        console.log(`tempo de execução: ${t1 - t0} milliseconds.`);
    }
}

module.exports = { 
    startApp: startApp,
    finishApp: finishApp
}