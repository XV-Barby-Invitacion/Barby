document.addEventListener("DOMContentLoaded", () => {
  const sobre = document.getElementById("sobre");

  if (sobre) {
    sobre.addEventListener("click", () => {
      sobre.classList.add("animar-sobre");

      setTimeout(() => {
        window.location.href = "./invitacion.html";
      }, 1500);
    });
  } else {
    console.error("No se encontró el elemento con id='sobre'");
  }
});
