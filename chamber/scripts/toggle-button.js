const toggleButton = document.querySelector('.switch input');
const body = document.querySelector('body');
const nav = document.querySelectorAll('nav a');
const h1 = document.querySelector('h1');
toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        body.style.background = "#000";
        body.style.color = "#000";
        h1.style.color = "#fff";
        nav.forEach(link => {
            link.style.color = "#fff";
        });

    }
    else {
        body.style.background = "#fff";
        body.style.color = "#000";
        nav.forEach(link => {
            link.style.color = "black";
        });
    }

});