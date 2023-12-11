document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("gallery");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    const images = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg","29.jpg","30.jpg","31.jpg"];

    // Function to set the mode based on the checkbox state
    function setMode(darkMode) {
        document.body.classList.toggle("dark-mode", darkMode);
        modeToggle.checked = darkMode; // Update the checkbox state
    }

    // Function to show the overlay and zoomed image
    function showOverlay(imageSrc) {
        overlay.innerHTML = `<span class="close-btn" onclick="closeOverlay()">&times;</span><img src="${imageSrc}" alt="Zoomed Image">`;
        overlay.style.display = "flex";
        document.addEventListener('contextmenu', event => event.preventDefault());
    }

    // Function to close the overlay
    function closeOverlay() {
        overlay.style.display = "none";
    }

    // Add event listener for mode toggle
    modeToggle.addEventListener("change", function () {
        setMode(modeToggle.checked);
    });

    // Set initial mode to dark mode
    setMode(true); // Call setMode with true to apply dark mode initially

    // Load images
    images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = `images/${image}`;
        imgElement.addEventListener("click", function () {
            showOverlay(`images/${image}`);
        });
        galleryContainer.appendChild(imgElement);
    });
});

// Function to close the overlay from outside the scripts.js file
function closeOverlay() {
    document.querySelector(".overlay").style.display = "none";
}
