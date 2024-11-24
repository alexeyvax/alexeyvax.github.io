function headerTitleButtonHandler() {
    if (window.scrollTo instanceof Function) {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: "smooth"
        });
    }
}

function registerHandlers() {
    var headerTitleButton = document.querySelector(".headerTitleButton");

    if (headerTitleButton) {
        headerTitleButton.addEventListener("click", headerTitleButtonHandler);
    }
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

