const pass1 = document.querySelector("#password");
const pass2 = document.querySelector("#password2");
const rangevalue = document.getElementById("range-value");
const range = document.getElementById("rating");


// **********Password Checker***********
pass2.addEventListener("focusout", checkSame);
function checkSame() {
    if (pass1.value !== pass2.value) {
        pass2.value = "";
        pass2.focus();
    }
}

// **********Email Checker***********
document.addEventListener("DOMContentLoaded", function () {
    function handleSubmit(event) {
        event.preventDefault();
        let formt = event.target;
        let formData = new FormData(formt);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }
    }
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
})

// **********Range***********
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}