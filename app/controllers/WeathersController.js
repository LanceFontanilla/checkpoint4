import { AppState } from "../AppState.js"
import { Weather } from "../models/Weather.js"
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

function _drawTempElem() {
    console.log('drawing toggle')
    let tempCelem = document.getElementById('tempC')
    let tempFelem = document.getElementById('tempF')

    if (AppState.isVisible == true) {
        tempCelem.style.display = 'none'
        tempFelem.style.display = 'block'
    } else {
        tempCelem.style.display = 'block'
        tempFelem.style.display = 'none'
    }

}


export class WeathersController {
    constructor() {

        _drawClock()
        this.getWeather()
        console.log('weather controller')
        AppState.on('weather', _drawWeather)
        AppState.on('isVisible', _drawTempElem)

    }

    async getWeather() {
        try {
            await weathersService.getWeather()
        } catch (error) {
            Pop.error(error)
        }
    }

    toggleTempDisplay() {
        weathersService.toggleTempDisplay()
    }


}