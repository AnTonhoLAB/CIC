
function selectionSort(elements) { 
    for(var i = 0; i < elements.length - 1; i ++) { 
        var eleito = elements[i];
        var menor = elements[i + 1];
        var pos = i + 1

        for(var j = i + 2; j < elements.length; j++) { 
            if(elements[j] < menor) { 
                menor = elements[j];
                pos = j
            }
        }
        
        if(menor < eleito) { 
            elements[i] = elements[pos];
            elements[pos] = eleito
        }    
    }
}

module.exports = {
    selectionSort
}
