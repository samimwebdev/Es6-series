//Syntactic sugar

//Class 

class Person{
  //property
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.lng = [];
    console.log('Running ...')
  }
  
  //method
  getBio(){
    return `${this.name}.age- ${this.age}
    choosenLng - ${this.lng.join(',')}
    ` 
  }
  setLng(lng){
    this.lng.push(lng)
  }
}

const samim = new Person('samim', 26);
console.log(samim.getBio());
samim.setLng('javascript');
console.log(samim.getBio());




