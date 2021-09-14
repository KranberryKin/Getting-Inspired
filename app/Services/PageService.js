import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandBoxApi } from "./AxiousSandboxApi.js";


class PageService {

  async delTask(taskId) {
    let x = confirm("Are you sure you want to deYEET?")
    if(x){
      let res = await sandBoxApi.delete(`${ProxyState.User}/todos/${taskId}`)
      console.log("Did it work?", res);
    }
  }

  async addTodo(formData) {

    let res = await sandBoxApi.post(`${ProxyState.User}/todos`, new Todo(formData))
    return res
  }

}

export const pageService = new PageService()