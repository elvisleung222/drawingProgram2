const Line = require('./Line');

class Rectangle{
    constructor(x1, y1, x2, y2, colour){
        this.topLine = new Line(x1, y1, x2, y1, colour)
        this.bottomLine = new Line(x1, y2, x2, y2, colour)
        this.leftLine = new Line(x1, y1, x1, y2, colour)
        this.rightLine = new Line(x2, y1, x2, y2, colour)
    }
    
    getPoints(){
        return this.topLine.getPoints().concat(
            this.bottomLine.getPoints().concat(
                this.leftLine.getPoints().concat(
                    this.rightLine.getPoints()
                )
            )
        );
    }
}
module.exports = Rectangle;