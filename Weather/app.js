let search = document.querySelector("#searchBtn");
let maint = document.querySelector(".search-box");
let result = document.querySelector(".result");
let city = document.querySelector("#city-name");
let name = document.querySelector(".name-city")
let weather_img = document.querySelector(".weather-img");
let location_not_found = document.querySelector('.location-not-found');
let wind = document.querySelector("#wind-speed");
let temp = document.querySelector(".temperature");
let description = document.querySelector(".description");
let humidity = document.querySelector("#humidity");
let pen = document.querySelector(".welcome");
let wea = document.querySelector(".wea");

async function showdata(city) {
    const api_key = "9cbab12cba9ebf6645faafd6321301f5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    if (weather_data.cod == `404`) {
        location_not_found.style.display = "flex";
        result.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    console.log(weather_data);
    name.innerHTML= `${city}`.toUpperCase();
    temp.innerHTML = `${weather_data.main.temp} <sup>°C</sup>`
    description.innerHTML = `${weather_data.weather[0].description}`.toUpperCase();
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}km/h`;
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "cloudy.gif";
            break;
        case 'Clear':
            weather_img.src = "sunny.gif";
            break;
        case 'Rain':
            weather_img.src = "rainy.gif";
            break;
        case 'Mist':
            weather_img.src = "/img/mist.png";
            break;
        case 'Snow':
            weather_img.src = "snow.gif";
            break;
    }
}
search.addEventListener('click', () => {
    console.log("click");
    result.style.display = "flex";
    showdata(city.value);
    pen.style.display = "none";
    wea.style.display = "block";
})
