const marks = [80, 95, 78, 85];
// Iterate each number
//return an array with ultimate result (new array)

// const dbleMarks = marks.map(mark => mark * 2);
// console.log(dbleMarks);
//console.log(marks);
let dbl = [];
marks.forEach(mark => {
  dbl.push(mark * 2);
});
console.log(dbl);
