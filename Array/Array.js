class RotateArray {
  //Time Complexity o(n)
  reverse(arr) {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      tempArr.push(arr[i]);
    }
    return tempArr;
  }

  //Time Complexity o(n)
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
}

//https://www.javatpoint.com/array-rotation-in-java
