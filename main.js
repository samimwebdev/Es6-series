//Syntactic sugar

//Class 

class Programmer{
  //property
  constructor(firstName, age){
    this.firstName = firstName; //field
    this.age = age;
    this.lng = [];
    console.log('Running ...')
  }
  
  // getfirstName(){
  //   return this.firstName;
  // }

  getBio(){
    return `${this.firstName}-${this.age} ${this.lng}`
  }
  //property

  static salery(){
    console.log('My salery $0')
  }
  get nickName(){
    return this.firstName;
  }
  set nickName(value){
    this.firstName = value.toUpperCase();
  }

  set Mainlng(lng){
    this.lng.push('Javascript');
  }
}

class specialProgrammer extends Programmer{
  constructor(firstName, age, specialLng){
    super(firstName, age);
    this.specialLng = specialLng;
  }
  getBio(){
    return `${super.getBio()} ${this.speciallng}` 
  }
  get speciallng(){
    return this.specialLng;
  }
  set Mainlng(lng){
   return this.lng.push(lng);
  }

}

const samim = new Programmer("samim", 26);

const anis = new specialProgrammer("Anis", 26, 'go');

