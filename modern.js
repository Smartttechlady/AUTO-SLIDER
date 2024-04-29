// // Local Variable and global variable
// // let a = 6;


// // function test(){
// //     let a =78;
// //     console.log(a);
// // }

// // test();
// // console.log(a);





// // function test(){
// //     let a = 78
// //     return a;
// // }
// // let result = test();

// // console.log(result);




// // const Test = ()=> {
// //  console.log ("Hello");
// // }
// // Test()



// // const Test = (first, second)=> {
// //     console.log (  first + second);
// // }
// // let result = Test(6, 6)  
// // console.log (result)




// // function Test (first, second){
// //     let total = first + second
// //     return total
// // }

// // let result = Test(6, 6)  
// // console.log (result)



// // let products = ["bag", "shoes", "trousers"]

// // // LOOP
// // for(let each of products){
// //     console.log(each);

// // }


// // FOR EACH
// // products.forEach((p) => console.log (p))


// // Map
// // products.map((p,i) => console.log (p, i))

// // let products = ["finland", "iceland", "scotland", "nigeria", "ghana", "gambia"]

// // // products.forEach((p) => console.log (p.toLocaleLowerCase()))

// // // let search = products.find((each) => each == "bag")

// // let search = products.filter((each) => each.endsWith == ("land"))

// // console.log(search);


// let login = true
// // if (login == true) {
// //     console.log("login successful")
// // }else{
// //     console.log("login unsuccessful")
// // }


// let check = login == true ? console.log("login successful") : console.log("login unsuccessful");



// 7. Create a div container on HTML document and create 100 to 100 numbers
// dynamically and append to the container div.
//  Even numbers background is green
//  Odd numbers background is yellow

for (let i = 1; i <= 100; i++) {

    let p = document.createElement("p")

    p.innerText = i

    if (i % 2 == 0) {
        p.style.backgroundColor = "green";

    } else {
        p.style.backgroundColor = "yellow"
    }

    // i % 2   == 0 ? p.style.backgroundColor = "green" : p.style.backgroundColor ="yellow"

    document.getElementById("container").appendChild(p)

}

















