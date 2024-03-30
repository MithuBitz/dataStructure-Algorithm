class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //Get the item from the data object
  get(index) {
    return this.data[index];
  }

  //push a item on the last of the data object
  push(item) {
    //set the item into the data.length
    this.data[this.length] = item;
    //increment the data.length so that the next item is push into the next place
    this.length++;
    //return the length of the data
    return this.length;
  }

  pop() {
    const lastITem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastITem;
  }

  delete(index) {
    const item = this.data[index];

    this.shiftItems(index);

    return item;
}

shiftItems(index) {
    for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
}
}

const newArray = new MyArray();

newArray.push("Mithu");
newArray.push("Bortamuly");

newArray.pop();

console.log(newArray);
// console.log(newArray.get(0));
