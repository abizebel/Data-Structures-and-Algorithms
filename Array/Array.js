class RotateArray {
  //O(n)
  reverse(arr) {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      tempArr.push(arr[i]);
    }
    return tempArr;
  }

  //O(n)
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

  // Find the minimum element in array and place it at beginning O(n^2)
  selectionSort(arr) {
    let minIndex;
    let minTemp;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        minIndex = i;
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
          minTemp = arr[minIndex];
          arr[minIndex] = arr[i];
          arr[i] = minTemp;
        }
      }
    }
    return arr;
  }

  /**
   *
   * bubble sort operates by repeatedly swapping the adjacent elements if they are in the wrong order
   *  while the selection sort sorts an array by repeatedly finding the minimum element from the unsorted
   *  part and placing that at the beginning of the array
   */
  bubbleSort(arr) {
    let temp;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    return arr;
  }

  //O(n * k)
  rotate1(arr, k) {
    for (let i = 0; i < k; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  }

  /*
   *  O(n * 3)
   *  nums = [1, 2, 3, 4, 5] => k = 2
   *  [5, 4, 3, 2, 1] // original array reversed
   *  [4, 5, 3, 2, 1] // reverse just the first (k) elements
   *  [4, 5, 1, 2, 3] // reverse from (k) to the end
   */
  rotate2(arr, k) {
    // reverse helper function
    function reverse(arr, start, end) {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }

    k %= arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);

    return arr;
  }
}
