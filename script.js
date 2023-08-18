const elements = document.getElementsByTagName("input");

function getFormvalue() {
	let fName = elements[0].value;
	let lName = elements[1].value;
    //Write your code here
	alert(fName + " " + lName);

}
