const PI2 = Math.PI * 2
const BOUNCE = 0.82

const stateEnum = {
    IDLE: 'IDLE',
    PROCESSING: 'PROCESSING',
    FINISHED: 'FINISHED'
}

export class Dot {
    constructor (x, y, radius, pixelSize, red, green, blue) {
        this.x = x
        this.y = y
        this.targetRadius = radius
        this.radius = 0
        this.radiusV = 0
        this.pixelSize = pixelSize
        this.pixelSizeHalf = pixelSize / 2
        this.red = red
        this.green = green
        this.blue = blue
        this.state = stateEnum.IDLE
    }

    animate (ctx) {
        if (this.state === stateEnum.IDLE) {
            this.state = stateEnum.PROCESSING
        } else if (this.state === stateEnum.PROCESSING && Math.abs(this.radiusV) < 0.1) {
            this.state = stateEnum.FINISHED
        }

        ctx.beginPath()
        ctx.fillStyle = '#000'
        ctx.fillRect(
            this.x - this.pixelSizeHalf,
            this.y - this.pixelSizeHalf,
            this.pixelSize, this.pixelSize
        )

        const accel = (this.targetRadius - this.radius) / 2
        this.radiusV += accel
        this.radiusV *= BOUNCE
        this.radius += this.radiusV
        
        ctx.fillStyle = `rgb(${this.red}, ${this.green}, ${this.blue})`
        ctx.arc(this.x, this.y, this.radius, 0, PI2, false)
        ctx.fill()
    }

    reset () {
        this.radius = 0
        this.radiusV = 0
        this.state = stateEnum.IDLE
    }

    isFinished () {
        return this.state === stateEnum.FINISHED
    }

    log () {
        const { radiusV, radius, x, y } = this
        console.log({ radiusV, radius, x, y })
    }
}