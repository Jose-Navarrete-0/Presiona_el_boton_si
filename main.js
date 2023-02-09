const yesBtn = document.querySelector("#yesBtn");
const msg = document.querySelector(".msg_container")
yesBtn.addEventListener('click', () => {
    msg.style.setProperty('z-index', 2);
    noBtn.style.setProperty('z-index', -1)
})

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`)
})