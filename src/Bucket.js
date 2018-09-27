const Point = require('./Point');
const Canvas = require('./Canvas');
const Line = require('./Line');

class Bucket{
    constructor(x, y, colour, canvas){
        this._validate(x, y, colour, canvas);
        this.canvas = canvas.canvas;
        this.height = canvas.height;
        this.width = canvas.width;
        this.originalColour = canvas.canvas[y-1][x-1];
        this.targetColour = colour;
        this.points = [];
        this._fillNeighbors(x,y);
    }
    
    getPoints(){
        return this.points;   
    }
    
    _validate(x, y, colour, canvas){
        if (y < 1)
            throw 'error: y cannot be zero negative';
        if (x < 1)
            throw 'error: x cannot be zero negative';
        if (x > canvas.width)
            throw 'error: x is out of the range of Canvas';
        if (y > canvas.height)
            throw 'error: y is out of the range of Canvas';
        if (colour == undefined || colour.length != 1)
            throw 'error: colour must be a single character';
    }
    
    _fillNeighbors(x,y){
        this.canvas[y-1][x-1] = this.targetColour;
        this.points.push({
            x: x,
            y: y,
            colour: this.targetColour
        })
        // left
        if (x-1 >= 1 && this.canvas[y-1][x-2] == this.originalColour)
            this._fillNeighbors(x-1,y);
        // right
        if (x+1 <= this.width && this.canvas[y-1][x] == this.originalColour)
            this._fillNeighbors(x+1,y);
        // top
        if (y-1 >= 1 && this.canvas[y-2][x-1] == this.originalColour)
            this._fillNeighbors(x,y-1);
        // bottom
        if (y+1 <= this.height && this.canvas[y][x-1] == this.originalColour)
            this._fillNeighbors(x,y+1);
    }
}
module.exports = Bucket;