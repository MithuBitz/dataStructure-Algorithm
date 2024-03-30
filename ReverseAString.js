function reverse(str) {
  //Check if the string is valid or not
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please enter a valid string";
  }
  //if it is valid then
  //declare a array called backward
  const backward = [];
  //declare a variable to store the length of the str
  const totalItems = str.length - 1;
  // for loop initiated from the length of the str to zero
  for (let i = totalItems; i >= 0; i--) {
    backward.push(str[i]);
  }
  console.log(backward);
  const rev = backward.join("");
  //   console.log(rev);
  return rev;
  //and push the str items into the backward array from last postion
  //return the backward array with join method
}

//Simpler function with built in js function
function reverse2(str) {
  const rev = str.split("").reverse().join("");
  console.log(rev);
  return rev;
}

//Modify the same function with one line function
const reverse3 = (str) => {
  //   const rev = str.split("").reverse().join("");
  const rev = [...str].reverse().join("");
  console.log(rev);
  return rev;
};

// reverse("Hi myself Mithu");
// reverse2("Hi myself Mithu");
reverse3("Hi myself Mithu");
