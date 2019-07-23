function menutoggle(menu_id){
	var selected = document.querySelector(menu_id);
	if(selected.style.display == "block"){
		selected.style.display = "none";
	}
	else {
		document.querySelector("#webmenubox").style.display="none";
		document.querySelector("#basicmenubox").style.display="none";
		document.querySelector("#sharemenubox").style.display="none";
		selected.style.display = "block";
	}
}
