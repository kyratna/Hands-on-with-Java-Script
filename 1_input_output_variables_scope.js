//java script

//input output : console.log()
let a = 20;
console.log(a);

let b = [1,2,3,4,5];
console.log(b);
console.log("hello world");

//variables and its scope

c = 20; //global variable
var d = 30; //fucntion scope
let e = 50; //block scope

function fun(){

	let a = 5;
	if(a == 5){
		let b = 10; //here 'b' has the block scope
		console.log("inside",b); //10
	}
	console.log("inside",b); //1,2,3,4,5 : array
}

function fun(){

	let a = 5;
	if(a == 5){
		var f = 40; //here 'f' has the function scope
		console.log("inside",f); //40
	}
	console.log("inside",f); //40
}
console.log(f); //gives error as 'f' is not defined
//we can make 'f' as global variable
// f = 40;  //like this it will be global variable now


fun();