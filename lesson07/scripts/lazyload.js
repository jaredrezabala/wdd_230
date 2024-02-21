var year = new Date().getFullYear();
var p1 = document.getElementById("copyright");
p1.textContent = "© " + year + " Jared Rezabala - Ecuador"
let lastModified = document.lastModified;
let lastDate = document.getElementById("lastModified");
lastDate.innerHTML = "Last Modified on: " + lastModified;