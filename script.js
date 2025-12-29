let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function stop() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00 : 00 : 00 : 000";
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliseconds = elapsedTime % 1000;

    document.getElementById("display").innerText =
        `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)} : ${padMs(milliseconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function padMs(num) {
    return num.toString().padStart(3, '0');
}
