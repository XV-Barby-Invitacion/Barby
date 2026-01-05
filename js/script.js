/* const sobre = document.getElementById("sobre");

if (sobre) {
  sobre.addEventListener("click", () => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = "invitacion.html";
    }, 600);
  });
}
 */

/* const sobre = document.getElementById("sobre");
const transition = document.querySelector(".transition-layer");

if (sobre && transition) {
  sobre.addEventListener("click", () => {
    transition.classList.add("active");

    setTimeout(() => {
      window.location.href = "invitacion.html";
    }, 400);
  });
}
 */


const sobre = document.getElementById("sobre");

if (sobre) {
  sobre.addEventListener("click", () => {
    // activar telón
    document.body.classList.add("transitioning");

    // cambiar página casi inmediato
    setTimeout(() => {
      window.location.href = "invitacion.html";
    }, 150);
  });
}
