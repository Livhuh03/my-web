
document.getElementById("orderBtn").addEventListener("click", () => {
    window.location.href = "Contact.html";
});



function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("status");

    if (name === "" || email === "" || message === "") {
        status.style.color = "red";
        status.textContent = "All fields are required.";
        return false;
    }

    status.style.color = "green";
    status.textContent = "Message sent successfully!";
    return true;
}