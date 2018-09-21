//const myProfile = ["samim", "lastName", 26, "webdeveloper"];
//Rest and spread operator

// myProfile.push("programmer");

//spread operator
//const updatedProfile = [...myProfile, "Programmer"];

// const groceries = ["wheat", "banana"];
// const anotherGroceries = ["salt"];
// const updatedGroceries = [...groceries, "milk", ...anotherGroceries];
//console.log(updatedGroceries);

// const firstName = "samim";
// const updatedName = [...firstName];
// console.log(updatedName);

//Rest operator

function sayBio(firstName, age, ...values) {
  //Rest operator
  return {
    firstName: firstName,
    age: age,
    rest: [...values, "Jobless"] //spread operator
  };
}
console.log(sayBio("samim", 25, "webdeveloper", "Programmer"));
