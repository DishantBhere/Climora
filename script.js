/* --------------- Weather Web App  --------------------- */
let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");

// Your new WeatherAPI key
let key = "6f39aba5e5f14e70a5e151512250906";

let getWeather = () => {
  let cityValue = cityVal.value;
  if (cityValue.length == 0) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
  } else {
    let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cityValue}&aqi=no`;
    cityVal.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        show.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <h4 class="weather">${data.current.condition.text}</h4>
       
        <img src="https:${data.current.condition.icon}">
        <h1>${data.current.temp_c} &#176;</h1>
        <div class="temp_container">
         <div>
            <h4 class="title">Feels</h4>
            <h4 class="temp">${data.current.feelslike_c}&#176;</h4>
         </div>
         <div>
            <h4 class="title">Humidity</h4>
            <h4 class="temp">${data.current.humidity}%</h4>
         </div>   
        </div>
        `;
      })
      .catch(() => {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
      });
  }
};

search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);

// -------------------- RANDOM BACKGROUND ON LOAD --------------------
const backgrounds = [
  "images/background1.jpg",
  "images/background2.jpg",
  "images/background3.jpg",
  "images/background4.jpg",
  "images/background5.jpg",
  "images/background6.jpg",
  "images/background7.jpg",
  "images/background8.jpg"
];

const selected = backgrounds[Math.floor(Math.random() * backgrounds.length)];
document.body.style.backgroundImage = `url('${selected}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

