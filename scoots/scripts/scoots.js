// HAMBURGER MENU
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// RENTAL INFO
const url = "https://jaredrezabala.github.io/wdd230/scoots/data/rentals.json";
const cards = document.querySelector(".scooters-info");

async function getJsonData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.scoots);
}

const displayData = (scoots) => {
    scoots.forEach(scoot => {
        const name = document.createElement("h2");
        const persons = document.createElement("p");
        // const
    });
}