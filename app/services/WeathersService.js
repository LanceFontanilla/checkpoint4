import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
import { api } from "./AxiosService.js"






class WeathersService {

    async getWeather() {
        const res = await api.get('api/weather')
        console.log(res.data, 'GettingSandbox Weather')
        AppState.weather = new Weather(res.data)
        console.log(AppState.weather)

    }

    toggleTempDisplay() {
        AppState.isVisible = !AppState.isVisible
        console.log(AppState.isVisible)
        AppState.emit('isVisible')

    }


}

export const weathersService = new WeathersService