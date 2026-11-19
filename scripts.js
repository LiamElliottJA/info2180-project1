/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter form");
    var emailInput = document.getElementById("email");
    var message = document.querySelector(".message");

    if (!form || !emailInput || !message) {
        return;
    }

    // Let our own message handle validation instead of the browser's pop-up
    form.noValidate = true;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var email = emailInput.value.trim();

        if (email === "" || !emailPattern.test(email)) {
            message.textContent = "Please enter a valid email address.";
            return;
        }

        message.textContent =
            "Thank you! Your email address " + email + " has been added to our mailing list!";
        emailInput.value = "";
    });
});
