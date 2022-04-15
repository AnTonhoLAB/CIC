const Logger = require("nodemon/lib/utils/log")

function mergeSort(x, start, end) { 
    let middle 
    if (start < end) { 
        middle = Math.trunc((start + end) / 2)
        mergeSort(x, start, middle)
        mergeSort(x, middle + 1, end)
        interpolate(x, start, end, middle) 
    } 
}

function interpolate(x, start, end, middle) { 
    let freePos, vetStart1, vetStart2
    let aux = []
    vetStart1 = start
    vetStart2 = middle + 1
    freePos = start
    
    while (vetStart1 <= middle && vetStart2 <= end) { 
        if(x[vetStart1] <= x[vetStart2]) {
            aux[freePos] = x[vetStart1]
            vetStart1 = vetStart1 + 1
        } else { 
            aux[freePos] = x[vetStart2]
            vetStart2 = vetStart2 + 1
        }
        freePos = freePos + 1
    }

    for (let i = vetStart1; i <= middle; i++) { 
        aux[freePos] = x[i]
        freePos = freePos + 1
    }

    for (let i = vetStart2; i <= end; i++) { 
        aux[freePos] = x[i]
        freePos = freePos + 1
    }

    for (let i = start; i <= end; i++) { 
        x[i] = aux[i]
    }
}

let arrayToSort = [5,4,6,7,1,8,2,3,9,19,0]

console.log("Array para ordenar", arrayToSort)
mergeSort(arrayToSort, 0, arrayToSort.length -1)
console.log("Array ordenado", arrayToSort)