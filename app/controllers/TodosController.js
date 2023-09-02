import { todosService } from "../services/TodosService.js"
import { Pop } from "../utils/Pop.js"



export class TodosController {
    constructor() {
        console.log('Todos Controller')
        this.getTodos()

    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error)
        }
    }

    async createTodo() {
        try {
            window.event.preventDefault()
            const form = window.event.target
            const formData = getFormData(formData)
            console.log('making new todo')
        } catch (error) {
            Pop.error(error)
        }
    }


}