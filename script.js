const audio = document.getElementById("bg-audio");

document.addEventListener("click", () => {
  audio.play();
}, { once: true });

const enterScreen = document.getElementById("enter-screen");

enterScreen.addEventListener("click", () => {
  enterScreen.style.display = "none";
});

function copyEmail() {
  const email = "vinitkachare2009@gmail.com";
  const popup = document.getElementById("copy-popup");

  navigator.clipboard.writeText(email).then(() => {
    popup.classList.add("show");

    setTimeout(() => {
      popup.classList.remove("show");
    }, 2000);
  });
}
