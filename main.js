//Chaining Promise

const logDataP = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
            //reject(Error('THis is a error .This is not cool'));
        }, 3000)
    });
}

const logAnotherDataP = (anotheData) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(anotheData + 1);
            //reject(Error('THis is a error .This is not cool'));
        }, 3000)
    });
}
logDataP(1)
    .then(data => {
    //DATA SUCCESSSFULLY CAME\
    console.log(data);
    return logAnotherDataP(data)
    
    })
    .then(anothData => console.log(anothData))
    .catch(e => console.log(e));