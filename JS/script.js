document.addEventListener("DOMContentLoaded", () => {
  const sobre = document.getElementById("sobre");

  if (sobre) {
    sobre.addEventListener("click", () => {
      // Activa animación
      sobre.classList.add("animar-sobre");

      // Después de 1.5 segundos redirige
      setTimeout(() => {
        window.location.href = "invitacion.html";
      }, 1500);
    });
  }
});
