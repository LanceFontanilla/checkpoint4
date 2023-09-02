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
 
        
        `
    }

}