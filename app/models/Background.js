

export class Background {
    constructor(data) {
        this.author = data.author
        this.imgUrl = data.imgUrl || data.largeImgUrl || data.imgUrl
    }

    get BackgroundTemplate() {
        return `
        <div class="col-12 text-white">
            <div>
                <div class="text-start">
                <h6>Image by:</h6>
                <h6>${this.author}</h6>
            </div>
        </div>
        
        `
    }

}