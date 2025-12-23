const run = document.getElementById("cutucar")
const mensagem = document.getElementById("mensagem")
let pontos = 0

run.addEventListener("click", () => {
    pontos += 10
    mensagem.innerText = "Pontos:" + pontos
})