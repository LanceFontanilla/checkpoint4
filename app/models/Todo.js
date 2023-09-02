import { generateId } from "../utils/GenerateId.js"



export class Todo {
    constructor(data) {
        this.id = generateId()

        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId

    }

    get TodoTemplate() {
        return `
        <div class="container-fluid">
            <div class="row justify-content-evenly d-flex align-items-center">
                <div class="col-1 form-check text-dark">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </div>
            <span class=" col-8 align-items-center">${this.description}</span>
            <button class="col-1 btn btn-dark text-light justify-content-center d-flex"><span class="mdi mdi-delete-forever"> </span></button>
        </div>
        
        `
    }

}