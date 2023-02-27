let modal = document.querySelector(".modal")
let playing = document.querySelector(".playing")
let result = document.querySelector("#result")
let house = document.querySelector("#house")
let chosen = document.querySelector(".chosen")
let ponts = document.querySelector(".pt")
let options= ['scissor', 'rock', 'paper']
let score = 0
let ButtonRules = document.querySelector(".rules")

// abre modal de regras
function rules() {
    modal.style.display = "flex"
}

// fecha modal de regras
function closeRules() {
    modal.style.display = "none"
}

// executa a logica do joquenpo
function play(esc) {
    ButtonRules.style.display= "none"
    if(window.innerWidth > 700){
        playing.style.display = "flex"
    }else{
        playing.style.display = "grid"
    }
    let you = document.querySelector("#you")
    let escolha = options[Math.floor(Math.random() * options.length)]
 

    // remove classes adicionadas em jogos anteriores
    you.classList.remove("win")
    you.classList.remove("scissor")
    you.classList.remove("paper")
    you.classList.remove("rock")
    house.classList.remove("win")
    house.classList.remove("scissor")
    house.classList.remove("paper")
    house.classList.remove("rock")
    chosen.style.display = "none"

    // mostra a escolha do jogador
    if (esc == 'scissor') {
        you.setAttribute("src", "images/icon-scissors.svg")
        you.classList.add("scissor")
    } else if (esc == 'paper') {
        you.setAttribute("src", "images/icon-paper.svg")
        you.classList.add("paper")
    } else {
        you.setAttribute("src", "images/icon-rock.svg")
        you.classList.add("rock")
    }

    // mostra escolha do adversario
    if (escolha == 'scissor') {
        house.setAttribute("src", "images/icon-scissors.svg")
        house.classList.add("scissor")
    } else if (escolha == 'paper') {
        house.setAttribute("src", "images/icon-paper.svg")
        house.classList.add("paper")
    } else {
        house.setAttribute("src", "images/icon-rock.svg")
        house.classList.add("rock")
    }

    // calcula ganhador, vencedor e empate
    if ((esc === 'scissor' && escolha === 'paper') ||
        (esc === 'paper' && escolha === 'rock') ||
        (esc === 'rock' && escolha === 'scissor')) {
        you.classList.add("win")
        score += 1
        ponts.innerHTML = score
        result.innerHTML = `
        <h1>YOU WIN</h1>
        <button onclick="playAgain()">PLAY AGAIN</button>`
    } else if ((esc === 'scissor' && escolha === 'rock') ||
        (esc === 'paper' && escolha === 'scissor') ||
        (esc === 'rock' && escolha === 'paper')) {
        house.classList.add("win")
        result.innerHTML = `
        <h1>YOU LOSE</h1>
        <button onclick="playAgain()">PLAY AGAIN</button>`
    } else if ((esc === 'scissor' && escolha === 'scissor') ||
        (esc === 'paper' && escolha === 'paper') ||
        (esc === 'rock' && escolha === 'rock')) {
        result.innerHTML = `
        <h1>DRAW</h1>
        <button onclick="playAgain()">PLAY AGAIN</button>`
    } else {
        result.innerHTML = "ERRO! <button onclick='playAgain()'>PLAY AGAIN</button>"
    }

}


// inicia um jogo novo
function playAgain() {
    chosen.style.display = "flex"
    playing.style.display = "none"
    ButtonRules.style.display= "block"
}