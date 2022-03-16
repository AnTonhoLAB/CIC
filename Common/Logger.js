const isLogable = true;

function startApp() { 
    if (isLogable) { 
        console.clear();
        console.log('----- Programa Iniciado -----');
    }
}

function finishApp() { 
    if (isLogable) { 
        console.log('----- Programa Finalizado -----');
    }
}

module.exports = { 
    startApp: startApp,
    finishApp: finishApp
}