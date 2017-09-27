var no1 = 10;
var no2 = 20;
var no3 = 30;
var no4 = 40;
var no5 = 50;


var no = [10,20,30,40,50];

document.write("Length : "+no.length);

document.write("<br>accessing element : "+no[0]);

no.push(80);
no.push(100);
document.write("<br>array element : "+no);
document.write("<br>Length : "+no.length);

no.pop();
document.write("<br>array element : "+no);
document.write("<br>array element : "+no.length);

var new_arr = new Array("abc","xyz",10,true);
document.write("<br> type of Array : "+typeof(new_arr));
new_arr[3] = false;
document.write("<br> New Array : "+new_arr);


//var num = new Array();
var num = [];
 num[0] = 10;
 num[1] = 20;
 num[2] = 30;
document.write("<br> another Way Array : "+num);

var new_con = new_arr.concat(num);
document.write("<br>array element : "+new_con.length);
document.write("<br> Concat Array : "+new_con);

new_con.unshift("codekul");
document.write("<br>array element : "+new_con.length);
document.write("<br> Concat Array : "+new_con);
new_con.push("codekul");
document.write("<br>array element : "+new_con.length);
document.write("<br> Concat Array : "+new_con);


document.write("<br>array element : "+new_con.length);
document.write("<br> Concat Array : "+new_con);


var remove_ele = new_con.splice(1,7);
document.write("<br> Concat Array : "+remove_ele);
document.write("<br> Concat Array : "+new_con);

var sal = ["25k","21K","20k","19k","18K","30K",];
sal.splice(2,4);
document.write("<br> Concat Array : "+sal);
sal.splice(2,0,"28K","29K");
document.write("<br> Concat Array : "+sal);

var new_sal = sal.join(" * ");
var new_sal1 = sal.join(" | ");
document.write("<br> join Array : "+new_sal1);
document.write("<br> sort Array : "+sal.sort());
