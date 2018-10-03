//fetch API

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(data => data.json())
// .then(data => console.log(data))
// .catch(e => console.log(e));


//Behind the scene working with Promise
// function logData(){
//     setTimeout(() => {
//         console.log(1);
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() => {
//                 console.log(2)
//             }, 2000);
//         }, 2000);

//     }, 2000);
// }

// logData();

 const logDataP = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(1);         //reject(Error('THis is a error .This is not cool'));
           },3000);
     });
logDataP
    .then(data => {
        console.log(data);
    })
    .catch(e => console.log(e));