// stack (primitive)
// declared variables ka copy milega, jb stack use hoga

// heap(non-primitive)
// orginal value ka reference, chngs orginl val m show honge



let mynam = 'advaita'

//isme copy milegi original val ki
//mynam ki original value whi rahegi
let nwnam = mynam
nwnam = 'dwait'

console.log(mynam);
console.log(nwnam);


let user ={
    email: 'user@google.com',
    upi: '2323'
}
//isme direct reference milega hume object ki values ka
// jo v hum usernw m chnges karenge wo direct old obj m show honge

let usernw = user

usernw.email = 'hello@gmail.com'

console.log(user.email);
console.log(usernw.email);
