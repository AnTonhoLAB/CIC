const quickSort = (arr, min, max) => {
    if (min >= max){
        return
    }

    let pivo = partition(arr, min, max)
    quickSort(arr, min, pivo - 1)
    quickSort(arr, pivo + 1, max)
}  

const partition = (arr, min, max) => {
    //Last element as pivot
    let pivo = arr[max]
    let i = min
    for (let j = min; j < max; j++){
        if (arr[j] <= pivo){
            swap (arr, i, j)
            i = i + 1
        }
        swap (arr, i, max)
        return i
    }
}

const swap = (arr, left, right) =>  {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
}


//Input:
  //++++++++++++++++++
  var arr = [10, 7, 8, 9, 1, 5];
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  
  //Output:
 // [1, 5, 7, 8, 9, 10]

/*var menor
var maior
//++++++++++++++++++
const partitionMiddle = (arr, menor, maior => {
    //Get the mid index
    const meio = Math.floor((menor + maior) / 2);
    //Swap the mid element with first element
    swap(arr, meio, menor);
    
    //Now use the first element as pivot
    let pivot = arr[menor];
    let men = menor + 1;
    let mai = maior;
    
    //Partition the array based on the pivot
    while(men <= mai){
      //Move towards each other
      while(arr[mai] > pivot){
        mai = mai - 1
      }
      
      while(men <= mai && arr[men] <= pivot){
        mai = mai + 1;
      }
      
      //When inversion found swap the elements
      if(men <= mai){
        swap(arr, men, mai);
        men = men + 1;
        mai = mai - 1;
      }
    }
    
    swap(arr, menor, mai);
    
    //Return the pivot index
    return mai;
  })
  
    quickSort = (arr, menor, maior) => {
      // base condition
      if (menor >= maior) {
        return;
      }
    
      // rearrange the elements across pivot
      const pivot = partitionMiddle(arr, menor, maior);
  
      // recur on sub-array containing elements less than pivot
      quickSort(arr, menor, pivot - 1);
  
      // recur on sub-array containing elements more than pivot
      quickSort(arr, pivot + 1, maior);
  }
  Input:
  //++++++++++++++++++
  var arr = [10, 7, 8, 9, 1, 5];
  //++++++++++++++++++
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  
  Output:
  [1, 5, 7, 8, 9, 10]*/