class Point{
    constructor(x, y, char){
        this._validate(x, y, char);
        this.x = x;
        this.y = y;
        this.char = char;
    }

    getPoint(){
        return this;
    }

    _validate(x, y, char){
        if (x < 1)
            throw 'Error: x cannot be zero or negative';
        if (y < 1)
            throw 'Error: y cannot be zero or negative';
        if (char.length > 1)
            throw 'Error: point can only contain a single character';
        else if (char.length < 1)
            throw 'Error: point must contain a single character';
        return;
    }

    toString(){
        return '(' + this.x + ',' + this.y +')';
    }
}
module.exports = Point;