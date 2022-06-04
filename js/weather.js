const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=eb89a2a288bf7798308b3106df4a6297";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);3
    //declare variables
    let fTempmax = kToF(jsObject.main.temp_max);
    let desc = jsObject.weather[0].description;
    let templow = kToF(jsObject.main.temp_min)
    let wind = jsObject.wind.speed;

    //add temp-max
    //add description
    document.getElementById('description').textContent = desc;
});


function kToF(kTemp){
  return Math.round((kTemp * (9/5)) - 459.67);
}