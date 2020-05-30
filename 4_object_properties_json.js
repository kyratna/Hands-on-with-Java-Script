//java script
//object oriented programming

//allows to create objects without defining the class

var obj={}; //object 'bird' created;

//one way of creating Java script object called: JSON - JavaScript Object Notation
var bird={
	//these below are properties of the object 'bird'
	x: 100,
	y: 20,
	color: "blue",
	eggs: ["one", "two", "three"],

	fly:function(){
		console.log("bird is flying"); 
	},

	fly_c:function(){
		console.log("bird is flying at :", this.x, this.y);
	}
};

//on console: bird;   : displays all the properties of the object 'bird'
//on console: bird.x = 120    : this will update 120 into x (100 -> 120) 

//using 'for' loop
for(let i=0; i<bird.eggs.length; i++){
	console.log(bird.eggs[i]); //birds.eggs[index] : we can iterate on the member 'eggs' of the object 'bird'
}

//using 'for each'
bird.eggs.forEach(function(val,idx){
	console.log(idx,val);
});
//here 'fucntion' is un-named function
//forEach iterated for each index of array
//'fucntion' will take 'idx' and 'val' ie index and value
//will print 'idx' and 'val'

//output :
/*
0 "one"
1 "two"
2 "three"
*/

//we can call fucntion present inside the object 'bird'
//on console : bird.fly();

//we can call here as well
bird.fly(); // o/p: bird is flying
bird.fly_c(); // o/p: bird is flying at 100 20


