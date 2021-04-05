console.log("hello, world");

// objects vs. arrays
// object
var obj = {
    // key: value,
    // key must be a string
    // value can be anything
}

// array
// var userName = "Jason";
// var password = "myPassword";
// var age = 41;

// var jason = [ userName, password, age];

// jason[0];

// var jasonObj = {
//     "uName": "Jason",
//     "pwd": "myPassword",
//     "oldness": 42
// }
// jason.uName;
// jason['pwd'];

var person1 = {name: "Fred"};
var person2 = {name: "NotFred"};
var person3 = {name: "Somebody else"};

//var students = [person1, person2, person3];

// for(var i = 0; i<students.length; i++){
//     console.log(students[i].name)
// }
var students = [];
class Student {

    constructor(fName, lName){
        // Attributes
        this.fn = fName;
        this.ln = lName;
        console.log("created student: " + this.fn + " " + this.ln)
        students.push(this);
    }

    sayHi(){
        console.log(`Hello, my name is ${this.fn}!`)
    }
}
var jason = new Student("Jason", "Brady");
var corey = new Student("Corey", "McKeel");
students.forEach(student => {
    student.sayHi();
});