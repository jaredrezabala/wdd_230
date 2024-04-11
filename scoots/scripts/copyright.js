const copy = document.querySelector(".copyright");
const modify = document.querySelector(".last-modified");
const date = new Date();
copy.innerHTML = `&copy; ${date.getFullYear()}`;
let lastModified = document.lastModified;
modify.innerHTML = `Last Modified on: ${lastModified}`;
