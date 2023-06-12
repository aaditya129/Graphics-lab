class Translate {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    apply(rectangle) {
        rectangle.x += this.dx;
        rectangle.y += this.dy;
    }
}
