// Basic form validation script
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});

// Smooth scroll to sections
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    });
});
