addEventListener("DOMContentLoaded", init);

function init() {
    setTime();
    startClock();
}

function setTime() {
    const time = new Date();
    setHours(time.getHours());
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());

}

function startClock() {
    setInterval(() => {
        let hours = getHours()
        let minutes = getMinutes();
        let seconds = getSeconds();

        setSeconds(++seconds);
        if (seconds == 60) {
            setMinutes(++minutes);
            setSeconds(0);
        }
        if (minutes == 60) {
            setHours(++hours);
            setMinutes(0);
            setSeconds(0);
        }
    }, 995);
}