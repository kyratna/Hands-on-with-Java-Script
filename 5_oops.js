//java script
//object oriented programming

//allows to create objects without defining the class

//another way
function Fruit(taste, color){
	this.color = color;
	this.taste = taste;
}

//new keyword
let mango = new Fruit("sweet", "yellow");
let orange = new Fruit("sour", "orange");

//one way
var apple = {
	taste: "sweet",
	color: "red",
}

//apple; & orange; : has slight difference in the output
//on console -> o/p :apple.taste; : sweet

//both the above ways are objects

//one another way to make classes in 2015
// Class Keyword (ECMAScript 2015) [also known as]


//functions - can be written in two ways:-
//1. decelaration method (defining the function definition)
//2. expressions method (using variable reference to the fucntion)
//similarly we can write the class in these above two ways

// decelaration method
class FruitClass{
	constructor(taste,color){
		this.color = color;
		this.taste = taste;
	}
};

let kiwi = new FruitClass("sour","green");

// expression method
let FruitClass2 = class{
	constructor(taste, color){
		this.color = color;
		this.taste = taste;
	}
};

let kiwi2 = new FruitClass2("sour", "green");

//here 'kiwi' is now object of class 'Fruit'
//if 'kiwi2' or 'kiwi' is called before the decelaration of the class or expression
//then it will rresult in be error. 

//POINT TO REMEMBER: [no concept of hoisting]
// decelaration method will not be hoisted
// expression mentod will not be hoisted.

