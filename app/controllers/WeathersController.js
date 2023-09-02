import { AppState } from "../AppState.js"
import { weathersService } from "../services/WeathersService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawWeather() {
    console.log('drawing weather')
    let weather = AppState.weather
    setHTML('weather', weather.WeatherTemplate)
}


function _drawClock() {
    console.log('drawing clock')
    let time = new Date();
    document.getElementById('displayTime').innerText = time.toLocaleTimeString();
    setTimeout(_drawClock, 1000);
}


export class WeathersController {
    constructor() {

        _drawClock()
        console.log('weather controller')
        this.getWeather()
        AppState.on('weather', _drawWeather)

    }

    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }

    // toggleTemp() {
    //     weathersService.toggleTemp()
    // }


}