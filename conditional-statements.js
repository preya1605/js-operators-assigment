//1
let num = 25;
if (num % 5 === 0) {
    console.log("Divisible by 5");
}

//2
let age = 78
if (age>=60) {
    console.log("senior citizen");
}

//3
let num = 150;
if (num > 100) {
    console.log("big number");
}

//4
let temp = 5;
if (temp < 10 ) {
    console.log("very cold");
}

//5
let score = 100
if ( score ===100){
    console.log("perfect score")
}

//6
let n = -7
if (n<0){
    console.log("negative number")
}

//7
let x = ""
if (x===""){
    console.log("no input provided")
}

//8
let year = 2000;
if (year % 100 === 0) {
    console.log("Century Year");
}

// 9
let value = 8;
if (value > 0 && value % 2 === 0) {
    console.log("Positive Even Number");
}

// 10
let marks = 75;
if (marks >= 35 && marks <= 100) {
    console.log("Valid Marks");
}

//B
let n = 7
if (n%2==0) console.log("even");
else console.log("odd");

//2
let age = 18;
if (age >= 18) console.log("Eligible");
else console.log("Not Eligible");

//3
let num = -5;
if (num >= 0) console.log("Positive");
else console.log("Negative");

//4
let marks = 40;
if (marks >= 35) console.log("Passed");
else console.log("Failed");

//5
let ch = "A";
if (ch >= "A" && ch <= "Z") console.log("Uppercase");
else console.log("Not Uppercase");

//6
let a = 12;
if (a % 3 == 0) console.log("Divisible by 3");
else console.log("Not Divisible by 3");

//7
let password = "admin123";
if (password == "admin123") console.log("Login Successful");
else console.log("Incorrect Password");

//8
let year = 2024;
if (year % 4 == 0) console.log("Leap Year");
else console.log("Not a Leap Year");

//9
let x = 20, y = 10;
if (x > y) console.log(x);
else console.log(y);

//IF....ELSE IF...ELSE
//1
let month = 1;

if (month == 12 || month == 1 || month == 2){
    console.log("winter");
}else if (month >= 3 && month <= 5) {
    console.log("Summer");
} else if (month >= 6 && month <= 8) {
    console.log("Monsoon");
} else if (month >= 9 && month <= 11) {
    console.log("Autumn");
} else 
    console.log("Invalid Month");

//2
let income = 500000;
let tax;

if (income < 300000) {
    tax = 0;
} else if (income <= 700000) {
    tax = income * 0.05;
} else if (income <= 1000000) {
    tax = income * 0.10;
} else {
    tax = income * 0.15;
}

console.log("Tax =", tax);

//3
let marks = 85;

if (marks >= 90) {
    console.log("Outstanding");
} else if (marks >= 70) {
    console.log("Good");
} else if (marks >= 40) {
    console.log("Average");
} else {
    console.log("Needs Improvement");
}

//4
let speed = 60;

if (speed < 40) {
    console.log("Slow");
} else if (speed <= 80) {
    console.log("Normal");
} else {
    console.log("Fast");
}

//5
let height = 165;

if (height < 150) {
    console.log("Short");
} else if (height <= 170) {
    console.log("Average");
} else {
    console.log("Tall");
}

//6
let day = 6;

if (day >= 1 && day <= 5) {
    console.log("Weekday");
} else if (day == 6 || day == 7) {
    console.log("Weekend");
} else {
    console.log("Invalid Day");
}

//7
let units = 100;
let bill;

if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Bill = ₹" + bill);

//8
let attendance = 80;

if (attendance >= 90) {
    console.log("Excellent");
} else if (attendance >= 75) {
    console.log("Good");
} else if (attendance >= 50) {
    console.log("Satisfactory");
} else {
    console.log("Poor");
}

//9
let a = 75;
let b = 90;
let c = 85;

if (a >= b && a >= c) {
    console.log("Highest =", a);
} else if (b >= a && b >= c) {
    console.log("Highest =", b);
} else {
    console.log("Highest =", c);
}

//10
let num = -7;

if (num == 0) {
    console.log("Zero");
} else if (num > 0 && num % 2 == 0) {
    console.log("Positive Even");
} else if (num > 0) {
    console.log("Positive Odd");
} else if (num % 2 == 0) {
    console.log("Negative Even");
} else {
    console.log("Negative Odd");
}



