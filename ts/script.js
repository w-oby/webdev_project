"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toggleButton = document.getElementById("themeToggle");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = toggleButton.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
        icon?.classList.remove("fa-moon");
        icon?.classList.add("fa-sun");
    }
    else {
        icon?.classList.remove("fa-sun");
        icon?.classList.add("fa-moon");
    }
});
//# sourceMappingURL=script.js.map