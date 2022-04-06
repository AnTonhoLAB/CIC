

function insertionSort(elements) { 
    for(var i = 1; i < elements.length; i ++) { 
        var eleito = elements[i]
        var j = i - 1 
        while (j >= 0 && elements[j] > eleito) {
            elements[j + 1] = elements[j]
            j = j - 1
        }
        elements[j + 1] = eleito
    }
}

var elements = [1, 3, 4, 2, 5, 7, 6];
insertionSort(elements);
console.log(elements);
