const Point = require('./Point');

class Line{
    constructor(x1, y1, x2, y2, char){
        this.isVertical = false;
        this.isHorizontal = false;
        this.points = [];
        this._validate(x1, y1, x2, y2);
        this._checkOrientation(x1, y1, x2, y2);
        if (this.isVertical)
            for(var y = Math.min(y1, y2); y <= Math.max(y1, y2); y++)
                this.points.push(new Point(x1, y, char))
        else if (this.isHorizontal)
            for(var x = Math.min(x1, x2); x <= Math.max(x1, x2); x++)
                this.points.push(new Point(x, y1, char))
    }

    length(){
        return this.points.length - 1;
    }
    
    getPoints(){
        return this.points;
    }

    _validate(x1, y1, x2, y2){
        if (x1 != x2 && y1 != y2)
            throw 'error: line can only be either vertical or horizontal';
        if (x1 == x2 && y1 == y2)
            throw 'error: line length must be greater than zero';
    }

    _checkOrientation(x1, y1, x2, y2){
        if (x1 == x2)
            this.isVertical = true;
        else if (y1 == y2)
            this.isHorizontal = true;
    }
}
module.exports = Line;