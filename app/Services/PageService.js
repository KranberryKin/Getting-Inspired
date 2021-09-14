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
  document.getElementById('backgroundImgStyle').innerHTML = `
  body {
    background-image: url('${ProxyState.imageUrl}');
    background-repeat: no-repeat;
    background-size: cover;
  }
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



  setBackgroundImg() {
    _setBackgroundImg()
  }
}



export const pageService = new PageService()