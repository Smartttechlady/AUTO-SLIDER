document.getElementById("first").innerText = Math.round(Math.random()*100);
document.getElementById("second").innerText = Math.round(Math.random()*100);
document.getElementById("third").innerText = Math.round(Math.random()*100);
document.getElementById("fourth").innerText = Math.round(Math.random()*100);


setInterval(function() {
document.getElementById("first").innerText = Math.round(Math.random()*100);
document.getElementById("second").innerText = Math.round(Math.random()*100);
document.getElementById("third").innerText = Math.round(Math.random()*100);
document.getElementById("fourth").innerText = Math.round(Math.random()*100);
},3000)

