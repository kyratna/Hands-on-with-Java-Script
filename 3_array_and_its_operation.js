//java script
//working on arrays
//push, pop, shift, unshift,length, indexOf
let arr = ["apple","mongo","guava"];
console.log(arr);

console.log(arr.length); //calculate the length of array.
//arr.length : here length is the property of the array, not function -X- arr.length() -X-

console.log(arr[1]); //access array elements by index

for(let i=0;i<5;i++){
	console.log(arr[i]);
}
// i = 0,1,2,3,4 : 3 & 4 will give "undefined" as values not present

//on console: arr;   : will print complete array

//array functions:

arr.push("banana"); //insert at the end
arr.pop(); //pop from the end
arr.indexOf("mango"); //linear search, return the index
arr.shift(); //delete from the front, returns deleted element
arr.unshift("kiwi"); //insert at the front

if(arr[0] == "apple"){
	console.log("apple");
}
else{
	console.log("no it is : ", arr[0]);
}