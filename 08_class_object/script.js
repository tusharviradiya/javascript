/*all about class & object */

// const student = {
//     name: "tushar",
//     marks: 9.9,
//     printMarks:function () {
//         console.log("marks = ", this.marks);
//     },
// };

// const employee = {
//     calcTax(){
//         console.log("tax percentage is 10%.");
//     },
// }

// const karanArjjun = {
//     salary: 50000,
// };

// karanArjjun.__promt__ = employee;

// class Car{
//     start () {
//         console.log("start");
//     }

//     stop () {
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.setBrand = brand;
//     }
// }

// let toyota = new Car();
// toyota.setBrand = "farari"

// class Perent {
//     tushar() {
//         console.log("tushar");
//     }
// }

// class Child extends Perent {}

// let obj = new Child();

//quation 1
// let Data = "secret data";
// class User {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("data - ", Data);
//     }
// }

// let obj = new User("tushar", "tusharviradiya2@gmail.com");

//quation 2
// let Data = "this is data you know";
// class User {
//     constructor(data){
//         console.log(data);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData(){
//         Data = "tushar";
//     }
// }

// let obj = new Admin();

/*error handling*/

// let a = 5;
// let b = 10;

// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// try{
// console.log(a+c);

// }catch(err){
//     console.log(err);
// }
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);

// console.log("i am first");
// console.log("i am first");
// setTimeout(() => {
//     console.log("hello");
// }, 4000);
// console.log("i am first");
// console.log("i am first");

// function asyncFunc1() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("i am a promise");
//             resolve("resolve");
//         }, 4000)
//     })
// }
// function asyncFunc2() {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("i am a promise");
//             resolve("resolve");
//         }, 4000)
//     })
// }

// console.log("fetching data1");
// asyncFunc1().then((res) => {
//     // console.log(res);
//     console.log("fetching data2");
//     asyncFunc2().then((res) => {
//         // console.log(res);
//     })
// })
// p1.catch((err) => {
//     console.log(err);
// })

// console.log("f2 is fatching");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })
// p2.catch((err) => {
//     console.log(err);
// })

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise is fulfilled", res)
// })
// promise.catch((err) => {
//     console.log("promise is not fullfilled", err);
// })

// async function hello(){
//     console.log("hello");
// }

// function api1(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// }
// function api2(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     })
// }

// async function getWeatherData() {
//     await api1();
//     await api2();

// }


/*generator all about*/
// function* numbersGen(){
//     // let i = 0;
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// const gen = numbersGen();
// console.log(gen.next());