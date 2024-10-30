// Navbar scroll color change
window.addEventListener("scroll", function () {
	const navbar = document.querySelector(".navbar");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// Smooth reveal animation for sections on scroll
const sections = document.querySelectorAll(".section");

const revealSections = () => {
	const triggerBottom = window.innerHeight * 0.8;
	sections.forEach((section) => {
		const sectionTop = section.getBoundingClientRect().top;
		if (sectionTop < triggerBottom) {
			section.classList.add("reveal");
		} else {
			section.classList.remove("reveal");
		}
	});
};

window.addEventListener("scroll", revealSections);

// Smooth scroll to sections on click
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute("href"));
		target.scrollIntoView({ behavior: "smooth" });
	});
});

// Set active class to navbar items based on scroll position
const navItems = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", function () {
	let fromTop = window.scrollY;
	navItems.forEach((link) => {
		const section = document.querySelector(link.getAttribute("href"));
		if (section.offsetTop <= fromTop + 100 && section.offsetTop + section.offsetHeight > fromTop + 100) {
			link.classList.add("active");
		} else {
			link.classList.remove("active");
		}
	});
});
