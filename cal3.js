let data = [];
let screen = document.querySelector(".display")
let allbuttons = document.querySelectorAll(".input")


// get any button the user press
allbuttons.forEach(function(eachbtn){
    eachbtn.onclick = function(){

        if(eachbtn.innerText === "="){


            // display result 
            let convertedData = data.join("")
            let result = eval(convertedData)
            screen.innerText = result

            // console.log(result);

            // To delect data
        }else if (eachbtn.innerText === "AC"){
            data = [];
            screen.innerText = 0



        } else {
            // storing user input
            data.push(eachbtn.innerText)
            let convertedData = data.join("")
            screen.innerText = convertedData

        }

    }

})

