import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { pageService } from "../Services/PageService.js"
import { generateId } from "../Utils/generateId.js";
// Private Functions
async function _drawTodo() {
  let res = await pageService.getTodos();
  let template = ''
  let remainingtasks = 0
  if (res != undefined) {
    res.forEach(t => {
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

  async delTask(taskID) {
    await pageService.delTask(taskID)
    _drawTodo();
  }

  async completeTask(taskId) {
    await pageService.updateTodo(taskId);
    _drawTodo();
  }

  onHover() {
    document.getElementById('authorID').style.display = 'block'
  }
  onLeave() {
    document.getElementById('authorID').style.display = 'none'
  }

}

