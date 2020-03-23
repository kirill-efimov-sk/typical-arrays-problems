//function: min of numbers
exports.min = function min (array) {
  if (array === undefined || array.length == 0) {return 0;}
  else if (array.length > 0) {let minCount = array[0];
    for (let i = 1; i < array.length; i++) {if (array[i] < minCount) minCount = array[i];}return minCount;
  } 
}

//function: max of numbers
exports.max = function max (array) {
  if (array === undefined || array.length == 0) {return 0;}
  else if (array.length > 0) {let minCount = array[0];
    for (let i = 1; i < array.length; i++) {if (array[i] > minCount) minCount = array[i];}return minCount;
  } 
}

//function: avg of numbers
exports.avg = function avg (array) {
  if (array === undefined || array.length == 0) {return 0;}
  else if (array.length > 0) {return result = (array.reduce(function(sum, current) {return (sum + current);})/array.length);}
}
