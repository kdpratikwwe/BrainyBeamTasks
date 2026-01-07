function validateForm() {
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;

  if (username.length === 0) {
    alert("Username cannot be empty");
    return false;
  }

  if (email.length === 0) {
    alert("Email cannot be empty");
    return false;
  }

  alert("Form submitted successfully");
  return true;
}
