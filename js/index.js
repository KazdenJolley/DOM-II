// Your code goes here
const navHeader = document.querySelector('.main-navigation');
function blueBG(event) {
    navHeader.style.backgroundColor = 'blue';
}
function whiteBG(event) {
    if (event.key === 'w'){
        navHeader.style.backgroundColor = 'white';
    }
}
navHeader.addEventListener('mouseover', blueBG);
document.addEventListener('keydown', whiteBG);

const busImg = document.querySelector('.intro img');
let scale = 0;
function rotate(event) {
    event.preventDefault();
    scale += event.deltaY * -1;
    busImg.style.transform = `rotate(${scale}deg)`
}
busImg.addEventListener('wheel', rotate);
