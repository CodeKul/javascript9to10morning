var ass_arr = new Array();
ass_arr["name"] = "codekul";
ass_arr["address"] = "karve nagar";
document.write("associavtive Array name: " + ass_arr["name"]);
document.write("<br>associavtive Array Address : " + ass_arr["address"]);

var arr = ['w', 'y', 'k', 'o', 'p', '1', '2'];
//var iterator = arr.values();

var iterator = arr.keys();
//document.write("<br>"+iterator.next().value);
//document.write("<br>"+iterator.next().value);

for (let letter of iterator) {
    document.write("<br>" + letter);
}



var for_exam = ["abc", "xyz", "pqr", "mns", "def"];
var arr_lenght = for_exam.length;
document.write("<br / >Lenght is :" + arr_lenght);
for (i = 0; i <= arr_lenght - 1; i++) {
    document.write("<br / >element is :" + i + ' ' + for_exam[i]);
    if (for_exam[i] == "pqr") {
        document.write("equal");
        break;
    }
}

for_exam.forEach(function (bbb) {
    document.write("<br / >element is :" + ' ' + bbb);
    if (bbb == "pqr") {
        document.write("equal");
    }

})

for(let aaa of for_exam){
    document.write("<br / >element is :" + ' ' + aaa);
}

