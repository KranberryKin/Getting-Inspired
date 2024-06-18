import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandBoxApi } from "../Services/AxiousSandboxApi.js"
import { kelvinToC } from "../Utils/CelsiusConvertion.js"
import { kelvinToF } from "../Utils/FarenheitConvertion.js"
import {getWeatherCode} from "../Models/WeatherCode.js"
import {convertFahrenheitToKelvin} from "../Utils/KelvinConvertion.js"


//#region Weather Section
async function _setWeather() {
    let res = await sandBoxApi.get('weather')
    ProxyState.weather = new Weather(res.data)
  _drawWeather()
}

function _drawWeather() {
  let currTemp = ''
  let isCelsius = false;
  if (ProxyState.weather.convertion) {
    currTemp = kelvinToC(ProxyState.weather.temp).toString() + ' &degC'
    isCelsius = true;
  } else {
    currTemp = kelvinToF(ProxyState.weather.temp).toString() + ' &degF'
    isCelsius = false;
  }
  let url = "http://openweathermap.org/img/wn/" + ProxyState.weather.icon + "@2x.png"
  document.getElementById('weatherId').innerHTML = /*html*/`
    <div class="p-3 card-weather d-flex">
            <div class="row align-items-center">
                <div class="col">
                ${ProxyState.weather.svg !== "" ? ProxyState.weather.svg : ""}
                  <img src='${url}' class="${ProxyState.weather.svg !== "" ? "d-none" : ""}" alt="Icon-Img "/>
                  <p id="forcastName" class="text-center ${ProxyState.weather.weatherName === "" ? "d-none" : ""}">${ProxyState.weather.weatherName}</p>
                </div>
                <div class="col">
                  <i class="interactive weather-geolocator ${ProxyState.weather.weatherName !== "" ? "d-none" : ""}" onclick="app.weatherController.getGeolocation()" title="Get Geo-Location">i</i>
                  <div title="${"Change To " + (isCelsius ? "Fahrenheit" : "Celsius" )}" class="row interactive text-center" onclick="app.weatherController.toggleTemp()">
                      <h5>${currTemp}</h5>
                  </div>
                  <div class="row text-center">
                    <p>${ProxyState.weather.city}</p>
                </div>
              </div>
            </div>
    </div>
    `
}
//#endregion

//#region Geo-Location Section 
function _ErrorFunction(){
  alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
  
}

async function _SuccessFunction (position) {
  const cityName = await _GetCityNameOffLocation(position);
  const forcast = await _GetForcastOffLocation(position);
  if(cityName != "" && forcast != null){
    ProxyState.weather = {...forcast, city: cityName};
    _drawWeather();
  }
} 

async function _GetForcastOffLocation(position){
  const forcastUrl = await _CreatForcastUrl(position);
  const todaysForcast = await _ApiCall(forcastUrl);
  const forcastNow = await _GetCurrentForcast(todaysForcast)
  return forcastNow;
}

async function _GetCurrentForcast(todaysForcast){
  const ranges = todaysForcast.hourly;
  const timeRanges = ranges.time || [];
  const tempatureRanges = ranges.temperature_2m || [];
  const weatherCodeRanges = ranges.weather_code || [];
  var today = new Date();
  var startDateTime = (today.getFullYear()+ '-' + ((today.getMonth() + 1).toString().length > 1 ? today.getMonth() + 1 : "0" + (today.getMonth() + 1)) + '-' + ((today.getHours() + 1) == 24 ? today.getDate() + 1 : today.getDate())) + "T" + (today.getHours().toString().length > 1 ? today.getHours() : "0" + today.getHours() )  + ":00";
  var endDateTime = (today.getFullYear()+ '-' + ((today.getMonth() + 1).toString().length > 1 ? today.getMonth() + 1 : "0" + (today.getMonth() + 1)) + '-' + ((today.getHours() + 1) == 24 ? today.getDate() + 1 : today.getDate())) + "T" + ((today.getHours() + 1).toString().length > 1 ? ((today.getHours() + 1) === 24 ? "00" : today.getHours() + 1) : "0" + (today.getHours() + 1) )  + ":00";
  const timeIndexMin = timeRanges.findIndex(tr => tr === startDateTime)
  const timeIndexMax = timeRanges.findIndex(tr => tr === endDateTime)
  let weather = {};
  let tempature = 0;
  if(timeIndexMax > -1 && timeIndexMin > -1 ){
    weather = await getWeatherCode(weatherCodeRanges[timeIndexMax]);
    tempature = await convertFahrenheitToKelvin(tempatureRanges[timeIndexMax]);
    return {...ProxyState.weather, temp: tempature, city: "", svg: weather.svg, weatherName: weather.name }
  }else{
    return null;
  }
}

async function _CreatForcastUrl(position){
  return`https://api.open-meteo.com/v1/forecast?latitude=${+position.coords.latitude}&longitude=${+position.coords.longitude}&hourly=temperature_2m,weather_code&temperature_unit=fahrenheit&past_days=1`;
}

async function _GetCityNameOffLocation(position){
  let cityName = "";
  let url = await _CreateLocationUrl(position);
  let cityArrayObject = await _ApiCall(url);
  if(cityArrayObject.geonames.length > 0){
      cityName = cityArrayObject.geonames[0].name
  }else {
      const lessAccurate = true;
      let url = await _CreateLocationUrl(position, lessAccurate);

      cityArrayObject = await _ApiCall(url);
      if(cityArrayObject.geonames.length === 0){
          console.log("Can't Find Local City, off Coords.")
      }else{
          cityName = cityArrayObject.geonames[0].name;
      }
  }
  return cityName;
}

async function _CreateLocationUrl(position, overload = false){
  const isLatPositive = +position.coords.latitude > 0;
  const amount = overload ? 10 : 100;
  let latMin = Math.floor(+position.coords.latitude * amount) / amount;
  let latMax = Math.ceil(+position.coords.latitude * amount) / amount;

  const isLongPositive = +position.coords.latitude > 0;
  let longMin = Math.floor(+position.coords.longitude * amount) / amount;
  let longMax = Math.ceil(+position.coords.longitude * amount) / amount;

  return `https://secure.geonames.org/citiesJSON?north=${isLatPositive ? latMax : latMin}&south=${isLatPositive ? latMin : latmax}&east=${isLongPositive ? longMax : longMin}&west=${isLongPositive ? longMin : longMax}&lang=en&username=kranberrykin`
}

async function _ApiCall(url){
  const response = await fetch(url)
  .then(response => {
      if(!response.ok){
          throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
  })
  return response;
}
//#endregion


export class WeatherController{
  constructor(){
    console.log("Hello From WeatherController")
    this.setWeather();
  }

  setWeather(){
    _setWeather()
  }

  toggleTemp(){
    ProxyState.weather.convertion = !ProxyState.weather.convertion
    _drawWeather()
  }

  drawWeather(){
    _drawWeather()
  }

  getGeolocation(){
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(_SuccessFunction, _ErrorFunction);
    } else {
        alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    } 
  }
  
}