import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/Weather.js"
import { sandBoxApi } from "../Services/AxiousSandboxApi.js"
import { kelvinToC } from "../Utils/CelsiusConvertion.js"
import { kelvinToF } from "../Utils/FarenheitConvertion.js"

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
              <img src='${url}' alt="Icon-Img " class="col"/>
              <div class="col text-center">
                <div title="${"Change To " + (isCelsius ? "Fahrenheit" : "Celsius" )}" class="row interactive" onclick="app.weatherController.toggleTemp()">
                    <h5>${currTemp}</h5>
                </div>
                <div class="row">
                  <p>${ProxyState.weather.city}</p>
                </div>
              </div>
            </div>
    </div>
    `
}


export class WeatherController{
  constructor(){
    this.setWeather()
  }
  setWeather(){
    _setWeather()
  }
  toggleTemp(){
    ProxyState.weather.convertion = !ProxyState.weather.convertion
    _drawWeather()
  }
}