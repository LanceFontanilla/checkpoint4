

export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
        <div class="text-center p-3">
            <h4>${this.author}</h4>
            <h2>${this.content}</h2>
        </div>
        
        `
    }

}