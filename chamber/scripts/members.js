const url = "https://jaredrezabala.github.io/wdd230/chamber/data/members.json";
// const cards = document.querySelector(".companies");
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}


async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.companies);
    displayMemberData(data.companies);
}

const displayMemberData = (companies) => {
    companies.forEach(company => {
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
        // companyURL.textContent = `${company.name}`;
        companyURL.textContent = 'Website';
        companyLogo.setAttribute('src', company.img);
        companyLogo.setAttribute('alt', ` Logo of ${company.name}`);
        companyLogo.setAttribute('loading', 'lazy');
        companyLogo.setAttribute('width', '30');
        companyLogo.setAttribute('height', '30');
        membershipLevel.textContent = `${company.membership}`;

        card.appendChild(companyName);
        card.appendChild(companyLogo);
        card.appendChild(companyURL);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(membershipLevel);
        display.appendChild(card);


    });
}

getMemberData();