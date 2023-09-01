import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"


class QuotesService {

    async getQuote() {
        const res = await api.get('api/quotes')
        console.log(res.data, '[Getting Sandbox Quote]')
        AppState.quote = new Quote(res.data)
        console.log(AppState.quote)
    }

}

export const quotesService = new QuotesService