class Fruit {
    constructor(p5, boundary, gravity, vyRandomFactor) {
        this.diameter = 50
        this.x = Math.random() * ( (boundary - 50) - 50 ) + 50
        this.y = p5.height + this.diameter
        this.vy = Math.random() * (vyRandomFactor+3 - vyRandomFactor-3) + vyRandomFactor-3
        this.vx = Math.random() * (2 - (-2)) + (-2)
        this.gravity = gravity
        this.isShown = true
        this.p5 = p5
        this.boundary = boundary
    }

    move() {
        this.y -= this.vy
        // this.x += this.vx
        this.vy -= this.gravity
        // Memantulkan
        // if( Math.abs(this.boundary - this.x) <= this.diameter/2){
        //     this.vx *= -1
        // }
        // if( Math.abs(0 - this.x) <= this.diameter/2 ){
        //     this.vx *= -1
        // }
    }

    unShow(){
        this.isShown = false
    }

    show() {
        if(this.isShown){
            this.p5.fill(0, 255, 0)
            this.p5.ellipse(this.x, this.y, this.diameter, this.diameter)
        }
    }
}

export default Fruit