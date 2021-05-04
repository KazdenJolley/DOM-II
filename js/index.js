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
    // 1
navHeader.addEventListener('mouseover', blueBG);
    // 2
document.addEventListener('keydown', whiteBG);
const busImg = document.querySelector('.intro img');
let scale = 0;
function rotate(event) {
    event.preventDefault();
    scale += event.deltaY * -1;
    busImg.style.transform = `rotate(${scale}deg)`
}
    // 3
busImg.addEventListener('wheel', rotate);
const busTitle = document.querySelector('.intro h2');
function large(event) {
    debugger;
    event.preventDefault();
    busTitle.style.fontSize = '6rem';
}
    // 4
busTitle.addEventListener('dblclick', large);
function small(event) {
    busTitle.style.fontSize = '3rem';
}
    // 5
busTitle.addEventListener('mouseout', small);
adventureAwaits = document.querySelector('.home section:nth-of-type(2) div:nth-of-type(2)')
let opacity = 1;
function blur(event) {
    if(opacity >= 0){
        opacity -= 0.01;
        adventureAwaits.style.opacity = `${opacity}`;
    }
}
    // 6
adventureAwaits.addEventListener('mousemove', blur);