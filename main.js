//Number addition
//Function statement
// function add(num1 = 3, num2) {
//   return num1 + num2;
// }

//Function expression

//Arrow function
// const add = (num1 = 2, num2) => {
//   return num1 + num2;
// };

// console.log(add(undefined, 1));

//If you return a single statement don't have to use {}
//const add = (num1 = 2, num2) => num1 + num2;

//if you want to use single paramete don't have to use ()
//const add = num1 => num1 + 3;
//console.log(add(1));

//Where not to use arrow function
const self = {
  firstName: "samim",
  age: 25,
  showBio: function() {
    console.log(this);
    return `I am ${this.firstName} and I am ${this.age} `;
  }
};

console.log(self.showBio());
