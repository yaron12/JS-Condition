/**
 * @author ybensimx
 */
/*--------- 1 ---------*/
var x = 5;
var y = 8;
if (x > y) {
	console.log(x);
} else {
	console.log(y);
}

/*------------ 2 ----------*/
var a = 3;
var b = -7;
var c = 2;
/*var a=3,b=-7,c=2;*/
sum = a + b + c;
if (sum >= 0) {
	console.log("+")
} else {
	console.log("-")
}
/*------------ 3 ----------*/
var num1 = 0,
    num2 = -1,
    num3 = 4;
if (num1 > num2 && num1 > num3) {
	if (num2 > num3) {
		console.log(num1 + ", " + num2 + ", " + num3);
	} else {
		console.log(num1 + ", " + num3 + ", " + num2);
	}
} else if (num2 > num1 && num2 > num3) {
	if (num1 > num3) {
		console.log(num2 + ", " + num1 + ", " + num3);
	} else {
		console.log(num2 + ", " + num3 + ", " + num1);
	}
} else if (num3 > num1 && num3 > num2) {
	if (num1 > num2) {
		console.log(num3 + ", " + num1 + ", " + num2);
	} else {
		console.log(num3 + ", " + num2 + ", " + num1);
	}
}
/*
var num1=0,num2=-1,num3=4;
 var high;
 var middle;
 var low;
 if (num1>num2 && num1>num3)
 {
 if (num2>num3)
 {
 high=num1;
 middle=num2;
 low=num3;
 }
 else
 {
 high=num1;
 middle=num3;
 low=num2;
 }
 }
 else if (num2>num1 && num2>num3)
 {
 if (num1>num3)
 {
 high=num2;
 middle=num1;
 low=num3;
 }
 else
 {
 high=num2;
 middle=num3;
 low=num1;
 }
 }
 else if (num3>num1 && num3>num2)
 {
 if (num1>num2)
 {
 high=num3;
 middle=num1;
 low=num2;
 }
 else
 {
 high=num3;
 middle=num2;
 low=num1;
 }
 }
 console.log(high + ", " + middle + ", " +low);
 */

/*------------ 4 ----------*/
var num1 = -5,
    num2 = -2,
    num3 = -6,
    num4 = 0,
    num5 = -1;
var high = num1;
if (num2 > high) {
	high = num2;
}
if (num3 > high) {
	high = num3;
}
if (num4 > high) {
	high = num4;
}
if (num5 > high) {
	high = num5;
}
console.log(high)
/*------------ 5 ----------*/
var grades = [80,77,88,95,68];
console.log(grades);
avg=(grades[0]+grades[1]+grades[2]+grades[3]+grades[4])/5;
console.log(avg);
if (avg<60){
	console.log("גרוע מאוד")
}
else if (avg<70){
	console.log("גרוע ")
}
else if (avg<80){
	console.log("בינוני ")
}
else if (avg<90){
	console.log("טוב ")
}
else if (avg<100){
	console.log("טוב מאוד")
}
else{
	console.log(" הציון לא בטווח")
}

