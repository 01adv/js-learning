const arr = [1,2,4,5,6,7]
const nwarr = ['hello', 'honey']

const myarr = new Array(1,2,3,4,5,6,7) //this way will add methods and functionalities to the array

// console.log(arr);
// console.log(nwarr);

// myarr.push(4)
// myarr.push(34, 33)
// myarr.pop()

// myarr.unshift(51)
// myarr.shift()

//include(9)
//indexOf()

const narr = myarr.join()  //converts to string

// console.log(myarr);
// console.log(narr);
// console.log(typeof narr);


//slice and splice

const myn = myarr.slice(1,3)
console.log(myarr);
console.log(myn);

const mynn = arr.splice(1,3)
console.log(arr);
console.log(mynn);
