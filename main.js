let [miliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.timerdisplay');
let int;

document.getElementById('starttimer').addEventListener('click', () => {
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
});
document.getElementById('pausetimer').addEventListener('click', () => {
    clearInterval(int);
});
document.getElementById('resettimer').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 . 000';
});

function displayTimer(){
    miliseconds += 10;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;        
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;
    
    timerRef.innerHTML = `${h} : ${m} : ${s} . ${ms}`;
}