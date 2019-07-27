function menutoggle(menu_id){
	var selected = document.querySelector(menu_id);
	if(selected.style.display == "block"){
		selected.style.display = "none";
	}
	else {
		document.querySelector("#webmenubox").style.display="none";
		document.querySelector("#basicmenubox").style.display="none";
		document.querySelector("#sharemenubox").style.display="none";
		document.querySelector("#helpexplainbox").style.display="none";
		selected.style.display = "block";
	}
}

function contenttoggle(content_id){
	document.querySelector("#searchtab").style.display="none";
	document.querySelector("#basictab").style.display="none";
	document.querySelector("#webtab").style.display="none";
	document.querySelector("#picturetab").style.display="none";
	document.querySelector(content_id).style.display="block";
}


