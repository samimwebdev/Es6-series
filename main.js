//Generator function 
//Give capablity to pause and resume function
// function *logProgramming(){
//     yield 'html';
//     yield 'css';
//     yield 'Javascript';

// }
function myAjax(url) {
    fetch(url)
    .then(data => data.json())
    .then(data => dataGen.next(data));
}
function *PlaceHolderdata(){
   const post = yield myAjax('https://jsonplaceholder.typicode.com/posts/1');
   console.log(post);
   const comments = yield myAjax('https://jsonplaceholder.typicode.com/posts/1/comments')
   console.log(comments);

}
const dataGen = PlaceHolderdata();

dataGen.next();


