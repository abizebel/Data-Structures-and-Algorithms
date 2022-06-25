/*
    A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both
    ends in the binary representation of N. For example,The number 529 has binary representation 1000010001 and contains 
    two binary gaps: one of length 4 and one of length 3

    Write a function that, given a positive integer N, returns the length of its longest binary gap. The function should return
    0 if N doesn't contain a binary gap
*/

function solution(N: number) {
  var maxGapLength = 0;
  var maxGap = 0;
  var binary = N.toString(2);

  for (var i = 0; i < binary.length; i++) {
    var letter = Number(binary.charAt(i));
    if (letter == 0) {
      maxGap++;
    } else {
      if (maxGap > maxGapLength) {
        maxGapLength = maxGap;
      }
      maxGap = 0;
    }
  }
  return maxGapLength;
}
