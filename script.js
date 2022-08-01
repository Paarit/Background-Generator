//Identifying DOM elements

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rButton = document.getElementById("random");


function gradientPicker(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    
    css.textContent = body.style.background + ";";
} 


// generating random gradient combo 

function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for( i=0; i<6; i++ ){
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function randomGradientCombo(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();

    gradientPicker();
}



gradientPicker();   //for displaying the initial CSS linear gradient property on the first page load

rButton.addEventListener("click", randomGradientCombo);
color1.addEventListener("input", gradientPicker);
color2.addEventListener("input", gradientPicker);

