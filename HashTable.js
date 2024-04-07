let user = {
  name: "Shaktiman",
  age: 54,
  power: true,
  dialogue: function () {
    console.log("Gangadhar");
  },
};

console.log(user.name); //O(1)

user.villain = "Kilbish"; //O(1)
console.log(user.villain);

console.log(user.dialogue()); //O(1)
