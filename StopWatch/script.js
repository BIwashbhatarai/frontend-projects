let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');


function updateTime() {
    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60) {
        minutes = 0;
        hours++;
    }

    display.innerHTML = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0')

}

startBtn.addEventListener('click', () => {
    if(timer != null) return;
    timer = setInterval(updateTime, 1000);

})

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
})

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    seconds = hours = minutes = 0;
    display.textContent = '00:00:00';
})