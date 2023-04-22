let hr = 0, min = 0; sec = 0, count = 0;
let timer = false;

function start() {
    timer = true;
    stopwatch();
}
function stop() {
    timer = false;
}
function reset() {
    timer = false;
    hr = 0, min = 0, sec = 0, count = 0;
    document.getElementById("count").innerHTML = count;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
    document.getElementById("hour").innerHTML = hr;
}

// stopwatch main function
function stopwatch() {
    if (count >= 100) {
        sec++;
        document.getElementById("sec").innerHTML = sec;
        count = 0;
    }
    if (sec >= 60) {
        min++;
        document.getElementById("min").innerHTML = min;
        sec = 0;
        count = 0;
    }
    if (min >= 60) {
        hr++;
        document.getElementById("hour").innerHTML = hr;
        sec = 0;
        min=0;
        count = 0;
    }
    if (timer == true) {
        count = count + 1;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()", 10);
    }
}