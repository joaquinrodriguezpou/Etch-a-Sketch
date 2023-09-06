const container = document.querySelector('.container');

for (let i = 0; i < (16*16); i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

const squares = Array.from(document.querySelectorAll('.square'));


squares.forEach(div => div.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'red';
}
))
