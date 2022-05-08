class RotateArray {
  private reverse(arr) {
    let tempArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      tempArr.push(arr[i]);
    }
    return tempArr;
  }
}
