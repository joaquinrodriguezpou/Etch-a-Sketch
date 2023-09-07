const container = document.querySelector('.container');
const gridSize = document.querySelector('gridSize')
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
let value = 16;

function getRandomNumber(){
    return Math.floor(Math.random() * 255);
}

function getGrid(){
    for (let i = 0; i < (value**2); i++) {
   const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
    }

    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(div => div.addEventListener('mouseover', function(){       
        const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`; 
        this.style.backgroundColor = randomColor;
       
    }
    ))
}

function changeNumOfSquares () {
        slider.addEventListener('input', function() {
        value = this.value;
        sliderValue.textContent = value + 'x' + value; 
        container.innerHTML = '';

        for (let i = 0; i < (value**2); i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.width = 100 / value + '%';
            container.appendChild(div);           
        };

        squares = Array.from(document.querySelectorAll('.square'));
        squares.forEach(div => div.addEventListener('mouseover', function(){

            const randomColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
            this.style.backgroundColor = randomColor;
        }
        ));
    });
}

getGrid();
changeNumOfSquares();