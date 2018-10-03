//fetch API

fetch('https://jsonplaceholder.typicode/comments')
.then(data => data.json())
.then(data => console.log(data))
.catch(e => console.log(e));


//Behind the scene workingh with Promise