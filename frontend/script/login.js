document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();  // Prevent form submission
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Example of basic validation
      if (email === "" || password === "") {
        alert("Please fill in both fields!");
      } else {
        alert("Login successful!");
        // You can add your login logic here (e.g., redirect or verify credentials)
        // For example: window.location.href = 'home.html'; 
      }
    });
  });
  