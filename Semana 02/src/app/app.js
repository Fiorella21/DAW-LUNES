
function  changeContent(){
	var txt = this.innerHTML;
	var ct = document.getElementById("content");
	ct.innerHTML="<h1>" + txt + "</h1>";
		
}

function init() {
	
	document.getElementById("btn1").onclick= changeContent;
	document.getElementById("btn2").onclick= changeContent;
	document.getElementById("btn3").onclick= changeContent;
	
}

window.onload=init;