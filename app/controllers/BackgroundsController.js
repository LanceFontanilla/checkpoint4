import { AppState } from "../AppState.js"
import { backgroundsService } from "../services/BackgroundsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawBackground() {
    //console.log('drawing')
    let background = AppState.background
    document.body.style.backgroundImage = `url(${background.imgUrl})`
    setHTML('background', background.BackgroundTemplate)
}

export class BackgroundsController {
    constructor() {
        console.log('backgrounds controller')
        this.getBackground()
        AppState.on('background', _drawBackground)
    }
    async getBackground() {
        try {
            await backgroundsService.getBackground()
        } catch (error) {
            Pop.error(error)
        }
    }



}