console.log("JS carregado!");

const boxes = document.querySelectorAll(".box");
const esconderBotao = document.getElementById("esconderTodas");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const mensagem = box.nextElementSibling;
    mensagem.classList.toggle("hidden");
  });
});

esconderBotao.addEventListener("click", () => {
  const todasAsMensagens = document.querySelectorAll(".mensagem");

  todasAsMensagens.forEach((mensagem) => {
    mensagem.classList.add("hidden");
  });
});
  
