import { AppState } from "../AppState.js"
import { quotesService } from "../services/QuotesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuote() {
    console.log('drawing Quote')
    let quote = AppState.quote
    setHTML('quote', quote.QuoteTemplate)
}


export class QuotesController {
    constructor() {
        console.log('quotes controller')
        this.getQuote()
        AppState.on('quote', _drawQuote)
    }


    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.error(error)
        }
    }
}