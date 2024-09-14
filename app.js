const boardSide = 600;
const divSize = 16;

const board = document.querySelector('#board');
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.sliderContainer');
const sliderValue = document.querySelector('#sliderVal');
const select = document.querySelector('select');
const inputs = document.querySelectorAll('.custom > input');

sliderValue.innerText = `${slider.value}`;
board.style.cssText = `width: ${boardSide}px; height: ${boardSide}px`;
let color = 'black';

function createDiv() {
  const cellTotal = parseInt(slider.value, 10);
  const cellSize = board.clientWidth / cellTotal;

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
  }
}

function handleHover() {
  this.style.backgroundColor = getColor();
}

function getColor() {
  if (select.value === 'random') {
    return getRandomColor();
  } else if (select.value === 'black') {
    return 'black';
  } else if (select.value === 'custom') {
    const r = inputs[0].value || 0;
    const g = inputs[1].value || 0;
    const b = inputs[2].value || 0;
    return `rgb(${r}, ${g}, ${b})`;
  }
  return 'black';
}

select.addEventListener('change', () => {
  inputs.forEach((input) => {
    input.disabled = select.value !== 'custom';
  });
});

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
