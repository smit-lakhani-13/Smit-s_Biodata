const carousel = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");

document.querySelectorAll(".contact-info a").forEach((link) => {
	link.addEventListener("click", (event) => {
		const href = event.target.getAttribute("href");
		if (href.startsWith("tel:")) {
			// Handle phone call
			console.log("Making call to:", href);
		} else if (href.startsWith("mailto:")) {
			// Handle email link
			console.log("Opening email client:", href);
		} else if (href.startsWith("https://maps.app.goo.gl")) {
			// Handle Google Maps link
			console.log("Opening Google Maps:", href);
		}
	});
});

let currentIndex = 0;
const totalItems = items.length;

// Function to update the active class
function updateActiveItem(index) {
	items.forEach((item, i) => {
		item.classList.remove("active");
		if (i === index) {
			item.classList.add("active");
		}
	});
}

// Function to show the next item
function showNextItem() {
	currentIndex = (currentIndex + 1) % totalItems;
	updateActiveItem(currentIndex);
}

// Function to show the previous item
function showPrevItem() {
	currentIndex = (currentIndex - 1 + totalItems) % totalItems;
	updateActiveItem(currentIndex);
}

// Add event listeners for buttons
nextButton.addEventListener("click", showNextItem);
prevButton.addEventListener("click", showPrevItem);

// Auto-rotate every 5 seconds
setInterval(showNextItem, 5000);
