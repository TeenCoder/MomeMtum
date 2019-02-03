const COORDS = "coords";
const API_KEYS = "88b38985502a5cd4e55297d3bfe8dcee";
const weather = document.querySelector(".weather");

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEYS}&units=metric`
    )
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json.main.temp, json.name);
            weather.innerText = `${json.main.temp}.C
            @${json.name}`
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuc(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
    const coordObj = {
        latitude,
        longitude
    };
    saveCoords(coordObj);
    getWeather();
}

function handleGeoFail(){
    console.log("cannot access to the geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuc, handleGeoFail)
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();