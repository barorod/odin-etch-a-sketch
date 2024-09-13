const boardSide = 600;
const divSize = 16;

const board = document.querySelector('#board');
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.sliderContainer');
const sliderValue = document.querySelector('.sliderContainer > p');

sliderValue.innerText = `${slider.value}`;

board.style.cssText = `width: ${boardSide}px; height: ${boardSide}px`;

function createDiv() {
  const cellTotal = parseInt(slider.value, 10);
  const cellSize = board.clientWidth / parseInt(slider.value, 10);

  for (let i = 0; i < cellTotal * cellTotal; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.style.cssText = `width: ${cellSize}px; height: ${cellSize}px`;

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
  let color = getRandomColor();
  this.style.backgroundColor = color;
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

slider.addEventListener('input', () => {
  sliderValue.innerText = slider.value;
  clearBoard();
  createDiv();
});

createDiv();
