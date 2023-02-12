const start_button = document.getElementById("start");
const pause_button = document.getElementById("pause");
const reset_button = document.getElementById("reset");
const content_button = document.getElementById("content");

start_button.addEventListener("click", () => {
    start_button.className = "btn btn-dark btn-lg";
    if (interval) return
    interval = setInterval(timer, 10);
});


pause_button.addEventListener("click", () => {
    start_button.className = "btn btn-secondary btn-lg";
    clearInterval(interval);
    interval = null;

});


reset_button.addEventListener("click", () => {
    start_button.className = "btn btn-secondary btn-lg";
    clearInterval(interval);
    ms = 0;
    interval = null;
    content_button.innerHTML = "00:00:00:00";
});

let ms = 0;
let interval = null;
//9560
//ms = m%100;
//sec=((m-ms)%100); 9560-60 =950000/100=9500;
//min=(sec - sec%60)/60;
//hours=(min-min%60)/60;

function timer() {
    ms++; 
    let milliseconds = ms%100;
    let seconds = (ms - milliseconds) / 100;
    let s = seconds % 60;
    let minutes = (seconds - seconds % 60) / 60;
    let m = minutes % 60;
    let hours = (minutes - minutes % 60) / 60;

    if (s < 10)
        s = "0" + s;
    if (milliseconds < 10)
        milliseconds = "0" + milliseconds;
    if (hours < 10)
        hours = "0" + hours;
    if (m < 10)
        m = "0" + m;
    content_button.innerHTML = `${hours}:${m}:${s}:${milliseconds}`;
}
