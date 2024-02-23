const numberOfVisits = document.querySelector('.visits');
let visits = Number(window.localStorage.getItem("visits-ls")) || 0;

if (visits !== 0) {
    numberOfVisits.textContent = visits;
} else {
    numberOfVisits.textContent = 'You are our first visitor! 🎉';
}

visits++;

localStorage.setItem("visits-ls", visits);