// Your code goes here
    // 1
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

    // 2
document.addEventListener('keydown', whiteBG);

    // 3
const busImg = document.querySelector('.intro img');
let scale = 0;
function rotate(event) {
    event.preventDefault();
    scale += event.deltaY * -1;
    busImg.style.transform = `rotate(${scale}deg)`
}
busImg.addEventListener('wheel', rotate);

    // 4
const busTitle = document.querySelector('.intro h2');
function large(event) {
    debugger;
    event.preventDefault();
    busTitle.style.fontSize = '6rem';
}
busTitle.addEventListener('dblclick', large);

    // 5
function small(event) {
    busTitle.style.fontSize = '3rem';
}
busTitle.addEventListener('mouseout', small);

    // 6
const adventureAwaits = document.querySelector('.home section:nth-of-type(2) div:nth-of-type(2)')
let opacity = 1;
function blur(event) {
    if(opacity >= 0){
        opacity -= 0.01;
        adventureAwaits.style.opacity = `${opacity}`;
    }
}
adventureAwaits.addEventListener('mousemove', blur);

    // 7
const sunButton = document.querySelector('.btn');
function red(event) {
    event.preventDefault();
    sunButton.style.backgroundColor = 'orange';
}
sunButton.addEventListener('focus', red);

    // 8
window.addEventListener('resize', (event) => {
    document.querySelector('body').style.backgroundColor = 'lightgrey';
})

    // 9 
const mapImg = document.querySelector('.img-content img');
function remove(event) {
    mapImg.remove();
}
document.addEventListener('scroll', remove);

    // 10
const title = document.querySelector('title');
document.addEventListener('DOMContentLoaded', (event) => {
    title.textContent = 'Look at me!!';
})