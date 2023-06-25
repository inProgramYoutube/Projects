var input1 = document.querySelector("#input1")
var input1eye = document.querySelector("#input1eye")

input1eye.onmousedown = function () {
	input1eye.style.backgroundImage = "url('close.png')"
	input1.type = "text"
}
input1eye.onmouseup = function () {
	input1eye.style.backgroundImage = "url('open.png')"
	input1.type = "password"
}

var input2 = document.querySelector("#input2")
var input2eye = document.querySelector("#input2eye")
var hide = true

input2eye.onclick = function () {
	if (hide == true) {
		input2eye.style.backgroundImage = "url('close.png')"
		input2.type = "text"
		hide = false
		return
	}
	if (hide == false) {
		input2eye.style.backgroundImage = "url('open.png')"
		input2.type = "password"
		hide = true
		return
	}
}