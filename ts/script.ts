// Added TS/JS functionality to make Dark Mode/Light Mode possible
// and to dynamically change the FontAwesome icon (sun and moon) on button click
const toggleButton = document.getElementById("themeToggle") as HTMLButtonElement;

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = toggleButton.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon?.classList.remove("fa-sun");
        icon?.classList.add("fa-moon");

    } else {
        
        icon?.classList.remove("fa-moon");
        icon?.classList.add("fa-sun");
        
    }

});