function getComputerChoice () {
  let computerChoice = Math.floor(Math.random() * 3)
  if (computerChoice === 1) {
    return 'rock'
  } else if (computerChoice === 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function getHumanChoice () {
  do {
    let humanChoice = window.prompt('Choose rock, paper or scissors')
    humanChoice = humanChoice.toLowerCase()
    if (
      humanChoice.localeCompare('rock') === 0 ||
      humanChoice.localeCompare('paper') === 0 ||
      humanChoice.localeCompare('scissors') === 0
    ) {
      return humanChoice
    } else {
      window.alert('You should choose rock, paper or scissors')
    }
  } while (true)
}

function playGame () {
  let computerChoice = getComputerChoice()
  let humanChoice = getHumanChoice()
  if (humanChoice.localeCompare('rock') === 0) {
    if (computerChoice.localeCompare('rock') === 0) {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You tie')
    } else if (computerChoice.localeCompare('paper') === 0) {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You lost')
    } else {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You won')
    }
  } else if (humanChoice.localeCompare('paper') === 0) {
    if (computerChoice.localeCompare('rock') === 0) {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You won')
    } else if (computerChoice.localeCompare('paper') === 0) {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You tie')
    } else {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You lost')
    }
  } else {
    if (computerChoice.localeCompare('rock') === 0) {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You lost')
    } else if (computerChoice.localeCompare('paper') === 0) {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You won')
    } else {
      window.alert('You: ' + humanChoice + ' Computer: ' + computerChoice + ' You tie')
    }
  }
}

do {
  playGame()
} while (true)
