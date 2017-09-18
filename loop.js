var i = 5;
var j = 10;
var month = "march";

if (i == 6) {
    document.write(i);
} else if (j == 11) {
    document.write(j);
} else {
    document.write("else statment");
}

switch (true) {
    case i>j:
           document.write(j);
    case i<j:
        document.write("<br>");
            document.write("feb" + i);
    case i==j:
        document.write("feb" + i +' ' +j);
    default : 
        document.write("default");
}


/* first =initalization
    second = condition checking 
    third = increment */
for(i=5;i<10;i++)
    {
        if(i == 8)
            {
                continue;
            }
         document.write("<br> for "+i);
    }
   

var i = 5;
while(i<10)
    {
     document.write("<br> while "+i);
        i++;
    }

var num_arr = [5,6,7,8,9];
num_arr.forEach(function(numbers) {
               document.write("<br>numbers: "+numbers);
                });

k=10
do{
    document.write("<br> Do: "+k);
    k++;
}while(k<10);


