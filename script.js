const run = document.getElementById("click")
let pontos = 0
let confirmadd5 = false
let confirmadd10 = false

function add5() {
        //possui
        if (confirmadd5 === true) {
            alert("Você já possui essa melhoria!")
        } 
        //downgrade
        else if (confirmadd5 === "trocado") {
            const down = confirm("Você possui uma melhoria mais avançada. Deseja trocar mesmo assim?")
            if (down === true) {
                confirmadd5 = true
                confirmadd10 = false
                pontos -= 50
                document.getElementById("visualizador").innerText = "Pontos: " + pontos
            }
        }
        //compra
        else {
            if (pontos >= 50) {
            confirmadd5 = true
            pontos -= 50
            document.getElementById("visualizador").innerText = "Pontos: " + pontos
        }

        //falta
        else alert(`Você precisa pegar mais ${50 - pontos} pontos`)
        }
    }

    function add10() {
        //possui
        if (confirmadd10 === true) {
            alert("Você já possui essa melhoria!")
        }

        //compra
        else if (pontos >= 500) {
            confirmadd10 = true
            confirmadd5 = "trocado"
            pontos -= 500
            document.getElementById("visualizador").innerText = "Pontos: " + pontos
        }

        //falta
        else {
            alert(`Você precisa pegar mais ${500 - pontos} pontos`)
        }
    }

run.addEventListener("click", () => {
    if (confirmadd5 === true) {
        pontos += 5
    }
    
    else if (confirmadd10 === true) {
        pontos += 10
    }

    else {
        pontos += 1
    }

    document.getElementById("visualizador").innerText = "Pontos: " + pontos
})