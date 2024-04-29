// let today = new Date( "2022-12-26 14:30:56")
// console.log (today);





// console.log (today.getFullYear());
// console.log (today.getMonth());
// console.log (today.getDate());
// console.log (today.getTime());
// console.log (today.getHours());
// console.log (today.getMinutes());
// console.log (today.getMinutes());
// console.log (today.toLocaleDateString());



// let age = prompt("Enter dob")

// let convertedAge = new Date(age)

// let today = new Date()

// let year = today.getFullYear() - convertedAge.getFullYear()

// let month = today.getMonth() - convertedAge.getMonth()

// let day = today.getDate() - convertedAge.getDate()

// alert(`you are ${year} years ${month} months ${day} days old`)



// synchronnous and  Asynchronous

// async function test () {
//     let data = await fetch("https://restcountries.com/v3.1/all")
//     console.log(data);

// }

// test()



async function test () {

    try{

        let data = await fetch("https://restcountries.com/v3.1/all")
    }catch(error){
   
    console.log(error);

}finally{
    console.log(hello);
}
}





