

// let registerUser = []

// let name = prompt("Enter your name")
// let email = prompt("Enter your email")
// let password = prompt("Enter your password")


// let user = {
//     theName: name,
//     theEmail: email,
//     thePassword: password
// }

// registerUser.push(user)

// console.log (registerUser)


// LOGICAL OPERATOR


// Not
// let a = 11;
// let b = "12";

// console.log(a != b);


// And
// let a = 11;
// let b = 12;
// let c = 15;

// console.log(a==b && c  == 13);


// let a = 12;
// let b = 12;
// let c = 15;

// console.log( a==b && c  == 15);



// Or
// let a = 11;
// let b = 12;
// let c = 15;

// console.log( a==b || c== 13);

// let a = 11;
// let b = 11;
// let c = 15;

// console.log( a==b || c== 13);



// Greater than
// let a = 11;
// let b = 11;
// let c = 15;

// console.log( a > b);

// let a = 11;
// let b = 11;
// let c = 15;

// console.log( a >= b);


// Less than
// let a = 11;
// let b = 12;
// let c = 15;

// console.log( a < b);


// let a = 11;
// let b = 12;
// let c = 15;

// console.log( a <= b);



// let score = 67
// console.log(score >= 60 && score <=69);


// let score = 39
// console.log(score >= 30 && score <=39);




// document.querySelector("button").onclick = function(){
// alert("Hello World")
// }



// document.querySelector("button").onclick = function(){
//     document.querySelector("h1").style .color = "red";
//     document.querySelector("h1").remove();

// }


// document.querySelector("button").onclick = function(){

// // let newelement = document.createElement("h2");
// // newelement.innerHTML = "Awesome!";
// // document.querySelector("body").appendChild (newelement)   


// let data = document.querySelector("input").value;
// alert(data);



// }
    



// document.querySelector(".btn").onclick = function(){
// // //     document.querySelector("h1").innerText.remove();
//     // document.querySelector("h1").style .color = "red";
// document.querySelector("h2").classList.toggle("changetored");
// // document.querySelector("h2").classList.remove("changetored");

// }




// for (let i = 0; i<10; i++){
// console.log("I will be a better programmer")
// }



// let data = {
//     firstname: "John",
//     lastname: "Smith",
//     age: "24",
//     skills:"wireframe, Pprototype, and other",
//     country:"United States"
// }


document.querySelector(".btn").onclick = function(){
    let data = {
        firstname: "John",
        lastname: "Smith",
        age: "24",
        skills:"wireframe, Pprototype, and other",
        country:"United States"
    }

    window.localStorage.setItem("userinfo", JSON.stringify(data))
}



// function createHelloWorld (){
// let c = alert ("Hello World")

//  }

//  createHelloWorld()

