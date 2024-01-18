var year = new Date().getFullYear();
var p1 = document.getElementById("copyright");
p1.textContent = "© " + year + " Jared Rezabala - Ecuador"
var lastModified = document.getElementById("lastModified");
var lastModifiedDate = document.lastModified;
lastModified.innerHTML = "Last Modified: " + lastModifiedDate;