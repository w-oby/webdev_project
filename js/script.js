"use strict";
const toggleButton = document.getElementById("themeToggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = toggleButton.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon === null || icon === void 0 ? void 0 : icon.classList.remove("fa-sun");
        icon === null || icon === void 0 ? void 0 : icon.classList.add("fa-moon");
    }
    else {
        icon === null || icon === void 0 ? void 0 : icon.classList.remove("fa-moon");
        icon === null || icon === void 0 ? void 0 : icon.classList.add("fa-sun");
    }
});
