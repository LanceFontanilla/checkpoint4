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

    // toggleTemp(tempId) {
    //     let f = tempId + 'On';
    //     let c = tempId + 'Off';
    //     if (document.getElementById(f).style.display == 'block') {
    //         document.getElementById(f).style.display = 'none';
    //         document.getElementById(c).style.display = 'block';
    //     } else {
    //         document.getElementById(c).style.display = 'none';
    //         document.getElementById(f).style.display = 'block'
    //     }
    // }


}

export const weathersService = new WeathersService