//java script
//fucntions and its concept of hoisting
function square_root(n){
	console.log(Math.sqrt(n)); //gives answer sqrt(10)
	return 5; //prints return type value '5' otherwise it would be undefined
// return "hello" : will also work, it will return "hello"
// return; : this can be left empty/undefined as well
}

//square_root(10); //calling above function

//concept : "FUNCTION HOISTING"
//similar to flag hoisting

//if i call functions here, then:

/*
square_root(20); //works fine, o/p : we are in 1st fucntion
sqrt_n(20); //gives error : sqrt_n is not a fucntion
*/

//this is because of the concept of 'function hoisting'.
//all the functions definitions are copied to the top, before execution
//thus calling function doesn't give error
//but sqrt_n is fucntion expression, it wasn't copied/hoisted, and resulted into an error. 

//normal function decelaration
function square_root(n){
	console.log("we are in 1st function");
	return;
}

//function expressions
var sqrt_n = function(){
	console.log("we are in 2nd function");
	return;
}

//we are going to call fucntion

square_root(20); //o/p : we are in 1st fucntion
sqrt_n(20); //o/p : we are in 2nd function



