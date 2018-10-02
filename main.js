constructor way
new keyword

const programming = {
  first: 'Javascript',
  second: 'php',
  third: 'python',
  common:['Html', 'css', 'basic javascript'],
  choosenLanguage: function(){
    return `My first Priority-${this.first}.My second Priority-${this.second}`
  }
}
console.log(programming.first);
console.log(programming.second);
console.log(programming.choosenLanguage());


//Es6 improved way of writing Object literal
function bio({firstName, lastName, choosenLng}){
  return{
    firstName,
    lastName,
    common:['Html', 'css', 'basic javascript'],
    choosenLanguage(){
      return `My first NAme-${this.firstName}.My second Name-${this.lastName} and I prefer ${choosenLng}`
    }
  }
}


const myBio = bio({
  firstName: 'samim',
  lastName: 'Fazlu',
  choosenLng: 'Javascript' 
});

console.log(myBio.firstName);

console.log(myBio.lastName);
console.log(myBio.choosenLanguage())




