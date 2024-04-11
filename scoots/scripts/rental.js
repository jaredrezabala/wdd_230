// RENTAL PAGE INFO
const url = "https://jaredrezabala.github.io/wdd230/scoots/data/rentals.json";
const cards = document.querySelector(".scooters-info");

async function getJsonData() {
    const response = await fetch(url);
    const data = await response.json();
    displayData(data.scoots);
}

const displayData = (scoots) => {
    scoots.forEach(scoot => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const image = document.createElement("img");
        const people = document.createElement("p");
        const table = document.createElement("table");

        // Create table header rows for Reservation
        const reservationHeader1 = document.createElement("tr");
        const reservationHeader2 = document.createElement("tr");
        const reservationHeaderCell = document.createElement("th");
        reservationHeaderCell.textContent = "Reservation";
        reservationHeaderCell.setAttribute('colspan', '2');
        reservationHeaderCell.style.textAlign = "center";
        reservationHeaderCell.style.backgroundImage = "linear-gradient(#a01313, #c82828)";
        reservationHeaderCell.style.color = "white";
        const reservationHeaderCell1 = document.createElement("th");
        const reservationHeaderCell2 = document.createElement("th");
        reservationHeaderCell1.textContent = "Half-day";
        reservationHeaderCell1.style.textAlign = "center";
        reservationHeaderCell2.textContent = "Full-day";
        reservationHeaderCell2.style.textAlign = "center";
        reservationHeader1.appendChild(reservationHeaderCell);
        reservationHeader2.appendChild(reservationHeaderCell1);
        reservationHeader2.appendChild(reservationHeaderCell2);

        // Create table data row for Reservation
        const dataReservation = document.createElement("tr");
        const dataCell1 = document.createElement("td");
        const dataCell2 = document.createElement("td");
        dataCell1.textContent = scoot.reservation[0]["half-day"];
        dataCell1.style.textAlign = "center";
        dataCell2.textContent = scoot.reservation[0]["full-day"];
        dataCell2.style.textAlign = "center";
        dataReservation.appendChild(dataCell1);
        dataReservation.appendChild(dataCell2);

        // Create table header rows for Walk-In
        const walkInHeader1 = document.createElement("tr");
        const walkInHeader2 = document.createElement("tr");
        const walkInHeaderCell = document.createElement("th");
        walkInHeaderCell.textContent = "Walk-In";
        walkInHeaderCell.setAttribute('colspan', '2');
        walkInHeaderCell.style.textAlign = "center";
        walkInHeaderCell.style.backgroundImage = "linear-gradient(#a01313, #c82828)";
        walkInHeaderCell.style.color = "white";
        const walkInHeaderCell1 = document.createElement("th");
        const walkInHeaderCell2 = document.createElement("th");
        walkInHeaderCell1.textContent = "Half-day";
        walkInHeaderCell1.style.textAlign = "center";
        walkInHeaderCell2.textContent = "Full-day";
        walkInHeaderCell2.style.textAlign = "center";
        walkInHeader1.appendChild(walkInHeaderCell);
        walkInHeader2.appendChild(walkInHeaderCell1);
        walkInHeader2.appendChild(walkInHeaderCell2);

        // Create table data row for Walk-In
        const dataWalkIn = document.createElement("tr");
        const dataWalkInCell1 = document.createElement("td");
        const dataWalkInCell2 = document.createElement("td");
        dataWalkInCell1.textContent = scoot.walkin[0]["half-day"];
        dataWalkInCell1.style.textAlign = "center";
        dataWalkInCell2.textContent = scoot.walkin[0]["full-day"];
        dataWalkInCell2.style.textAlign = "center";
        dataWalkIn.appendChild(dataWalkInCell1);
        dataWalkIn.appendChild(dataWalkInCell2);


        table.style.border = "solid";
        table.style.borderCollapse = "collapse";
        table.style.margin = "0 auto";

        [reservationHeaderCell, reservationHeaderCell1, reservationHeaderCell2, dataCell1, dataCell2, walkInHeaderCell, walkInHeaderCell1, walkInHeaderCell2, dataWalkInCell1, dataWalkInCell2].forEach(cell => {
            cell.style.padding = "1rem";
        });

        [reservationHeaderCell, reservationHeaderCell1, reservationHeaderCell2, walkInHeaderCell, walkInHeaderCell1, walkInHeaderCell2].forEach(cell => {
            cell.style.border = "1px solid black";
        });

        [dataCell1, dataCell2, dataWalkInCell1, dataWalkInCell2].forEach(cell => {
            cell.style.border = "1px solid black";
        });

        table.appendChild(reservationHeader1);
        table.appendChild(reservationHeader2);
        table.appendChild(dataReservation);
        table.appendChild(walkInHeader1);
        table.appendChild(walkInHeader2);
        table.appendChild(dataWalkIn);


        people.textContent = `Max. Persons: ${scoot.persons}`;
        people.style.textAlign = "center";
        people.style.fontSize = "1.5rem";
        people.style.padding = "1rem";

        people.style.margin = "0 auto";
        const horizontal = document.createElement("hr");
        horizontal.style.width = "70px";
        horizontal.style.height = "15px";
        horizontal.style.backgroundColor = "#a01313";
        horizontal.style.margin = "2rem auto";
        name.textContent = scoot.model;
        image.setAttribute('src', scoot.img);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('alt', scoot.model);
        card.appendChild(horizontal);
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(people);
        card.appendChild(table);
        cards.appendChild(card);
    });
}
getJsonData();