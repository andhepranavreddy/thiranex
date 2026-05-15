// Welcome Message in Console
console.log("Welcome to Pranav Portfolio Website");

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const message =
                document.getElementById("message").value.trim();

            // Validation
            if (name === "" || email === "" || message === "") {
                alert("Please fill all fields.");
                return;
            }

            // Email Validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email.");
                return;
            }

            // Success Message
            alert("Message sent successfully!");

            // Reset Form
            contactForm.reset();
        });
    }
});