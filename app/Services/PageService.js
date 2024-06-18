import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";


class PageService {
  _todos = [];
  constructor(){
    this._todos = [];
  }

  async getTodos(){
    this._todos = window.localStorage.getItem("getting-inspired-todos") ?? null;
    if(this._todos == null){
      this._todos = []
      ProxyState.todo = [];
    }else{
      this._todos = JSON.parse(this._todos);
    }
    return this._todos;
  }

  async saveTodos(){
    window.localStorage.setItem("getting-inspired-todos", JSON.stringify(this._todos))
  }

  async updateTodo(taskId){
    var taskIndex = this._todos.findIndex(task => task.id == taskId);
    if(taskIndex == -1){
      console.log("Error:", "Failed To Find Todo")
      return;
    }else{
    var task = this._todos[taskIndex];
    task.completed = !task.completed;
    this._todos.splice(taskIndex, 1, task);
    this.saveTodos();
    }
  }

  async delTask(taskId) {
    let x = await confirm("Are you sure you want to delete task?")
    if(x == true){
      var taskIndex = this._todos.findIndex(t => t.id == taskId);
      if(taskIndex == -1){
        console.log("Error: ", "Failed to find Task");
        return;
      }else {
        var todos = this._todos.filter(t => t.id !== taskId);
        this._todos = todos;
        this.saveTodos();
      }
    }
  }


  async addTodo(formData) {
    this._todos.push(formData);
    this.saveTodos();
    ProxyState.todo = [...ProxyState.todo, new Todo(formData)]
    return res
  }

}

export const pageService = new PageService()