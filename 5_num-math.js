const score = 400
console.log(score);


//this also allows us to use different method with number
const bal = new Number(103.8796)
console.log(bal);

console.log(bal.toString().length);
console.log(bal.toFixed(3));

const nwnum = 32.2321
console.log(nwnum.toPrecision(2));

const hun = 1000000
console.log(hun.toLocaleString('en-IN'));  //it'll put commas in the number acc to indian num, default is US


// *******************maths*********************


console.log(Math.abs(-1));
console.log(Math.round(3.4));
console.log(Math.min(2, 4, 1, 0, 32));
console.log(Math.max(3, 23, 223, 345, 234, 4444));

console.log(Math.round(Math.random()*7));  //random only gives decimal num among 0 to 1

 