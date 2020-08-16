//java script
//event listeners

// canvas = document.getElementById("mycanvas");

// function f(){
// 	console.log("you clicked on the canvas");
// }

function f2(e){
	console.log("A key is pressed",e.key); //'e' is the attribute of 'event listening'. 'e.key' will be the name of the key pressed.
}

//canvas.addEventListener('click',f); //listening to the click event

document.addEventListener('keydown',f2); //listening to the key press event