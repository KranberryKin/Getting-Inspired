export class Weather {
  constructor(weatherData) {
    this.temp = weatherData.main.temp
    this.cover = weatherData.weather[0].main
    this.icon = weatherData.weather[0].icon
    this.city = weatherData.name
    this.country = weatherData.sys.country
    this.convertion = weatherData.convertion || false
    this.svg = ""
    this.weatherName = ""
  }
}
