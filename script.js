document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".hero h1");

    heading.addEventListener("click", function () {
        heading.textContent = "Welcome to My Portfolio!";
    });
});
