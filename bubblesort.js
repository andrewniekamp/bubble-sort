var swap = function(arr) {
  return [arr[1], arr[0]];
}
function bubbleSort(arr, cb) {
  let keepSorting = true;
  while (keepSorting) {
    keepSorting = false;
    for (let i = 0; i < arr.length-1; i++) {
      if (!cb(arr[i], arr[i+1])) {
        // debugger;
        keepSorting = true
        let pair = arr.slice(i, i+2)
         let swapped = swap(pair)
         arr[i] = swapped[0]
         arr[i+1]= swapped[1]
        }
    }

  }
   return (arr)
}

function isLessThan(a, b) {
  return a < b;
}
