window.onload = function() {
	const divs = Array.from(document.querySelectorAll("div"))
	divs.forEach(function(div, i) {
		let inner = div.innerText.trim();
		if (inner.length == 0 || inner.includes("img")) {
			div.style.backgroundColor = "transparent"
		}
	})

	let navbar = document.querySelector(".navbar-nav")
	let container_in_navbar = navbar.querySelector(".container")
	if (container_in_navbar) {
		let tmp = container_in_navbar.innerHTML
		navbar.innerHTML = tmp
	}
};