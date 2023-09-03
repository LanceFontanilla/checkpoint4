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

//FIXME - Cannot read properties of undefined (reading completed)
// function _styleComplete(todoId) {
//     let foundTodo = AppState.todos.find(todo => todo.id == todoId)
//     if (foundTodo.completed == true) {
//         let todoElem = document.getElementById(foundTodo)
//         todoElem.style.backgroundColor = 'red'
//     }
//     console.log('completing styling', todoId)
// }

//FIXME - Colors all background red
// function _styleComplete() {
//     AppState.todos.forEach(todo => {
//         if (todo.completed == true) {
//             let todoElem = document.getElementById('todos')
//             todoElem.style.backgroundColor = 'red'
//             console.log('completing styling', todo)
//         }
//     })
// }

//FIXME - Says Styling but nothing happens
function _styleComplete() {
    AppState.todos.forEach(todo => {
        if (todo.completed == true) {
            const nodeList = document.querySelectorAll(".todos");
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].style.backgroundColor = "red";
            }
            console.log('completing styling', todo)
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
        AppState.on('todos', _styleComplete)
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

            form.reset()
            _styleComplete()
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


        } catch (error) {
            Pop.error(error)
        }

    }
}