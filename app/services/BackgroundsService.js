import { AppState } from "../AppState.js"
import { Background } from "../models/Background.js"
import { api } from "./AxiosService.js"


class BackgroundsService {

    async getBackground() {
        const res = await api.get('api/images')
        console.log(res.data, '[Getting Sandbox Image]')
        AppState.background = new Background(res.data)
        console.log(AppState.background)
    }

}

export const backgroundsService = new BackgroundsService