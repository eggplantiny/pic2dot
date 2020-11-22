class App {
    constructor () {
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas)

        this.ctx = this.canvas.getContext('2d')
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

        this.isDown = false

        this.resize()

        window.addEventListener('resize', this.resize.bind(this), false)
        document.addEventListener('mousedown', this.onDown.bind(this), false)
        document.addEventListener('mousemove', this.onMove.bind(this), false)
        document.addEventListener('mouseup', this.onUp.bind(this), false)

        if (!!('ontouchstart' in window)) {
            document.addEventListener('touchstart', this.onTouchStart.bind(this), false)
            document.addEventListener('touchmove', this.onTouchMove.bind(this), false)
            document.addEventListener('touchend', this.onTouchEnd.bind(this), false)
        }

        window.requestAnimationFrame(this.animate.bind(this))
    }

    resize () {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * this.pixelRatio
        this.canvas.height = this.stageHeight * this.pixelRatio
        this.ctx.scale(this.pixelRatio, this.pixelRatio)
    }

    animate () {
        window.requestAnimationFrame(this.animate.bind(this))
    }

    onDown (e) {
        this.isDown = true
    }

    onMove (e) {
        if (this.isDown) {
        }
    }

    onUp (e) {
        this.isDown = false
    }

    onTouchStart (e) {
        this.isDown = true
        const touch = e.touches[0]
        const { pageX, pageY } = touch
    }

    onTouchMove (e) {
        const touch = e.touches[0]
        const { pageX, pageY } = touch

        if (this.isDown) {
        }
    }

    onTouchEnd (e) {
        this.isDown = false
    }
}

window.onload = () => new App()
