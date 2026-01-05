document.addEventListener("DOMContentLoaded", () => {
  const sobre = document.getElementById("sobre");

  sobre.addEventListener("click", () => {
    // Animación antes de redirigir
    sobre.classList.add("animar-sobre");

    setTimeout(() => {
      window.location.href = "invitacion.html"; // redirige a la otra página
    }, 1500);
  });
});
