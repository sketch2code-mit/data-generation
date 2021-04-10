window.onload = function() {
	const divs = Array.from(document.querySelectorAll("div"))
	divs.forEach(function(div, i) {
		if (div.innerText.trim().length == 0) {
			div.style.backgroundColor = "transparent"
		}
	})
};