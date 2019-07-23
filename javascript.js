function menutoggle(menu_id){
	document.querySelector(".menu").style.display="none";
	var temp = document.getElementById(menu_id);
	if(temp.style.display == "block"){
		temp.style.display = "none";
	}
	else {
		temp.style.display = "block";
	}
}
