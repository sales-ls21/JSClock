var secondHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".min-hand");
var hourhand = document.querySelector(".hour-hand");

function setDate() {
	var now = new Date();
	var seconds = now.getSeconds();
	var secondsinDegs = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsinDegs}deg)`;

	var minutes = now.getMinutes();
	var minsinDegs = ((minutes / 60) *360) + 90;
	minHand.style.transform = `rotate(${minsinDegs}deg)`;

	var hour = now.getHours();
	var hourinDegs = ((hour / 12) * 360) + 90;
	hourhand.style.transform = `rotate(${hourinDegs}deg)`;
}
	setInterval(setDate, 1000);