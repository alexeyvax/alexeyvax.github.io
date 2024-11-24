function registerScrollPageHandler() {
    var header = document.getElementById("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });
}

function registerHandlers() {
    registerScrollPageHandler();
}

function setCurrentYear() {
    const element = document.querySelector(".currentYear");

    if (element) {
        element.textContent = new Date().getFullYear();
    }
}

function init() {
    setCurrentYear();
    registerHandlers();
}

window.addEventListener("load", init);
