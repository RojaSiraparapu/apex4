document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent page reload
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
      } else {
        alert("Please fill out all fields before sending.");
      }
    });
  });
  