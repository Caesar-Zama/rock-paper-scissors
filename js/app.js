/*** Find comparing image solution ***/
// - maybe use regexp to compare image src's
const playerOptions = document.querySelectorAll('.playerOptions__option');


// Computer generates random rock, paper, scissor selection
function cpuSelection() {
  const choices = [
    {src: 'icons/rock.svg'},
    {src: 'icons/paper.svg'},
    {src: 'icons/scissor.svg'}
  ];

  const random = Math.floor(Math.random() * choices.length);
  const cpuChoice = document.querySelectorAll('img')[1];
  cpuChoice.setAttribute('src', choices[random].src);

  return cpuChoice.src;
}

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

function evaluateWinner(player, cpu) {
  if (player === cpu) {
    alert('It\'s a tie');
  } else if (player.indexOf('icons/rock.svg') !== -1) { // if player chose 'rock'
    if (cpu.indexOf('icons/scissor.svg') !== -1) { // and cpu chose 'scissor'
      alert('Player wins');
    } else { // but if cpu chose 'paper'
      alert('Computer wins');
    }
  } else if (player.indexOf('icons/paper.svg') !== -1) { // if player chose 'paper'
    if (cpu.indexOf('icons/rock.svg') !== -1) { // and cpu chose 'rock'
      alert('Player Wins');
    } else { // but if cpu chose 'scissor'
      alert('Computer Wins');
    }
  } else if (player.indexOf('icons/scissor.svg') !== -1) { // if player chose 'scissor'
    if (cpu.indexOf('icons/paper.svg') !== -1) { // and cpu chose 'paper'
      alert('Player wins');
    } else { // but if cpu chose 'rock'
      alert('Computer Wins');
    }
  }
}


// Add click event on each playerOptions
playerOptions.forEach((el) => {
  el.addEventListener('click', displayChoice);
});
