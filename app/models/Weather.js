


export class Weather {
    constructor(data) {
        this.name = data.name
        this.tempC = Math.round(data.main.temp - 273.15)
        this.tempF = Math.round(((data.main.temp - 273.15) * 9 / 5) + 32)
        this.description = data.weather[0].main

    }

    get WeatherTemplate() {
        return `
        <div class="row weatherCard">
            <div class="col-7 text-end">
            <h6 class="bs-1 bt-2">${this.tempC} °C</h6>
            <h6 class="bs-1">${this.tempF} °F</h6>
            </div>
            <div class="col-5 text-start d-flex align-items-center">
            <h6 class="">${this.description}</h6>
            </div>
        </div>
        
        `

    }

}