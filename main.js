//working with function (destructuring in mind)

function bio({ lastName, firstName, age }) {
  return `${firstName} ${lastName} is ${age} years old`;
}

console.log(
  bio({
    firstName: "samim",
    lastName: "fazlu",
    age: 25
  })
);

const comments = [
  {
    id: 10,
    body: "first comment"
  },
  {
    id: 2,
    body: "second comment"
  },
  {
    id: 4,
    body: "dump comment"
  },
  {
    id: 3,
    body: "correct comment"
  }
];

const badComment = comments.findIndex(comment => comment.id === 4);
console.log(badComment);

const choosenComment = [
  ...comments.slice(0, badComment),
  ...comments.slice(badComment + 1)
];
console.log(choosenComment);
