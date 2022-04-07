const insertionSort = require('./InsertionSort');
const selectionSort = require('./SelectionSort');

var elements = [1, 3, 4, 2, 5, 7, 6];
insertionSort.insertionSort(elements);
console.log(elements)

var elementsB = [1, 3, 4, 2, 5, 7, 6];
selectionSort.selectionSort(elementsB);
console.log(elementsB);