import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandBoxApi } from "../Services/AxiousSandboxApi.js";
import { pageService } from "../Services/PageService.js"
import { generateId } from "../Utils/generateId.js";
// Private Functions
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
      if (!todo.completed) {
        remainingtasks++
      }
    });
  }
  document.getElementById('remainingTasks').innerText = remainingtasks.toString()
  document.getElementById('Todo-List').innerHTML = template
}

export class PageController {
  constructor() {
    console.log('Hello from the PageController!')
    ProxyState.on('todo', _drawTodo)
    _drawTodo()
  }

  addTodo() {
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

  delTask(taskID) {
    pageService.delTask(taskID)
  }
  async completeTask(taskId) {
    let task = ProxyState.todo.find(t => taskId == t.id)
    if (task.completed) {
      task.completed = false
    } else {
      task.completed = true
    }
    let res = await sandBoxApi.put(`${ProxyState.User}/todos/${taskId}`, task)
    _drawTodo()
    console.log('work?', res);
  }

  onHover() {
    document.getElementById('authorID').style.display = 'block'
  }
  onLeave() {
    document.getElementById('authorID').style.display = 'none'
  }

}

