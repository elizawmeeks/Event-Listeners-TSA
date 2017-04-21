var arrow = document.getElementById("arrow");
var placeImage = document.getElementById("image");

window.addEventListener("click", function(event){
	var grabArrow = document.querySelector("#arrow");
	console.log("grabArrow", grabArrow);
	var random = Math.floor((Math.random() * 2) + 1);
	console.log(random);
	if (random === 1){
		grabArrow.classList.add("flip");
	} else {
		grabArrow.classList.remove("flip");
	}
	
})