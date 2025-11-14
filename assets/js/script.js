console.log("JS carregado!");

const box = document.getElementById("meuBox");
const mensagem = document.getElementById("mensagem");

box.addEventListener("click", () => {
  mensagem.classList.toggle("hidden");
});
