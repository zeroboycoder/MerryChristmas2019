const text = document.querySelector("h1");

setInterval(function(){
    const firstColorCode = Math.ceil(Math.random()*255);
    const secondColorCode = Math.ceil(Math.random()*255);
    const thirdColorCode = Math.ceil(Math.random()*255);
    text.style.color = "rgb("+firstColorCode+","+secondColorCode+","+thirdColorCode+")";
}, 500)