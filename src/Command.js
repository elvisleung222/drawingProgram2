const Canvas = require('./Canvas');
const Line = require('./Line');
const Rectangle = require('./Rectangle');
const Bucket = require('./Bucket');

class Command{
    
    constructor(command, canvas){
        this.canvas = canvas;
        this.defaultColour = 'x';
        this.cmd = command;
    }
    
    // Public functions
    render(){
        switch(this.cmd[0].toUpperCase()){
            case 'C':
                this._canvasHandler();
                break;
            case 'L':
                this._lineHandler();
                break;
            case 'R':
                this._rectangleHandler();
                break;
            case 'B':
                this._bucketHandler();
                break;
            default:
                throw 'error: unknown command';
        }
        
        return this.canvas;
    }
    
    // Helper functions
    _validate(x, y){
        if(x < 1 || x > this.canvas.width)
            throw 'error: x is out of range of canvas';
        if(y < 1 || y > this.canvas.height)
            throw 'error: y is out of range of canvas';
    }
    
    _strToNumber(num){
        if(Number.isInteger(Number(num)))
            return parseInt(num);
        else
            throw 'error: ' + num + ' is not an integer';
    }
    
    _canvasHandler(){
        if(this.cmd.length !== 3)
            throw 'error: canvas command syntax should be "C w h". Example: "C 20 4"';
        const w = this._strToNumber(this.cmd[1]);
        const h = this._strToNumber(this.cmd[2]);
        if (w < 1)
            throw 'error: width must be greater than zero';
        if (h < 1)
            throw 'error: height must be greater than zero';
        this.canvas = new Canvas(w, h);
    }
    
    _lineHandler(){
        if(this.cmd.length !== 5)
            throw 'error: line command syntax should be "L x1 y1 x2 y2". Example: "L 6 3 6 4"';
        if(this.canvas === null)
            throw 'error: no canvas exists';
        const x1 = this._strToNumber(this.cmd[1]);
        const y1 = this._strToNumber(this.cmd[2]);
        const x2 = this._strToNumber(this.cmd[3]);
        const y2 = this._strToNumber(this.cmd[4]);
        this._validate(x1, y1);
        this._validate(x2, y2);
        let line = new Line(x1, y1, x2, y2, this.defaultColour);
        this.canvas.draw(line.getPoints());
    }
    
    _rectangleHandler(){
        if(this.cmd.length !== 5)
            throw 'error: rectangle command syntax should be "R x1 y1 x2 y2". Example: "R 14 1 18 3"';
        if(this.canvas === null)
            throw 'error: no canvas exists';
        const x1 = this._strToNumber(this.cmd[1]);
        const y1 = this._strToNumber(this.cmd[2]);
        const x2 = this._strToNumber(this.cmd[3]);
        const y2 = this._strToNumber(this.cmd[4]);
        this._validate(x1, y1);
        this._validate(x2, y2);
        let rectangle = new Rectangle(x1, y1, x2, y2, this.defaultColour);
        this.canvas.draw(rectangle.getPoints());
    }
    
    _bucketHandler(){
        if(this.cmd.length !== 4)
            throw 'error: canvas command syntax should be "B x y c". Example: "B 10 3 o"';
        if(this.canvas === null)
            throw 'error: no canvas exists';
        const x = this._strToNumber(this.cmd[1]);
        const y = this._strToNumber(this.cmd[2]);
        this._validate(x, y);
        const colour = this.cmd[3]
        if (this.cmd[2] == this.defaultColour)
          return;
        var bucket = new Bucket(x, y, colour, this.canvas);
        this.canvas.draw(bucket.getPoints());
    }
    
}
module.exports = Command;