class Point{
    constructor(x, y, char){
        this._validate(x, y, char);
        this.x = x;
        this.y = y;
        this.char = char;
    }

    _validate(x, y, char){
        if (x < 0)
            throw 'Error: x cannot be negative';
        if (y < 0)
            throw 'Error: y cannot be negative';
        if (char.length > 1)
            throw 'Error: point can only contain single character';
        else if (char.length < 1)
            throw 'Error: point must contain single character';
        return;
    }

    toString(){
        return '(' + this.x + ',' + this.y +')';
    }
}
module.exports = Point;