const ENGLISH = "en";
const RUSSIAN = "ru";
var SUPPORTED_LANGUAGES = {
    "en": ENGLISH,
    "en-US": ENGLISH,
    "en-UK": ENGLISH,
    "ru": RUSSIAN,
    "ru-RU": RUSSIAN
};
var ALL_CONTENT = {
    [ENGLISH]: {
        title: 'What is GetSights?',
        description: `
            <p>
                Plan your trip or regular walk, find the best sightseeing and routes, created by travel bloggers, professional travellers and other users, create your own route, share it with friends and more – all from your mobile device.
            </p>
        `
    },
    [RUSSIAN]: {
        title: 'Что такое GetSights?',
        description: `
            <p>
                Планировать ваше путешествие или обычную прогулку, находить лучшие достопримечательности и маршруты, созданные путешествующими блогерами, профессиональными путешественниками или другими пользователями, создавать свои собственные маршруты, делиться ими с друзьями и многое другое – в вашем мобильном телефоне.
            </p>
        `
    }
};

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

function getCurrentLanguage() {
    const userLanguage = window.navigator.language;
  
    return SUPPORTED_LANGUAGES[userLanguage] || SUPPORTED_LANGUAGES[ENGLISH];
  }

function init() {
    setCurrentYear();
    registerHandlers();
}

window.addEventListener("load", init);
