var num1 = 20;
var num2 = 20;
var num3 = 21;
var num4 = 3;

/*
    
    + addition numbers
    - subraction of number
    * Multiplication of number
    / division of number
    % modules of number
    
   */

document.write("Addition is : "+(num1+num2)+"<br>");
document.write("Subtraction is : "+(num1-num2)+"<br>");
document.write("Multiplication is : "+(num1*num2)+"<br>");
document.write("Division is : "+(num1/num2)+"<br>");
document.write("Modules is : "+(num3%num4)+"<br>");


/* = */

var number = 75;
var number = 25;
document.write("number is : "+number+"<br>");

/*

/* 
> 
<
>=
<= 
==
*/

document.write("check is : "+(num1>=num2)+"<br>");
document.write("check is : "+(num1<=num2)+"<br>");
if(num2<num1)
    {
      document.write("condition is true");  
    }
    else
        {
            document.write("condition is false"); 
        }

var check1 = 10;
var check2 = "10";
document.write("<br>check1 type:" + typeof(check1)); 
document.write("<br>check2 type:" + typeof(check2)); 
if(check1 != check2)
    {
        document.write("<br>condition is true"); 
    }
else
    {
        
        document.write("<br>condition is false"); 
    }
    

/*&&
||
!*/

if((num1 != num2) || (num3<=num4))
   {
    document.write("<br>one of condition is true"); 
   }
else{
     document.write("<br>one of condition is false"); 
}


if(!(num1 == num2))
    {
       document.write("<br>Both are equle");  
    }
    else{
         document.write("<br>Both are not equle");
    }


var myarray = [10,20,30,40];
document.write("<br>array of types: "+ myarray[0]);
for(i=0;i<=myarray.length - 1;i++)
    {
         document.write("<br>array number is : "+myarray[i]);
    }

/* 
x++;
X= X+1;
x=X+2;
+= 
-=
*=
/=
*/
var x = 10;
x *=5;

document.write("<br>");
document.write(x);

x++;   //11
x = x+1; //11

x = x+2;
x= x+5;

