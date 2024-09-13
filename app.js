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

createDiv(16);

function handleHover() {
  this.style.backgroundColor = 'black';
}
