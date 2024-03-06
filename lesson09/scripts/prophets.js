const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets)

}
const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birth = document.createElement("p");
        const death = document.createElement("p");
        const length = document.createElement("p");
        const order = document.createElement("p");
        const birthplace = document.createElement("p");
        const children = document.createElement("p");

        card.style.textAlign = "center";
        card.style.lineHeight = "5px";
        card.style.marginTop = "3rem";
        card.style.marginRight = "5px";
        card.style.backgroundColor = "#2e3d52";
        card.style.border = "solid";
        card.style.width = "auto";
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        death.textContent = `Date of death: ${prophet.death}`;
        length.textContent = `President for ${prophet.length} years`;
        order.textContent = `President number ${prophet.order} of the church`;
        birthplace.textContent = `Born in ${prophet.birthplace}`;
        children.textContent = `Number of children: ${prophet.numofchildren}`;

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(birthplace);
        card.appendChild(order);
        card.appendChild(length);
        card.appendChild(death);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}
getProphetData();

