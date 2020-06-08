//java script
//hands on with the 'canvas' tag

//using js we are getting the canvas
canvas = document.getElementById("mycanvas");
//try to chnage the canvas specification - DOM Manipulation
canvas.width = 500;
canvas.height = 500;

//canvas is used to to draw graphics
// we need another object to draw (named here as 'pen')
// 'pen' is just a global variable name. we can choose any name
pen = canvas.getContext('2d'); //we are drawing in '2d'

pen.fillRect(20,20,50,50); //x,y,width,height

pen.fillStyle = "blue"; // drawings will be filled with 'blue' color from now on

pen.fillRect(100,100,30,30); //rectangle is made

pen.strokeStyle = "black"; //outline or boundry of drawing will be black from now on

pen.fillStyle = "yellow"; //yellow color will be filled from now on

pen.arc(200,200,40,0,2*Math.PI); //fucntion to draw the circle
//x,y,radius,startAngle,endAngle ?anticlockwise
//angles in radian (0 to 360 degree)
//pen.fillArc(); - doesn't exist, that's why we need to use these functions given below 

pen.stroke(); //call it to draw

pen.fill(); //call it to fill the drawing

