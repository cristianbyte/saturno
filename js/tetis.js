const downArrowFather = document.getElementsByClassName('tracklsit-planet')[0]
const ufo = document.getElementsByClassName('rawu_ufo_random')[0];

function toggle(e){
    if(e.target && e.target.tagName === 'A'){
        e.target.classList.toggle('active')
        // e.target.style.height = 'auto'
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

downArrowFather.addEventListener('click',toggle)
window.addEventListener('mousemove',ufoMove)

