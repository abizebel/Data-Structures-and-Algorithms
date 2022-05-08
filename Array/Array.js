class RotateArray {
  //Time Complexity O(N)
  reverse(arr) {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      tempArr.push(arr[i]);
    }
    return tempArr;
  }

  //Time Complexity O(N)
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
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = num;
      }
    }

    return max;
  }
}

//https://www.javatpoint.com/array-rotation-in-java
