class RotateArray {
  reverse(arr) {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      tempArr.push(arr[i]);
    }
    return tempArr;
  }

  findDuplicate(arr) {
    let dic = {};
    let repeatedArr = [];

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (dic[num]) {
        dic[num]++;
        if (dic[num] === 2) {
          repeatedArr.push(num);
        }
      } else {
        dic[num] = 1;
      }
    }

    return repeatedArr;
  }

  findMax(arr) {
    let max;

    for (let i = 0; i < arr.length; i++) {
      max = arr[i];
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    return max;
  }

  // Find the minimum element in array and place it at beginning
  selectionSort(arr) {
    let minIndex;
    let temp;

    for (let i = 0; i < arr.length; i++) {
      minIndex = arr[i];
      if (arr[i] > arr[minIndex]) {
        minIndex = i;

        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }

    return arr;
  }
}

//https://www.javatpoint.com/array-rotation-in-java
