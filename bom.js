// window.alert("hello")

// prompt("what is your name?")



let check = confirm("Are you sure?")

if (check == true) {
    alert("deleccting your account now")

} else{
    alert("oh! you have change your mind? You are welcome back")

}


// let start = 60;
// setInterval(function(){

//     if(start == 0){
//         start = 0;

//     } else {
//         start --;
//     }

//     document.querySelector("h1").innerHTML = start

//     if (start >= 30 && start < 46) {
//         document.querySelector("h1").style.borderColor = "yellow";

//     } else if(start < 30 && start > 0) {
//         document.querySelector("h1").style.borderColor = "red";

//     } else if (start == 0) {
//         document.querySelector("h1").innerHTML = "over"
//     }

// }, 1000)


// alert(window.screen.availHeight);
// alert(window.screen.availWidth);
// alert(window.screen.colorDepth);
// alert(window.location.hostname)
// alert(window.location.pathname);
// window.location.reload();


// let retrieve = window.localStorage.getItem("login")

// if (retrieve == true){
//     location.href = "/home.html";


// }else{
//     location.href = "/login.html";
// }


// document.querySelector("button").onclick = function () {
//     // window.location.href = "slider.html"
//     // //     // window.localStorage.setItem( "test", "storing this in local storage");
//     let data = { email: "a@b.com", password: 12345 }
//     window.localStorage.setItem("login", true)
//     window.localStorage.setItem("userinfo", JSON.stringify(data))
// }