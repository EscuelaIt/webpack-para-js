import { validateEmail } from "./libs/validate-email.js";
import { formatDate } from "./libs/dates.js";

document.addEventListener("DOMContentLoaded", function () {
  // Ejemplo de validación de email
  document.getElementById("email").addEventListener("input", function () {
    let msg = validateEmail(this.value)
      ? "El email es válido SI SI"
      : "Eso no es un email válido";
    document.getElementById("msg").innerText = msg;
  });

  // ejemplo de formateo de fecha
  document.querySelector(".btn").addEventListener("click", function () {
    let dia = document.getElementById("dia").value;
    let mes = parseInt(document.getElementById("mes").value) - 1;
    let anyo = document.getElementById("anyo").value;

    let fecha = formatData(anyo, mes, dia);

    document.getElementById("date").innerText = fecha;
  });
});
