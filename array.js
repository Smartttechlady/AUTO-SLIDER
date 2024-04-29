// let names = ["kayode", "john", "doe", "prince" ]

// console.log(names [3]);


// let age = ["13", "7", "6", "35" ]
// console.log(age [3]);


// let boutique = [

//     {name: "jeans", price: 20000, quantity: 1},

//     {name: "shoe", price: 45000, quantity: 1},

//     {name: "shoe", price: 90000, quantity: 4},

//     {name: "shirt", price: 10000, quantity: 1},

// ]

// console.log(boutique[2]);

// to call a particular property 
// console.log(boutique[2].price);




// ------ JIJI STORE---------



let jiji_cars = [

   {Make: "Huawei", price:"35000000",  year: "2024",  body: "SUV",  color:"black",  model:"avatr11",  seats:5, condition: "fairly-used", EngineSize:"2000cc"},

   
   {Make: "Audi", price:"25000000",  year: "2018",  body: "sedan",  color:"white",  model:"A4",  seats:5, condition: "fairly-used", EngineSize:"2300cc" },


   {Make: "Toyota", price:"54000000",  year: "2015",  body: "SUV",  color:"black",  model:"land cuiser",  seats:8, condition: "fairly-used", EngineSize:"4500cc" },


   {Make: "Toyota", price:"28000000",  year: "2013",  body: "SUV",  color:"red",  model:"land cuiser",  seats:8, condition: "fairly-used", EngineSize:"4600cc" },


   {Make: "Hyundai", price:"19000000",  year: "2009",  body: "SUV",  color:"black",  model:"equtus",  seats:5, condition: "fairly-used", EngineSize:"2200cc" }


]


//  includes

// let check = jiji_cars.includes({Make: "Audi", price:"25000000",  year: "2018",  body: "sedan",  color:"white",  model:"A4",  seats:5, condition: "fairly-used", EngineSize:"2300cc"});

// console.log(check);




// console.log(jiji_cars[2]);


// array method - length 

// console.log(jiji_cars.length);



// array method - push 

// jiji_cars.push({Make: "Audi", price:"26000000",  year: "2018",  body: "sedan",  color:"white",  model:"A7",  seats:5, condition: "new", EngineSize:"2700cc" });

// console.log(jiji_cars);


// jiji_cars.unshift({Make: "Audi", price:"26000000",  year: "2018",  body: "sedan",  color:"white",  model:"A7",  seats:5, condition: "new", EngineSize:"2700cc" });


// // indexof
// let data = [1,5,6, "hello"]
// data[3] = {names: "yusuf", skin: "black"}
// console.log(data);


// // pop

// let data = [1,5,6, "hello"]
// data.pop ();
// console.log(data);



// //  includes

// let data = [1,5,6, "hello"]
// let check = data.includes(6)
// console.log(check);




// //  slice

// let data = [1,5,6, "hello"]
// let result = data.slice(0, 2)
// console.log(result);




// //  splice

// let data = [1,5,6, "hello"]
// let result = data.splice(0, 2)
// console.log(result);


//  join

let data = [1,5,6, "hello"]
let result = data.join("+")
console.log(result);

















