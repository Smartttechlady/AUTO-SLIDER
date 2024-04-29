// function greeting() {
//     alert ("sending notification")
// }


// function greeting() {
//     alert ("You are welcome to join our community")
// }



let registerUsers = [
    {name: "John", email: "john@example.com", password: "12345" },
    {name: "doe", email: "doe@example.com", password: "57883" },
    {name: "prince", email: "prince@example.com", password: "p1022" },
]

// registerUsers.find(function(each){
//     // console.log(each.email + " " + each.password);

//     console.log(`${each.email} ${each.password}`);
// })



function Login(email, password) { 
    let checkIfUserExists = registerUsers.find(function(each){
        return each.email === email && each.password === password
    })

if (checkIfUserExists === undefined){
    alert("Invalid email or password")
}else{
    alert("login successful")
}
// console.log(checkIfUserExists)
}


function handleChange() { 
    alert("You are one step ahead")
}




// setTimeout(hell0,3000)
// alert("hello")

// setTimeout(function(){
// alert("hello")
// },3000)



// function hello() {
//     alert("hello")
// }
// setInterval(hello,3000)





// function Login(email, password) {
//     if (email === "a@b.com" && password === "12345"){
//     alert ("login successfully");
// } else {
// alert ("invalid credentials")
// }
// }






