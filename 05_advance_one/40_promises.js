//promises
//promises is object, in this we need instance of object so we use new keyword.

//promises how looks like
const promises = new Promise(function (resolve, reject) {
  //here we also apply directly to promises, we not need assign promises to variable.
  //do async task
  setTimeout(function () {
    console.log("async operation is completed");
    resolve(); // in this resolve we pass perameter also and use that in our easy
  }, 1000);
});

//.then and .catch is directly connected to resolve and reject in promises
promises.then(function () {
  console.log("promises is resolve");
});
promises.catch(function () {
  console.log("promises is rejected");
});
promises.finally(function () {
  //basically finally is indicate our promises is done or not.
  console.log("promises is done");
});

//we instead using .then and .catch we use async and await and in that we use try and catch.
