import { AppState } from "../AppState.js"
import { accountService } from "../services/AccountService.js"
import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawTodos() {
    console.log('drawing todos')
    let template = ''
    AppState.todos.forEach(todo => template += todo.TodoTemplate)
    setHTML('todos', template)
}

function _wait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 1500);
    });
}

function _todoCount() {
    let todoCount = 0

    AppState.todos.forEach(todo => {
        if (todo.completed == false) {
            todoCount++
            console.log(todoCount, ('this is my todo count'))
            document.getElementById('todoCount').innerText = `${todoCount}  Todos Remaining `
        } else {
            document.getElementById('todoCount').innerText = `
            0 Todos Remaining`
        }

    })
}

export class TodosController {
    constructor() {
        console.log('Todos Controller')
        this.getTodos()
        AppState.on('todos', _drawTodos)
        AppState.on('account', _drawTodos)
        AppState.on('todos', _todoCount)
    }

    async getTodos() {
        try {
            await _wait()
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(form)
            await todosService.createTodo(formData)
            console.log('making new todo',)

            // @ts-ignore
            form.reset()

        } catch (error) {
            Pop.error(error)
        }
    }

    async deleteTodo(todoId) {
        try {
            console.log('delete', todoId)
            if (await Pop.confirm('Are you sure you want to remove this ToDo?')) {
                todosService.deleteTodo(todoId)
            }
        } catch (error) {
            Pop.error(error)
        }
    }

    async completeTodo(todoId) {
        try {
            await todosService.completeTodo(todoId)
            console.log('completing todo')
            _drawTodos()
        } catch (error) {
            Pop.error(error)
        }
    }
}