// Find the recurring character

// 1. Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

// This is not efficient bcoz it is useing nested for loop so  time complexity O(n^2) and space complexity O(1)
function firstRecuringCharecter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

firstRecuringCharecter([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// Useing Hash table code more efficient with time complexity O(n) and space complexity O(n)
function firstRecuringCharecter1(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    if (map[input[i]]) {
      console.log(map[input[i]]);
      return input[i];
    } else {
      map[input[i]] = true;
    }
    // console.log(map);
  }
  return undefined;
}

firstRecuringCharecter1([2, 5, 1, 2, 3, 5, 1, 2, 4]);
