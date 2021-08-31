let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100)
console.log(randomNumber)

function checkGuess() {
    let guessedNum = parseInt(userInput.value)
    if (guessedNum > randomNumber) {
        gameResult.textContent = "Too High, Try Again..."
        gameResult.style.backgroundColor = 'red'
    } else if (guessedNum < randomNumber) {
        gameResult.textContent = "Too Low, Try Again..."
        gameResult.style.backgroundColor = 'red'
    } else if (guessedNum === randomNumber) {
        gameResult.textContent = "Hurraaayyyy......! YOU WON"
        gameResult.style.backgroundColor = 'green'
    } else {
        gameResult.textContent = "Enter correct no."
        gameResult.style.backgroundColor = 'blue'
    }
}
