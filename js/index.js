document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passwordfield = document.getElementById("user-password");
  const password = passwordfield.value;
  if (email === "jahid@gmail.com" && password === "jahid") {
    window.location.href = "./js/bank.html";
  } else {
    alert("passwor vule geso, toke ami tejjo korlam");
  }
});
