document.getElementById("emailForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Evita o envio do formulário para verificação

  const emailField = document.getElementById("email");
  const message = document.getElementById("message");

  // Expressão regular para validar e-mail
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(emailField.value)) {
    message.textContent = "E-mail válido!";
    message.style.color = "green";
  } else {
    message.textContent = "Por favor, insira um e-mail válido no formato exemplo@dominio.com";
    message.style.color = "red";
  }
});