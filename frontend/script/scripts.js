document.addEventListener("DOMContentLoaded", () => {
    // Example of adding a simple click event to the "Sign up" button
    const signUpBtn = document.querySelector('.nav-links ul li a[href="#"]');
    signUpBtn.addEventListener('click', () => {
      alert('Sign up functionality is coming soon!');
    });
  });
  