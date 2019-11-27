const hoursBlock = document.getElementsByClassName("container__hours")[0];
const minutesBlock = document.getElementsByClassName("container__minutes")[0];
const secondsBlock = document.getElementsByClassName("container__seconds")[0];

setHours = (hours) => {
    hoursBlock.innerHTML = hours;
};

getHours = () => {
    return hoursBlock.innerHTML;
};

setMinutes = (minutes) => {
    minutesBlock.innerHTML = minutes;
};

getMinutes = () => {
    return minutesBlock.innerHTML;
};

setSeconds = (seconds) => {
    secondsBlock.innerHTML = seconds;
};

getSeconds = () => {
    return secondsBlock.innerHTML;
};
