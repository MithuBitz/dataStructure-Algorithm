//Create a function which will merge two sorted array into one sorted array
function mergeSortedArray(array1, array2) {
  //declare a variable to hold the merged array
  const mergedArray = [];
  //declare a variable to  hold the [0] index value of first array
  let array1Item = array1[0];
  //declare a variable to  hold the [0] index value of second array
  let array2Item = array2[0];

  //declare a variabe to increment the index of the first array
  let i = 1;
  //declare a variabe to increment the index of the second array
  let j = 1;

  //Check if the first array is empty then just add the second array to the merge array by return it
  if (array1.length === 0) {
    console.log(array2);
    return array2;
  }
  //Check if the second array is empty then just add the first array to the merge array by return it
  if (array2.length === 0) {
    console.log(array1);
    return array1;
  }

  //Use a while loop to help to execute the merge process if the two array is available
  while (array1Item || array2Item) {
    console.log(array1Item + " " + array2Item);
    //if first item of the first array is less than the second item of the second array then
    if (!array2Item || array1Item < array2Item) {
      // just push the first item of the first array to the merge array
      mergedArray.push(array1Item);
      //then set the index of the first array to the declare variable for index of first array
      array1Item = array1[i];
      // just increment the variable for index of first array
      i++;
    } else {
      //else just push the first item of the second array to the merge array
      mergedArray.push(array2Item);
      //then set the index of the second array to the declare variable for index of second array
      array2Item = array2[j];
      // just increment the variable for index of second array
      j++;
    }
  }
  console.log(mergedArray);
  //return the marge array
  return mergedArray;
}

//Call the function with two array
mergeSortedArray([1, 2, 4], [7, 8, 9]);
