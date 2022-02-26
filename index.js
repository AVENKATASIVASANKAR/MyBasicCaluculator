/*var num1=prompt("enter value 1");
num1=parseFloat(num1);
var num2 =prompt("enter value 2");
num2 = parseFloat(num2);
document.querySelector(".addition").addEventListener("call",function(num1,num2){
var result = num1+ num2;
return result;
});*/
var num1 = prompt("your first number");
num1 = parseFloat(num1);
var num2 = prompt("your second number");
num2 = parseFloat(num2);
function addition(num1,num2){
   var result= num1+num2;
document.querySelector("h2").innerHTML=result;
}
function substraction(num1,num2){
    var result =num1-num2;
    document.querySelector("h2").innerHTML=result;
}
function multiplication(num1,num2){
    var result = num1*num2;
    document.querySelector("h2").innerHTML=result;
}
function division(num1,num2){
    var result =num1/num2;
    document.querySelector("h2").innerHTML=result;
}
function modulo(num1,num2){
    var result =num1%num2;
    document.querySelector("h2").innerHTML=result;
}
