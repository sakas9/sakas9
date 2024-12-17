
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector("#darkModeToggle");

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "Šviesus režimas";
        } else {
            toggleButton.textContent = "Tamsus režimas";
        }
    });
});
