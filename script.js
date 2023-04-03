//constant for the button
const button = document.querySelector("button")

//function that gets random color and changes the background of the body element
function changeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor
}

//event listener that responds to button press
button.addEventListener("click", changeColor);