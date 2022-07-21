const hamburger = document.getElementById("hamburgerIcon");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (hamburger) {
	hamburger.addEventListener("click", () => {
		nav.classList.add("active");
	});
}

if (close) {
	close.addEventListener("click", () => {
		nav.classList.remove("active");
	});
}
