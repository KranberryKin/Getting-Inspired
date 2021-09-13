import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { Todo } from "../Models/Todo.js";
import { Weather } from "../Models/Weather.js";
import { kelvinToC } from "../Utils/CelsiusConvertion.js";
import { kelvinToF } from "../Utils/FarenheitConvertion.js";
import { sandBoxApi } from "./AxiousSandboxApi.js";


async function _setBackgroundImg() {
  let res = await sandBoxApi.get('images')
  ProxyState.image = new Image(res.data)
  ProxyState.imageUrl = ProxyState.image.url
  let template = ProxyState.imageUrl
  document.getElementById('backgroundImgStyle').innerHTML = `
  body {
    background-image: url('${template}');
    background-repeat: no-repeat;
    background-size: cover;
  }
  `
}

async function _setQuote() {
  let res = await sandBoxApi.get('quotes')
  document.getElementById('quoteId').innerHTML = `
  <p>"${res.data.content}"</p>
  <div id="authorID" style="display: none">By : ${res.data.author}</div>
  `
  document.getElementById('quoteStyle').innerHTML = `
  #quoteId #authorId{
    display: none;
  }
  #quoteId:hover #authorID{
    display: block;
  }
  `
}

async function _setWeather() {
  let res = await sandBoxApi.get('weather')
  ProxyState.weather = new Weather(res.data)
  _drawWeather()
}

function _drawWeather() {
  let currTemp = ''
  if (ProxyState.weather.convertion) {
    currTemp = kelvinToC(ProxyState.weather.temp).toString() + 'C'
  } else {
    currTemp = kelvinToF(ProxyState.weather.temp).toString() + 'F'
  }
  let url = "http://openweathermap.org/img/wn/" + ProxyState.weather.icon + "@2x.png"
  document.getElementById('weatherId').innerHTML = /*html*/`
    <div class="p-3 card d-flex">
            <div class="row">
              <img src='${url}' alt="Icon-Img " class="col"/>
              <div class="col text-center">
                <div class="row" onclick="app.pageController.toggleTemp()">
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

async function _drawTodo() {
  let res = await sandBoxApi.get(`${ProxyState.User}/todos`)
  let template = ''
  console.log(res);
  let x = res.data
  let remainingtasks = 0
  if (x != undefined) {
    x.forEach(t => {
      let todo = new Todo(t)
      ProxyState.todo.push(todo)
      template += todo.Template
      if(!todo.completed){
        remainingtasks++
      }
    });
  }
  document.getElementById('remainingTasks').innerText = remainingtasks.toString()
  document.getElementById('Todo-List').innerHTML = template
}
class PageService {

  async delTask(taskId) {
    let x = confirm("Are you sure you want to deYEET?")
    if(x){
      let res = await sandBoxApi.delete(`${ProxyState.User}/todos/${taskId}`)
     this.drawTodo()
      console.log("Did it work?", res);
    }
  }


  async addTodo(formData) {

    let res = await sandBoxApi.post(`${ProxyState.User}/todos`, new Todo(formData))
    this.drawTodo()
    console.log('Did it work?', res);
  }

  drawTodo() {
    _drawTodo()
  }
  setWeather() {
    _setWeather()
  }
  drawWeather() {
    _drawWeather()
  }
  setQuote() {
    _setQuote()
  }
  setBackgroundImg() {
    _setBackgroundImg()
  }
}



export const pageService = new PageService()