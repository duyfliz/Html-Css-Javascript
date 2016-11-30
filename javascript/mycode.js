var word="bottles";
var count=99;
while(count>0) {
	console.log(count+" " +word+" of beer on the wall");
	console.log(count+" "+word+" of beer,");
	console.log("Take one down, pass its around,");
	count = count-1;
	if(count>0)
		console.log(count+" "+word+" of beer on the wall.");
	else 
		console.log("No more "+word+" of beer on the wall.");
}
alert("Hi there");

var name="Joe";
var i=0;
while (i<2) {
	document.write("Happy birthday.<br>");
	i=i+1;
}
document.write("Happy birthday " + name);
