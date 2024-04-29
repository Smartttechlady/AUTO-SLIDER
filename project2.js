// document.querySelector(".fa-eye").onclick = function(){
//     document.querySelector("input").setAttribute("type","text");
// }


let show = false;

document.querySelector(".fa-eye").onclick = function(){
    if(show == false){
        document.querySelector("input").setAttribute("type","text");
        show = true;

    }else{
        document.querySelector("input").setAttribute("type","password");
        show = false;
        }

    }