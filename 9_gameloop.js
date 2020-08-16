//java script
//concept of game-loop

//gameloop : it is a concept of looping used in the games
//again and again loading is ensured by the concept of gameloop

//  -->  game
//	      --> init object
//        --> draw
//        --> update
//		  --> game
//

//game has 4 comcoments: init object, draw, update, game over
//draw and update works in a loop : loop is called gameloop

//          |--------| (repeat)
//          v        v
// init -> draw -> update -> game over
//          ^        ^
//          |--------| (repeat)

// this is the game-loop
//draw and update is in the loop


// pen.fillRect(rect.x,rect.y,rect.w,rect.h);


function init(){
	//console.log("in init");
	canvas = document.getElementById("mycanvas");
	W = canvas.width = 500;
	H = canvas.height = 500;
	pen = canvas.getContext('2d');
	gameover = false;


	rect = {
	x:20,
	y:20,
	w:40,
	h:40,
	speed:10, 
	};


}

function draw(){
	//console.log("in draw");
	pen.clearRect(0,0,W,H); //clear the canvas
	pen.fillRect(rect.x,rect.y,rect.w,rect.h);
	pen.fillStyle = "red";
}

function update(){
	//console.log("in update");
	rect.x += rect.speed;
	if(rect.x > W-rect.w  || rect.x < 0){
		rect.speed *= -1;
	}
}

function gameloop(){
	//console.log("in game loop");
	draw();
	update();
	if(gameover  == true){
		clearInterval(f); //on console, gameover = true // will end the game play
	}

}

init();
var f = setInterval(gameloop,100);






