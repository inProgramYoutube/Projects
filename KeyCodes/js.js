var text = document.querySelector("#text")

document.querySelector("body").onkeydown = function (e) {
	text.textContent = e.keyCode
}