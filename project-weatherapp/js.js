let input;
let btn = document.getElementById("btn");
let temp = document.getElementById("temp");
let weatherdesc = document.getElementById("weatherdesc");
let place = document.getElementById("place");
let date = document.getElementById("date");
let feelslike = document.getElementById("feelslike");
let humidity = document.getElementById("humidity");
let pressure = document.getElementById("pressure");
let visibility = document.getElementById("visibility");
let windspeed = document.getElementById("windspeed");
let latitude = document.getElementById("latitude")

let tarik = new Date();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[tarik.getMonth()];
let fdate = `${month} ${tarik.getDate()}, ${tarik.getFullYear()}`;
console.log(fdate)

async function checkweather() {
    input = document.getElementById("input").value;
    // ef358d632cd2dcf7048555692f38547d
    // https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=ef358d632cd2dcf7048555692f38547d`)
    if (!res.ok) {
        alert(`No such city named ${input}`);
    }
    let data = await res.json();

    console.log(data);
    temp.innerHTML = `${((data.main.temp) - 273.15).toFixed(2)} °C`
    weatherdesc.innerHTML = data.weather[0].description.toUpperCase();
    date.innerHTML = fdate;
    place.innerHTML = data.name;
    feelslike.innerHTML = `${((data.main.feels_like) - 273.15).toFixed(2)} °C`;
    humidity.innerHTML = `${(data.main.humidity)} %`;
    pressure.innerHTML = `${Intl.NumberFormat("en-IN").format(data.main.pressure)} hPa`;
    visibility.innerHTML = `${Intl.NumberFormat("en-IN").format((data.visibility/1000).toFixed(2))} km`;
    windspeed.innerHTML = `${data.wind.speed} m/s`;
    latitude.innerHTML = `${data.coord.lat} , ${data.coord.lon}`;
}

async function run() {
    input = document.getElementById("input").value;
    // ef358d632cd2dcf7048555692f38547d
    // https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=

    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=ef358d632cd2dcf7048555692f38547d`)
    if (!res.ok) {
        alert(`No such city named ${input}`);
    }
    let data = await res.json();

    console.log(data);
    temp.innerHTML = `${((data.main.temp) - 273.15).toFixed(2)} °C`
    weatherdesc.innerHTML = data.weather[0].description.toUpperCase();
    date.innerHTML = fdate;
    place.innerHTML = data.name;
    feelslike.innerHTML = `${((data.main.feels_like) - 273.15).toFixed(2)} °C`;
    humidity.innerHTML = `${(data.main.humidity)} %`;
    pressure.innerHTML = `${Intl.NumberFormat("en-IN").format(data.main.pressure)} hPa`;
    visibility.innerHTML = `${Intl.NumberFormat("en-IN").format((data.visibility/1000).toFixed(2))} km`;
    windspeed.innerHTML = `${data.wind.speed} m/s`;
    latitude.innerHTML = `${data.coord.lat} , ${data.coord.lon}`;
}