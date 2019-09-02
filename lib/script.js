

// scripts are here

//1 - Loop that print numbers from 120 - 140.


for (i = 120; i >= 120 && i <= 140; i++) {
    console.log(i);
}


//2 - Print stars "*" in a loop 5 rows.

console.log("print stars in a row")
var i = 0;
while (i <= 4) {
    i++
    console.log("*".repeat(i));
}


//3 - print the hight of each student

var student1 = {
    name: "John Doe",
    age: 33,
    grades: [78, 86, 92, 65],
    height: 158
}

var student2 = {
    name: "Mike Doe",
    age: 22,
    grades: [42, 67, 92, 32],
    height: 178
}

var student3 = {
    name: "Sara Doe",
    age: 55,
    grades: [90, 86, 92, 100],
    height: 168
}

var student4 = {
    name: "John Doe Jr.",
    age: 12,
    grades: [88, 86, 99, 65],
    height: 188
}

//3 - print the height of each student
var students = [student1, student2, student3, student4];
var student = "";
console.log("***students Height***");

students.forEach(function (student) {

    console.log(student.name);
    console.log("height: " + student.height);
});

  //3 - change all to 175 height for each student

console.log("***students Height = 175***");

students.forEach(function (student) {
    student.height = "175"
    console.log(student.name);
    console.log("new height: " + student.height);
});