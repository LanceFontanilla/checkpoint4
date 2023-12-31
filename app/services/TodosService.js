import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"


class TodosService {

    async getTodos() {
        const res = await api.get('api/todos')
        console.log(res.data, 'getting todos')
        const mappedTodos = res.data.map(dataObj => new Todo(dataObj))
        AppState.todos = mappedTodos
    }

    async createTodo(formData) {
        const res = await api.post('api/todos', formData)
        console.log(res.data, '[Creating new Todo]')
        const newTodo = new Todo(res.data)
        console.log(AppState.todos)
        AppState.todos.push(newTodo)
        AppState.emit('todos')
    }

    async deleteTodo(todoId) {
        const res = await api.delete(`api/todos/${todoId}`)
        console.log('[Deleting TODO]', res.data)
        const filteredArr = AppState.todos.filter(todo => todo.id != todoId)
        AppState.todos = filteredArr
    }

    async completeTodo(todoId) {
        let foundTodo = AppState.todos.find(todo => todo.id == todoId)
        foundTodo.completed = true
        const res = await api.put(`api/todos/${todoId}`, foundTodo)
        console.log('editing ToDo', foundTodo, AppState.todos)

        const updatedTodo = new Todo(res.data)
        let originalTodoIndex = AppState.todos.findIndex(todo => todo.id == todoId)
        AppState.todos.splice(originalTodoIndex, 1, updatedTodo)

        //await this.getTodos() //TODO - change this to splice, look at Greg'sList

        AppState.emit('todos')
    }
}

export const todosService = new TodosService 