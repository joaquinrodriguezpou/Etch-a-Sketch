const container = document.querySelector('.container');
const gridSize = document.querySelector('gridSize')
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
let value = 16;

for (let i = 0; i < (value**2); i++) {
   const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

const squares = Array.from(document.querySelectorAll('.square'));
function getRandomNumber(){
    return Math.floor(Math.random() * 250);
}

squares.forEach(div => div.addEventListener('mouseover', function(){
    const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
    this.style.backgroundColor = randomColor;
}
))


slider.addEventListener('input', function() {
    value = this.value;
    sliderValue.textContent = value + 'x' + value; 
    container.innerHTML = '';
    const squareSize = 100 / value + '%';
    for (let i = 0; i < (value**2); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        div.style.width = squareSize;
    };
});
