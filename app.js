const boardSide = 600;
const divSize = 16;

const board = document.querySelector('#board');
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.sliderContainer');
const sliderValue = document.querySelector('.sliderContainer > p');

sliderValue.innerText = `${slider.value}`;

board.style.cssText = `width: ${boardSide}px; height: ${boardSide}px`;

function createDiv(divSize) {
  const sides = divSize * divSize;
  const cell = boardSide / divSize;

  for (let i = 0; i < sides; i++) {
    const div = document.createElement('div');
    div.style.cssText = `width: ${cell}px; height: ${cell}px`;

    board.appendChild(div);

    div.addEventListener('mouseover', handleHover);
  }
}

function clearBoard() {
  if (board.firstChild) {
    const divs = document.querySelectorAll('#board > div');
    divs.forEach((div) => div.remove());
  } else {
    return;
  }
}

function handleHover() {
  this.style.backgroundColor = 'black';
}

if (board.firstChild === null) {
  createDiv(16);
}

slider.addEventListener('input', () => {
  sliderValue.innerText = slider.value;
  clearBoard();
  createDiv(slider.value);
});
