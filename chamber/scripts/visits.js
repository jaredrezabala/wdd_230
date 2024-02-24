const numberOfVisits = document.querySelector('.visits');
const date = new Date();
let visits = Number(window.localStorage.getItem("visits-ls")) || 0;


if (visits !== 0) {
    numberOfVisits.textContent = visits;
} else {
    numberOfVisits.textContent = 'Welcome! Let us know if you have any questions.';
}
visits++;

localStorage.setItem("visits-ls", visits);

if (date.getHours() < 24 || date.getHours() > 1) {
    numberOfVisits.textContent = 'Back so soon! Awesome!';
} else {
    numberOfVisits.textContent = `You last visited ${date.getDay} days ago`;
}
