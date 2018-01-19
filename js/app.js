const playerOptions = document.querySelectorAll('.playerOptions__option');

// Initial Game Scores
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
  game(playerChoice.src, cpuSelection());
}

// Determines winner of match
function game(player, cpu) {
  const playerScoreBox = document.getElementById('playerScore');
  const cpuScoreBox = document.getElementById('cpuScore');
  const happyface = 'icons/happyface.svg';
  const sadface = 'icons/sadface.svg';
  // Stops game when winning score is reached
  function gameOver(score,target,text) {
    if (score !== 2) {
      target.textContent = text + ' ' + score;
    } else {
      target.textContent = text + ' ' + score;
      // could tell who won by checking the target.id value and use that to display a 'You Win or You Lose' msg based off value
      if (target.id === 'playerScore') {
        gameOutcome('You Win!', happyface);
      } else {
        gameOutcome('You Suck!', sadface);
      }
    }
  }
  // Evaluate who won match
  if (player === cpu) {
    gameOver(playerScore, playerScoreBox, 'You:');
    gameOver(cpuScore, cpuScoreBox, 'Cpu:');
  } else if (player.indexOf('icons/rock.svg') !== -1) { // if player chose 'rock'
    if (cpu.indexOf('icons/scissor.svg') !== -1) { // and cpu chose 'scissor'
      playerScore++;
      gameOver(playerScore, playerScoreBox, 'You:');
      gameOver(cpuScore, cpuScoreBox, 'Cpu:');
    } else { // but if cpu chose 'paper'
      cpuScore++;
      gameOver(cpuScore, cpuScoreBox, 'Cpu:');
      gameOver(playerScore, playerScoreBox, 'You:');
    }
  } else if (player.indexOf('icons/paper.svg') !== -1) { // if player chose 'paper'
    if (cpu.indexOf('icons/rock.svg') !== -1) { // and cpu chose 'rock'
    playerScore++;
    gameOver(playerScore, playerScoreBox, 'You:');
    gameOver(cpuScore, cpuScoreBox, 'Cpu:');
    } else { // but if cpu chose 'scissor'
    cpuScore++;
    gameOver(cpuScore, cpuScoreBox, 'Cpu:');
    gameOver(playerScore, playerScoreBox, 'You:');
    }
  } else if (player.indexOf('icons/scissor.svg') !== -1) { // if player chose 'scissor'
    if (cpu.indexOf('icons/paper.svg') !== -1) { // and cpu chose 'paper'
    playerScore++;
    gameOver(playerScore, playerScoreBox, 'You:');
    gameOver(cpuScore, cpuScoreBox, 'Cpu:');
    } else { // but if cpu chose 'rock'
    cpuScore++;
    gameOver(cpuScore, cpuScoreBox, 'Cpu:');
    gameOver(playerScore, playerScoreBox, 'You:');
    }
  }
}

// gameOutcome(): takes two parameters to
// 1st: is a reference for displaying 'You Win or Lose text'
// 2nd: is a reference for displaying Proper icon based on win/lose result
function gameOutcome(msg,icon) {
  const gameOutput = document.querySelector('.gameOutput');
  const selection = gameOutput.nextElementSibling;
  const arr = [gameOutput, selection];
  const container = document.querySelector('.container');
  // Grab's Event Object & Applies reset functionality to 'Play Again' btn
  function getEventTarget(e) {
    if (e.target.tagName.toLowerCase() === 'button') {
      reset();
    }
  }
  // Removes player options & game output in one go
  for (var i = 0; i < arr.length; i++) {
    arr[i].style.display = 'none';
  }
  // Game ending generated HTML
  const generatedDiv = document.createElement('div');
  generatedDiv.innerHTML = `<h3> ${msg} </h3>
                            <img src="${icon}">
                            <button>Play Again?</button>`;
  container.append(generatedDiv);
  // Use 'Event Delegation' to place an event listener on button element
  container.addEventListener('click', getEventTarget);
}



// Figure out what the hell 'Event Delegation' is and how I can apply it to add an event listener to dynanmically generated button
function reset() {
  // Reset functionality code
}




// Add click event on each playerOptions
playerOptions.forEach((el) => {
  el.addEventListener('click', displayChoice);
});
