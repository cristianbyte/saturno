const downArrowFather = document.getElementsByClassName('tracklsit-planet')[0]
const ufo = document.getElementsByClassName('rawu_ufo_random')[0];
const dayHourMinSec = document.getElementsByClassName('countDown__boxSon-timer')
const loader = document.querySelector(".loader");

const currentDate = new Date().getFullYear()
const relaseDate = new Date(`November 11 ${currentDate} 00:00:00`)
let transistor = ''

function disableScroll(){  
    window.scrollTo(0, 0);
} 

function updateCountTimer(){
    const currentTime = new Date();
    const diff = relaseDate - currentTime;

    transistor = Math.floor( diff/1000 / 60 / 60 / 24)
    dayHourMinSec[0].innerHTML = transistor < 10 ? '0' + transistor : transistor
    transistor = Math.floor( diff/1000 / 60 / 60) % 24
    dayHourMinSec[1].innerHTML = transistor < 10 ? '0' + transistor : transistor
    transistor = Math.floor( diff/1000 / 60 ) % 60
    dayHourMinSec[2].innerHTML = transistor < 10 ? '0' + transistor : transistor
    transistor = Math.floor( diff/1000 ) % 60
    dayHourMinSec[3].innerHTML = transistor < 10 ? '0' + transistor : transistor
}
function toggle(e){
    if(e.target && e.target.tagName === 'A'){
        e.target.classList.toggle('active')
    }
}
function ufoMove(e){
    ufo.style.top = `${e.clientY - 65 + window.scrollY}px`
    ufo.style.left = `${e.clientX }px`
}

function videoEnd(e){
    if(e.data === 0){
        alert('Finihs')
    }
}

window.addEventListener("load", function(){
    loader.className += " hidden";
    window.removeEventListener('scroll', disableScroll); 
})

setInterval(() => {updateCountTimer()}, 1000);
window.addEventListener('scroll', disableScroll);
downArrowFather.addEventListener('click',toggle)
window.addEventListener('mousemove',ufoMove)

