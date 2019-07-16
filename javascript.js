function webtoggle(){
	var temp = document.getElementById("webmenubox").style.visibility;
	alert(temp);
	if(temp == "hidden"){
		temp = inline;
	}
	else {
		temp = hidden;
	}
}
