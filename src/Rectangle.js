const Line = require('./Line');

class Rectangle{
    constructor(x1, y1, x2, y2, char){
        this.topLine = new Line(x1, y1, x2, y1, char)
        this.bottomLine = new Line(x1, y2, x2, y2, char)
        this.leftLine = new Line(x1, y1, x1, y2, char)
        this.rightLine = new Line(x2, y1, x2, y2, char)
    }
    
    getPoints(){
        console.log(this);
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