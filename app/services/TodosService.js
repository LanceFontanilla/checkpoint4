import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"



class TodosService {

    async getTodos() {
        const res = await api.get('api/todos')
        console.log(res.data, 'getting todos')
        AppState.todo = new Todo(res.data)


    }



}

export const todosService = new TodosService 