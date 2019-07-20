function webtoggle(){
	var temp = document.getElementById("webmenubox");
	alert(temp);
	alert(temp.style);
	alert(temp.style.display)
	if(temp.style.display == "none"){
		temp.style.display = "block";
	}
	else {
		temp.style.display = "none";
	}
}
