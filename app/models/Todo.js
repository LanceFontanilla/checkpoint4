import { AppState } from "../AppState.js"

export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
        this.count = data.count
        this.completedClass = data.completed ? 'todo-complete' : ''
        this.checkboxState = data.completed ? 'checked' : ''
    }

    get TodoTemplate() {
        return `
        <div class="todo">
            <div class="row justify-content-evenly d-flex align-items-center">
            <div class="col-1 form-check text-dark">
            <input class="form-check-input" ${this.checkboxState}  type="checkbox" name="completed" id="completed" onchange="app.TodosController.completeTodo('${this.id}')">
            </div>
            <span class="${this.completedClass} col-8 align-items-center">${this.description}</span>
            ${this.ComputeDeleteButton}
        </div>
        `
    }

    get ComputeDeleteButton() {
        if (AppState.account == null || AppState.account.id != this.creatorId) return ''
        return `<button class="col-1 btn btn-dark text-light justify-content-center d-flex" onclick="app.TodosController.deleteTodo('${this.id}')"><span class="mdi mdi-delete-forever"> </span></button>`
    }
}