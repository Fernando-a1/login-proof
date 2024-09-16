const username = document.getElementById("username");
const password = document.getElementById("password");
const messageContainer = document.getElementById("message-container");
const message = document.getElementById("message");

function toast(input) {
  if (input === "username") {
    message.textContent = "Usuario incorrecto";
    username.style.borderColor = "red";
  } else if (input === "password") {
    message.textContent = "Contraseña incorrecta";
    password.style.borderColor = "red";
  } else {
    message.textContent = "Ingrese credenciales correctas";
    password.style.borderColor = "red";
    username.style.borderColor = "red";
  }

  messageContainer.classList.remove("animateOFF");
  messageContainer.classList.remove("hidden");
  messageContainer.classList.add("animateON");

  setTimeout(() => {
    messageContainer.classList.remove("animateON");
    messageContainer.classList.add("animateOFF");
    setTimeout(() => {
      messageContainer.classList.add("hidden");
    }, 300);
  }, 3000);
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (username.value === "usuario" && password.value === "contraseña") {
      window.location.href = "/views/home.html";
    } else if (username.value !== "usuario") {
      toast("username");
    } else if (password.value !== "contraseña") {
      toast("password");
    } else {
      toast("error");
    }
  });
