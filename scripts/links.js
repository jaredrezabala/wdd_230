const url = "https://jaredrezabala.github.io/wdd230/data/links.json";
const cards = document.querySelector(".card");

async function getLinksData() {
    const response = await fetch(url);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach(lesson => {
        const list = document.createElement("ul");
        const listItems = document.createElement("li");
        const linksContainer = document.createElement("span");

        lesson.links.forEach((link, index) => {
            const url = document.createElement("a");
            url.href = link.url;
            url.textContent = link.title;

            linksContainer.appendChild(url);

            if (index < lesson.links.length - 1) {
                const separator = document.createTextNode(" | ");
                linksContainer.appendChild(separator);
            }
        });

        listItems.textContent = `Week ${lesson.lesson}: `;
        listItems.appendChild(linksContainer);
        list.appendChild(listItems);

        cards.append(list);
    });
}

getLinksData();
