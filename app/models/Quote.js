

export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
        <div class="quote-wrapper">
            <div class="text-center quote-content p-3">
            <h4 class="">${this.content}</h4>
            </div>
            <div class="text-center quote-author p-3">
            <h5 class="">${this.author}</h5>
            </div>
        </div>
        
        `
    }

}