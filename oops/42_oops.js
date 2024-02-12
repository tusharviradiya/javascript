//constructor in oop

//here new keyword is indicate constructor function
// const promises = new Promise();
// const date = new Date();

function User(username, userId) {
  this.username = username;
  this.userId = userId; // here this for our variable name.
  return this;
}

const uname = new User("tushar", 12);
const uname2 = new User("sagar", 15);

console.log(uname);
console.log(uname2);
