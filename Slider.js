let currentIndex = 0;
let imgs = document.querySelectorAll(".slide")


function scrollImage() {
    imgs.forEach(function(each){
        // console.log(each);
        each.style.display = "none"
    })

imgs[currentIndex].style.display = "block"


}

scrollImage();

function nextSlide(){
    currentIndex = (currentIndex + 1) % imgs.length;
    scrollImage()
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
    scrollImage()
}


// AUTO PLAY

let firstIndex = 0;

function automaticScroll() {
    setTimeout(automaticScroll, 2000);
    var pics;
    let imgs = document.querySelectorAll(".slide");
    for (pics = 0; pics < imgs.length; pics++) {
        imgs[pics].style.display = "none";
    }

    firstIndex++;
    if (firstIndex > imgs.length) {
        firstIndex = 1;
    }
    imgs[firstIndex - 1].style.display = "block";

}

automaticScroll();