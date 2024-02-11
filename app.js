document.addEventListener("DOMContentLoaded", function () {
    const tooltips = document.querySelectorAll(".tooltip");
    const infographic = document.getElementsByClassName(".infographic-containter");
    tooltips.forEach(tooltip => {
        tooltip.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.02)";
            this.style.opacity = "1";
            infographic.opacity = "0.5";
        });

        tooltip.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.opacity = "0";
        });
    });
});