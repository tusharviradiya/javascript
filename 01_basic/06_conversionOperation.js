let score = 33;
console.log(typeof score);

score = String(score);
console.log(typeof score);

let score2 = "33abc";
score2 = Number(score2);
console.log(typeof score2);
console.log(score2); //NaN : note a number but type is number

let score3 = null;
score3 = Number(score3);
console.log(typeof score3); //type of this is object
console.log(score3); //this will print 0.
