const sobre = document.getElementById("sobre");

if (sobre) {
  sobre.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "invitacion.html";
    }, 1000);
  });
}
