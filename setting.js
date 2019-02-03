const stButton = document.querySelector(".setting");
const settingDiv = document.querySelector(".setting-div");
const fullScBt = settingDiv.querySelector(".full-screen-mode")
const hourBt = settingDiv.querySelector(".hr-clock");

const weatherContainer = document.querySelector(".weather");
const quote = document.querySelector(".quote");
const HOUR_ST = "12HoursSetting"

stButton.innerText = '⚙';

function handleStBtClick(){
    settingDiv.classList.toggle("dis-div");
};

function fullWindow(){
    weatherContainer.style.top = '700px'
    quote.style.top = '700px'
};

function justWindow(){
    weatherContainer.style.top = '600px'
    quote.style.top = '600px'
}

function handleFullClick(){
    if (fullScBt.checked) {
        fullWindow();
    } else {
        justWindow();
    }
};

function handleHourClick(){
    if (hourBt.checked) {
        localStorage.setItem(HOUR_ST, true);
    } else {
        localStorage.setItem(HOUR_ST, false);
    }
};

function init(){
    stButton.addEventListener("click", handleStBtClick);
    fullScBt.addEventListener("click", handleFullClick);
    hourBt.addEventListener("click", handleHourClick);
};

init()