
//hide bar nav, replace with nav dropdown on mouseover event
function navFunction() {
    document.getElementById("mainNavOpen").style.display = "block";
    document.getElementById("mainNavClosed").style.display = "none";

}
//do the inverse with onclick
function navFunctionClose() {
	document.getElementById("mainNavOpen").style.display = "none";
    document.getElementById("mainNavClosed").style.display = "block";
}

