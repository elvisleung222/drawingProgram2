class Point{
    constructor(x, y, colour){
        this._validate(x, y, colour);
        this.x = x;
        this.y = y;
        this.colour = colour;
    }

    // Public functions
    getPoint(){
        return this;
    }

    // Helper functions
    _validate(x, y, colour){
        if (x < 1)
            throw 'error: x cannot be zero or negative';
        if (y < 1)
            throw 'error: y cannot be zero or negative';
        if (colour.length > 1)
            throw 'error: point can only contain a single colouracter';
        else if (colour.length < 1)
            throw 'error: point must contain a single colouracter';
        return;
    }

    toString(){
        return '(' + this.x + ',' + this.y +')';
    }
}
module.exports = Point;