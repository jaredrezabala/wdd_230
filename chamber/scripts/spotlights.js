const url = "https://jaredrezabala.github.io/wdd230/chamber/data/members.json";
const section = document.querySelector('#spotlights');

async function getSpotlight() {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlights(data.companies);
}

const displaySpotlights = (companies) => {
    const goldSilverCompanies = companies.filter(company => company.membership === "Gold Membership" || company.membership === "Silver Membership");
    const selectCompanies = getRandomCompanies(goldSilverCompanies, 2, 3);
    selectCompanies.forEach(company => {
        const card = document.createElement("section");
        const companyName = document.createElement("p");
        const address = document.createElement("p");
        const phoneNumber = document.createElement("p");
        const companyURL = document.createElement("a");
        const companyLogo = document.createElement("img");
        const membershipLevel = document.createElement("p");

        card.style.border = "solid"
        companyName.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        phoneNumber.textContent = `${company.phone}`;
        companyURL.href = company.url;
        companyURL.textContent = 'Website';
        companyLogo.setAttribute('src', company.img);
        companyLogo.setAttribute('alt', ` Logo of ${company.name}`);
        companyLogo.setAttribute('loading', 'lazy');
        companyLogo.setAttribute('width', '20');
        companyLogo.setAttribute('height', '30');
        membershipLevel.textContent = `${company.membership}`;

        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(companyURL);
        card.appendChild(membershipLevel);
        section.appendChild(card);


    });

    function getRandomCompanies(companies, min, max) {
        const numCompanies = Math.floor(Math.random() * (max - min + 1)) + min;
        const shuffled = companies.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numCompanies);
    }
}


getSpotlight();
