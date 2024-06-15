import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor(todoData) {
    this.description = todoData.description
    this.id = todoData.id
    this.completed = todoData.completed
    this.user = todoData.user
  }



  get Template(){
    return/*html*/ `
    <div class="todo-template-container">
      <div class="todo-template-checkbox">
      <input type="checkbox" name="complete" id="${this.id}-complete" onclick="app.pageController.completeTask('${this.id}')" ${this.completed ? 'Checked':''}>
      </div>
      <div class="todo-template-name">
      <p id="${this.id}" style="text-decoration: ${this.completed ? 'line-through':'none'};">${this.description}</p>
      </div>
      <div class="todo-template-button">
      <button class="btn btn-danger" onclick="app.pageController.delTask('${this.id}')">Del</button>
      </div>
    </div>
    `
  }


}
