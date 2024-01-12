var year = new Date().getFullYear();
var currentDate = new Date();
var p1 = document.getElementById("copyright");
p1.textContent = "© " + year + " Jared Rezabala - Ecuador"
var p2 = document.getElementById("lastModified");
p2.textContent = "Last Modification: " + currentDate;