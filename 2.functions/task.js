function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1){
    sum += arr[i]

    if (min > arr[i]) {
      min = arr[i]
    }

    if (max < arr[i]) {
      max = arr[i]
    }
  }

  let avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1){
    sum += arr[i]
  }

  if (arr.length === 0) {
    return 0
  } else {
    return sum
  }
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let diff = max - min;

  if (arr.length === 0) {
    return 0
  } else {
    return diff
  }

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i += 1){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  };

  let diff = sumEvenElement - sumOddElement;

  if (arr.length === 0) {
    return 0
  } else {
    return diff
  }

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i += 1){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement += 1;
    } 
  };

  let count = sumEvenElement / countEvenElement;

  if (arr.length === 0) {
    return 0
  } else {
    return count
  }

}

function makeWork (arrOfArr, func) {
  maxWorkerResult = -Infinity;

  let massOfArr = [...arrOfArr];

  for (let i = 0; i < massOfArr.length; i += 1){
    const result = func(...arrOfArr[i]);  
    
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }

  }

  return maxWorkerResult;

};
