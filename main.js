const firstName = "samim";
const lastName = "Fazlu";
const age = 25;
const profession = "web developer";
// function showBio() {
//   return (
//     "my name is " +
//     firstName +
//     " " +
//     lastName +
//     " and I am " +
//     age +
//     " I am a " +
//     profession
//   );
// }

// function showBio() {
//   //Template string
//   return `My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} and I am ${age -
//     1} and I am a ${profession} `;
// }
//console.log(showBio());

function modify(strings, ...values) {
  console.log(strings, values);
  let str = "";
  strings.forEach((strings, i) => {
    str += `${strings}<b>${values[i] || ""}</b>`;
  });
  return str;
}

const html = modify`
  <h1>Header</h1>
  <p>I am a paragraph</p>
  <p>My name is ${firstName.toUpperCase()} ${lastName.toUpperCase()} and I am ${age -
  1} and I am a ${profession}</P>   
`;

document.body.innerHTML = html;
