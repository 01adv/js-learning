let nam = 'advaita'
let filecount = 4

console.log(`hello my name is ${nam} and file number is ${filecount}`);


const gameName = new String('advaita')
// it'll add extra methods and functionality to the string 
console.log(gameName);


// refer to mdn docs for more methods
console.log(gameName[2]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.lastIndexOf('a'));

const nwstr = gameName.substring(0,3)
console.log(nwstr);

const anthrStr = gameName.slice(-7,3) //neg slicing
console.log(anthrStr);


//to remove extra spaces
const newstr = ' kd   j'
console.log(nwstr);
console.log(newstr.trim());

// replace method
// include  to search whether a value exists in string


//read more about strings on mdn page

