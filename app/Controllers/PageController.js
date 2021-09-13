import { ProxyState } from "../AppState.js";
import { sandBoxApi } from "../Services/AxiousSandboxApi.js";
import { pageService } from "../Services/PageService.js"
import { generateId } from "../Utils/generateId.js";
// Private Functions
function _DrawClock() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  document.getElementById('clock').innerText = time
  document.getElementById('date').innerText = date

}


export class PageController {
  constructor() {
    console.log('Hello from the PageController!')
    this.setClock()
    this.setBackgroundImg()
    this.setQuote()
    this.setWeather()
    _DrawClock()
    pageService.drawTodo()
  }

  addTodo(){
    event.preventDefault()
    let form = event.target
    let formData = {
      id: generateId(),
      // @ts-ignore
      description: form.description.value,
      completed: false,
      user: ProxyState.User
    }
    pageService.addTodo(formData)
    // @ts-ignore
    form.reset()
  }
  toggleTemp(){
    ProxyState.weather.convertion = !ProxyState.weather.convertion
    pageService.drawWeather()
  }
  delTask(taskID){
    pageService.delTask(taskID)
  }
  async completeTask(taskId){
    let task = ProxyState.todo.find(t => taskId == t.id)
    if(task.completed){
      task.completed = false
    }else{
      task.completed = true
    }
    let res = await sandBoxApi.put(`${ProxyState.User}/todos/${taskId}`, task)
    console.log('work?', res);
    pageService.drawTodo()
  }

  onHover(){
    document.getElementById('authorID').style.display = 'block'
  }
  onLeave(){
    document.getElementById('authorID').style.display = 'none'
  }

  // Weather Section Here
  setWeather(){
    pageService.setWeather()
  }

  //Background Section Here
  setBackgroundImg(){
    pageService.setBackgroundImg()
  }
  //Quote Section Here VvV
  setQuote(){
    pageService.setQuote()
  }
  // Clock Section Below VvV
  setClock() {
    setInterval(function () {
      _DrawClock()
    }, 1000)
  }
}

