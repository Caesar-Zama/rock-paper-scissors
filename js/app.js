const playerOptions = document.querySelectorAll('.playerOptions__option'); // rock,paper,scissor btn

const playerScoreBox = document.getElementById('playerScore');
const cpuScoreBox = document.getElementById('cpuScore');

let gameState = true;
let playerScore = 0;
let cpuScore = 0;


// Computer generates random rock, paper, scissor selection
function cpuSelection() {
  const cpuChoice = document.querySelectorAll('img')[1];
  const choices = [
    {src: 'icons/rock.svg'},
    {src: 'icons/paper.svg'},
    {src: 'icons/scissor.svg'}
  ];

  const random = Math.floor(Math.random() * choices.length);
  cpuChoice.setAttribute('src', choices[random].src);

  return cpuChoice.src;
}

// Display's player's choice
function displayChoice() {
  const output = document.querySelector('.gameOutput');
  const playerChoice = output.querySelectorAll('img')[0];

// Check user selection and display approriate image
  if (this.id === 'rock') {
    playerChoice.setAttribute('src', 'icons/rock.svg');
    cpuSelection();
  } else if (this.id === 'paper') {
    playerChoice.setAttribute('src', 'icons/paper.svg');
    cpuSelection();
  } else {
    playerChoice.setAttribute('src', 'icons/scissor.svg');
    cpuSelection();
  }

  output.style.display = 'block';
  evaluateWinner(playerChoice.src, cpuSelection());
}

// Determines winner of match
function evaluateWinner(player, cpu) {
  if (player === cpu) {
    // playerScoreBox.textContent = 'You: ' + playerScore;
    // cpuScoreBox.textContent = 'Cpu: ' + cpuScore;
    addScore(playerScore, playerScoreBox, 'You: ');
    addScore(cpuScore, cpuScoreBox, 'Cpu: ');
  } else if (player.indexOf('icons/rock.svg') !== -1) { // if player chose 'rock'
    if (cpu.indexOf('icons/scissor.svg') !== -1) { // and cpu chose 'scissor'
      playerScore++;
      addScore(playerScore, playerScoreBox, 'You: ');
      addScore(cpuScore, cpuScoreBox, 'Cpu: ');
    } else { // but if cpu chose 'paper'
      cpuScore++;
      addScore(cpuScore, cpuScoreBox, 'Cpu: ');
      addScore(playerScore, playerScoreBox, 'You: ');
    }
  } else if (player.indexOf('icons/paper.svg') !== -1) { // if player chose 'paper'
    if (cpu.indexOf('icons/rock.svg') !== -1) { // and cpu chose 'rock'
    playerScore++;
    addScore(playerScore, playerScoreBox, 'You: ');
    addScore(cpuScore, cpuScoreBox, 'Cpu: ');
    } else { // but if cpu chose 'scissor'
    cpuScore++;
    addScore(cpuScore, cpuScoreBox, 'Cpu: ');
    addScore(playerScore, playerScoreBox, 'You: ');
    }
  } else if (player.indexOf('icons/scissor.svg') !== -1) { // if player chose 'scissor'
    if (cpu.indexOf('icons/paper.svg') !== -1) { // and cpu chose 'paper'
    playerScore++;
    addScore(playerScore, playerScoreBox, 'You: ');
    addScore(cpuScore, cpuScoreBox, 'Cpu: ');
    } else { // but if cpu chose 'rock'
    cpuScore++;
    addScore(cpuScore, cpuScoreBox, 'Cpu: ');
    addScore(playerScore, playerScoreBox, 'You: ');
    }
  }
}

function addScore(score,target,text) {
  target.textContent = text + score;
}








// Add click event on each playerOptions
playerOptions.forEach((el) => {
  el.addEventListener('click', displayChoice);
});
