document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".education-section img").forEach(img => {
        img.classList.add("loaded");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    boxes.forEach(box => {
        observer.observe(box);
    });
});
