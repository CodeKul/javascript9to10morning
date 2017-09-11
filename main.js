var myHeading = document.querySelector('h1');
myHeading.textContent = 'Welcome to Variables & Datatypes!';


var myname;
document.write(typeof (myname));

var name = 'codekul';
document.write(typeof (name));

var bool = true;
document.write(typeof (bool));

var num = 1;
document.write(typeof (num));

var mydata = null;
document.write(typeof (mydata));

function calculate(var1 = 10, var2 = 20) {
    console.log(var1 + var2)
}

console.log(typeof (calculate));

var object1 = {name:"codekul",address:"pune"};
console.log(typeof(object1));
