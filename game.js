function getComputerChoice () {
  const computerOptions = ['rock', 'paper', 'scissors']
  return computerOptions[Math.floor(Math.random() * 3)]
}

function match (playerChoice, computerChoice, playerScore, computerScore) {
  playerChoice = playerChoice.toLowerCase()
  const message = document.querySelector('#message')

  console.log('Player ' + playerChoice)
  console.log('Computer ' + computerChoice)

  if (playerChoice === computerChoice) {
    message.textContent = 'Tie'
  } else if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      message.textContent = 'Computer Won'
    } else {
      message.textContent = 'Player Won'
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      message.textContent = 'Computer Won'
    } else {
      message.textContent = 'Player Won'
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      message.textContent = 'Computer Won'
    } else {
      message.textContent = 'Player Won'
    }
  }

  let minivar = message.textContent
  console.log('MiniVar ' + minivar)

  if (message.textContent === 'Computer Won') {
    computerScore.textContent = parseInt(computerScore.textContent) + 1
  } else if (message.textContent === 'Player Won') {
    playerScore.textContent = parseInt(playerScore.textContent) + 1
  }

  if (computerScore.textContent === '5') {
    message.textContent = 'Computer Won the Game. Try Again!'
    computerScore.textContent = '0'
    playerScore.textContent = '0'
  } else if (playerScore.textContent === '5') {
    message.textContent = 'Player Won the Game. Play Again!'
    computerScore.textContent = '0'
    playerScore.textContent = '0'
  }
}

function playGame () {
  const playerScore = document.querySelector('#playerScore')
  const computerScore = document.querySelector('#computerScore')

  playerScore.textContent = '0'
  computerScore.textContent = '0'
  console.log('Game started')

  const buttons = document.querySelectorAll('.btnChoice')

  console.log(buttons)
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      match(button.textContent, getComputerChoice(), playerScore, computerScore)
    })
  })
}
playGame()
