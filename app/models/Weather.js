


export class Weather {
    constructor(data) {
        this.name = data.name
        this.tempC = Math.round(data.main.temp - 273.15)
        this.tempF = Math.round(((data.main.temp - 273.15) * 9 / 5) + 32)
        this.description = data.weather[0].main
        this.icon = data.weather[0].icon
    }

    get WeatherTemplate() {
        return `
        <div class="row weatherCard">
            <div>
                <div class="col-12 text-center selectable">
                <h6 class="pt-2 bs-1" id="tempF" style="display:block"
                onclick="app.WeathersController.toggleTempDisplay()">
                ${this.tempF} °F</h6>
                </div>
                <div class="col-12 text-center selectable">
                <h6 class="pt-2 bs-1" id="tempC" style="display:none"
                onclick="app.WeathersController.toggleTempDisplay()">
                ${this.tempC} °C</h6>
                </div>
            </div>
                <div class="col-6 text-center justify-content-center">
                <h1></h1>
                <h6 class="">${this.description}</h6>
                </div>
                <div class="col-6 text-center">
                <img src=" https://openweathermap.org/img/wn/${this.icon}.png" alt="">
                </div>
        </div>
        
        `

    }

}