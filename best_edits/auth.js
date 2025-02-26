document.addEventListener("DOMContentLoaded", function () {
    const passwordContainer = document.getElementById("password-container");
    const mainContent = document.getElementById("main-content");
  
    // Predefined password (this should be hashed for security)
    const correctPassword = "femboy123"; // Change this!
  
    // Check if the user is already authenticated
    if (localStorage.getItem("authenticated") === "true") {
      passwordContainer.style.display = "none";
      mainContent.style.display = "block";
    }
  });
  
  function checkPassword() {
    const input = document.getElementById("password-input").value;
    const errorMessage = document.getElementById("error-message");
  
    if (input === "femboy123") { // Change to match `correctPassword`
      localStorage.setItem("authenticated", "true"); // Save login state
      document.getElementById("password-container").style.display = "none";
      document.getElementById("main-content").style.display = "block";
    } else {
      errorMessage.innerText = "Incorrect password!";
    }
  }
  