// HAMBURGER MENU
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
// WEATHER INFO

// RENTAL PAGE INFO
const url = "https://jaredrezabala.github.io/wdd230/scoots/data/rentals.json";
const cards = document.querySelector(".scooters-info");

async function getJsonData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.scoots);
}

const displayData = (scoots) => {
    console.log(scoots);
    scoots.forEach(scoot => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const people = document.createElement("p");
        // const table = document.createElement("table");
        name.textContent = scoot.model;
        image.setAttribute('src', scoot.img);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('alt', scoot.model);
        // person.textContent = `Max. Persons: ${scoot.persons}`;
        people.textContent = `Max. Persons: ${scoot.persons}`;
        // table.setAttribute('tr');
        // table.setAttribute('th', 'Reservation');
        // table.setAttribute('th', 'Walk-In');
        // table.setAttribute('tr');
        // table.setAttribute('td', scoot.reservation[0]);
        // table.setAttribute('td', scoot.reservation[1]);
        // table.setAttribute('td', scoot.walkin[0]);
        // table.setAttribute('td', scoot.walkin[1]);
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(people);
        // card.appendChild(table);
        cards.appendChild(card);
    });
}
getJsonData();