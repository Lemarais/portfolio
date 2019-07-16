function webtoggle(){
	var temp = document.getElementById("webmenubox").display;
	alert(temp);
	if(temp == "hidden"){
		temp = inline;
	}
	else {
		temp = hidden;
	}
}
