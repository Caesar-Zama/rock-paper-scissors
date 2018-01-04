const playerOptions = document.querySelectorAll('.playerOptions__option');

// Computer generates random rock, paper, scissor selection
function cpuSelection() {
  const choices = [
    {src: 'icons/whiterock.svg'},
    {src: 'icons/whitepaperhand.svg'},
    {src: 'icons/whitescissor.svg'}
  ];

  const random = Math.floor(Math.random() * choices.length);
  const img = document.querySelectorAll('img')[1];
  img.setAttribute('src', choices[random].src);
}

function displayChoice() {
  const output = document.querySelector('.gameOutput');
  const img = output.querySelectorAll('img');
  const playerChoice = img[0];
  const cpuChoice = img[1];
// Check user selection and display approriate image
  if (this.id === 'rock') {
    const you = playerChoice.setAttribute('src', 'icons/whiterock.svg');
    const cpu = cpuSelection();
  } else if (this.id === 'paper') {
    const you = playerChoice.setAttribute('src', 'icons/whitepaperhand.svg');
    const cpu = cpuSelection();
  } else {
    const you = playerChoice.setAttribute('src', 'icons/whitescissor.svg');
    const cpu = cpuSelection();
  }

  output.style.display = 'block';
}

// function game(value) {
//   console.log(value);
// }
// game();

// I could return the players id value(this.id) & Computer random number and compare those to determine a winner




// Add click event on each playerOptions
playerOptions.forEach((el) => {
  el.addEventListener('click', displayChoice);
});
