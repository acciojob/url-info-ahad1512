//your JS code here. If required.

function calcSize(str) {
	let size = str.length;
	return "The length of the URL is: "+size;
}
let str =window.location.href;
alert(calcSize(str));