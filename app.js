document.addEventListener("DOMContentLoaded", function () {
    const tooltips = document.querySelectorAll(".tooltip");
    const elementsToBrighten = document.querySelectorAll(".infographic-container > *:not(.tooltip)");

    tooltips.forEach(tooltip => {
        tooltip.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.02)";
            this.style.opacity = "1";
            this.style.filter = "brightness(100%)"; 
            elementsToBrighten.forEach(element => {
                element.style.filter = "brightness(80%)";
            });
        });

        tooltip.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.opacity = "0";
            this.style.filter = "brightness(80%)";
            elementsToBrighten.forEach(element => {
                element.style.filter = "brightness(100%)";
            });
        });
    });
});
