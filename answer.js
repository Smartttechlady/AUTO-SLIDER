// // PART A 


// // Q1:
// // let data = Math.random() * 255
// // console.log(data);



// // // Q2:
// // // let date = new Date ();
// // // let year = date.getFullYear ();
// // // let month = date.getMonth () + 1;
// // // let day = date.getDate ();
// // // let weekday = date.getDay ();
// // // let hour = date.getHours ();
// // // let minute = date.getMinutes ();
// // let second = date.getSeconds ();

// // // // console.log(year);
// // // console.log(month);
// // // console.log(day);
// // // console.log(weekday);
// // // console.log(hour);
// // // console.log(minute);
// // console.log(second);



// // Q3:
// // let age = prompt ("Please enter your age")

// // if(age >= 18){
// //     alert("You are permitted to drive.")
// // }else{
// //     alert("Wait till you are 18")
// // }


// // Q4:

// // let date = new Date();

// // let year = date.getFullYear();

// // let month = date.getMonth() + 1;
// // if (month < 10)
// // {
// //     month = "0" + month;
// // }

// // let day = date.getDate();
// // if (day <10)
// // {
// //     day = "0" + day;
// // }
// // let hour = date.getHours ();

// // if (hour <10) 
// //    { hour = "0" + hour;
// // }

// // let minute = date.getMinutes ();

// // if (minute <10)
// //    { minute = "0" + minute;
// // }

// // // let formattedDate= year + "-" + month + "-" + day + "  " + hour + ":" + minute;
// // // let formattedDate= day + "-" + month + "-" + year + "  " + hour + ":" + minute;
// // let formattedDate= day + "/" + month + "/" + year + "  " + hour + ":" + minute;

// // console.log(formattedDate);



// // Q5:

// // let age = prompt ("Enter your age")

        
// // if( age >= 18){
// // alert("you are old enough to drive.")

// // }else{
// // let remaining = 18 - age;
// //   alert (`you are not old enough, you need, ${remaining} more years.`);
// // }


// // Q6:

// // let yourage = prompt ("Enter your age")
// // if( yourage > 30){
// //     alert("You are older than me.")
// //     } else if( yourage == 30){
// //         alert("We are age mate.")
// // }
// // else{
// //     alert(" I'm older than you.")
// // }


// // Q7(i):

// // let a= 5
// // let b = 10


// // a>b? console.log('a > b'): console.log('a < b');


// // Q7(i):

// // let a= 5
// // let b = 10



// // if (a>b) {
// //     console.log('a > b');
// // } else {
// //     console.log('a < b');
// // }



// // Q8

// // let number = 14

// // if (number % 2 === 0) {
// //     console.log("The number is even")
// // } else {    
// //     console.log("It is not an even number")
// // }




// // PART B

// // Q1.

// let score = 50

// if (score >= 80 && score <=100) {
//     console.log("A")
// } else if (score >= 70 && score <= 89) {
//     console.log("B")
//     } else if (score >= 60 && score <= 69) {
//         console.log("C")
//         } else if (score >= 50 && score <= 59) {
//             console.log("D")
//             } else {
//                 console.log("F")
//             }


// // Q2.
// function checkmonth () {
//     let month = prompt ("Enter your month ")
//     if ( month == "September" || month == "October" || month == "November" || month == "December") {
//        alert("The seaon is Autumn")
//     } else if ( month == "December" || month == "Januaary" || month == "February" ) {
//         alert("The seaon is Winter")
//     }else if (  month == "March" || month == "April" || month=="May") {
//         alert("The seaon is Spring")
//     }else if (  month == "June" || month == "July" || month == "August") {
//         alert("The seaon is Summer")}
//     }

//     checkmonth()



// // Q3.

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i}= ${i * i}`);
}


// // Q4.

// // for (let i=0; i<= 100; i++ ){
// //     console.log(i)
// // }

// let number = 100;

// let sum = 0;

// for(i = 0; i <= number; i++){
  
//   sum = sum + i;
// }

// console.log(`sum of first ${number} natural numbers is: `, sum);


// Q5.

// let sumE = 0
// let sumO = 0

// // You could technically start at 1 here
// for (let i = 0; i <= 100; i++) {
//   // Just add the numbers without using arrays
//   if (i % 2 == 0) {
//     sumE += i
//   } else {
//     sumO += i
//   }
// }

// console.log(sumE, sumO)



// // Q6. 

// let name = ["HTML", "CSS", "JS", "ReactT", "Redux", "Node ", "Express", "MongoDB" ]

// for (let i=0; i< name.length; i++ ){
//     console.log(name[i])
// }


// // Q7.

// let fruits=  ['banana', 'orange', 'mango', 'lemon'];
// for (let i =fruits.length -1; i>=0; i--) {
//  console.log(fruits[i]);
// }








// PART C

// Q1

// let countries = ["finland", "ireland", "bolivia", "arbenia", "switzerland"]

// for (let each of countries) {
//     if(each.endsWith("land")){
//         console.log(each);
//     }
    
// }


// Q9

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//  const backEnd = ['Node','Express', 'MongoDB']
//  const fullStack = [frontEnd, backEnd]
//  console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]








