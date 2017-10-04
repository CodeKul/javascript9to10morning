var obj1 = {
    name: "codekul",
    address: "karve Road",
    age:"1"
}

document.write("<br>"+obj1.address);
//dot Notation
document.write("<br>"+obj1["name"]);
document.write("<br>"+obj1["age"]);
//Bracket or Array notation


//custom Object
var obj2 = new Object();
obj2.title = "Javascript";
obj2.text = "UI technology";

document.write("<br>"+obj2.text);


var obj3 = {
    "name": "bootstrap",
    "text": "Freamwork",
    "use":"responsive",
    "myfun": function() 
    { 
        return "object function!"; 
    },
    "myarr": ["abc","xyz","pqr"]
};

document.write("<br>"+obj3["use"]);
document.write("<br>"+obj3.myfun());
document.write("<br>"+obj3.myarr);


//function object Constructor

function blogPost(title,text)
{
    this.title = title;
    this.text = text;
}

var blogPost1 = new blogPost("AngularJS","Javascript framework!......");
document.write("<br>"+blogPost1.title);

var bg1 = new blogPost("Bootstrap","Responsive Freamework");
document.write("<br>"+bg1.text);


var tech = {
    name: "javascript"
};
 
var freamwrk = tech;
var technology = freamwrk;

if(technology == freamwrk)
    {
        document.write("<br>both are equal");
    }
    else
        {
            document.write("<br>both are not equal")
        }
