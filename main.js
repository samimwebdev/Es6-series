//Proxy -usecase object

const personal = {
    firstName: 'samim',
    age: 26,
    lng:['js','php']
}


const accessModifier = {
    get(target, firstName){
        console.log(`${target[firstName].toUpperCase()}` );
    },
    set(target, age, value){
        if (typeof value !== 'number'){
            console.log('Age must be a number');
            //return
        } else{
            target[age] = value;
            console.log(target[age]);
        }
    }
}

//proxy -Medium layer

const personalProxy = new Proxy(personal,accessModifier);
console.log(personalProxy.firstName);
// personal.firstName = 'Anis'
personalProxy.age = 'Anis';

// console.log(personal.age);





