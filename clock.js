const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const HOUR_ST_LS = '12HoursSetting'

function twHourClock(){
    localStorage.getItem(HOUR_ST);
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    if (HOUR_ST_LS === true){
        clockTitle.innerText = `${
            hours > 12 ? `${hours - 12}` : hours
        }:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${
            seconds < 10 ? `0${seconds}` : seconds
        }`;

    } if (HOUR_ST_LS === false) {
        clockTitle.innerText = `${
            hours < 10 ? `0${hours}` : hours
        }:${
            minutes < 10 ? `0${minutes}` : minutes
        }:${
            seconds < 10 ? `0${seconds}` : seconds
        }`;
    }
};

function getTime(){
    const date = new Date;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();