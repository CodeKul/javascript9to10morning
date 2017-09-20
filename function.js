function addNumber(num1,num2)
{
    var num11 = 10;
    var num2 = 25;
    document.write("addition is : "+ (num1+num2+num11));
}
addNumber(5,5);

function subNumber(num3,num4)
{
    document.write("<br>"+"Subtraction is :"+(num3-num4));
}
document.write("<br>"+"Multiple functions :");
subNumber(30,6);
subNumber(20,8);
subNumber(35,5);
multiNumber(5,5);
document.write("<br>"+"Multiple functions :"+multiNumber(5,6));
document.write("<br>"+"Multiple functions :");

function multiNumber(num5,num6)
{
    return (num5*num6);
}

var multi = multiNumber(2,4);
document.write("<br>"+"Multiplication is :"+multi);
document.write("<br>"+"Multiplication is :"+multiNumber(4,4));


function squre(sqr)
{
    return (sqr*sqr);
}

function divNumber(num9,num8){
    return (num9/num8);
}
var result = divNumber(squre(4),2);
document.write("<br>"+"Result is :"+result);