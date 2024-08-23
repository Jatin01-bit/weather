var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

const apiKey = "63a90ae96d390ec37d6c1252f5a86e1a";

function convertToCelsius(val) {
    return (val - 273.15).toFixed(1);
}

btn.addEventListener('click', function() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        var nameval = data.name;
        var weatherDescription = data.weather[0].description;
        var temperature = data.main.temp;
        var windspeed = data.wind.speed;

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertToCelsius(temperature)} °C</span>`;
        description.innerHTML = `Sky Conditions: <span>${weatherDescription}</span>`;
        wind.innerHTML = `Wind Speed: <span>${windspeed} km/h</span>`;
    })
    .catch(err => alert('You entered a wrong city name.'));
});
