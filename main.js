//string
//Number
//Boolean
//complex type - Object function




//Symbol (unique identifer, uniquely generated value)


// const samimAge = Symbol(26);
// const AnisAge = Symbol(26);

// console.log(samimAge === AnisAge);



const bio = {
  [Symbol('samim')]: {firstName: 'samim', age:26},
  [Symbol('samim')]: {firstName: 'samim', age:28}
}

const syms = Object.getOwnPropertySymbols(bio);

//const data = syms.map(data => bio[data]);
//console.log(data[1].age);

for(const data of syms){
  console.log(bio[data]);
}

