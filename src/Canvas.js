class Canvas{
    constructor(width, height){
        this._validate(width, height);
        this.width = width;
        this.height = height;
        this.pointsArray = [];
        this._generate(width, height);
    }
    
    // Public functions
    draw(points){
        if (points.length > 0)
            for(var i=0; i < points.length; i++){
                this.pointsArray[parseInt(points[i].y)-1][parseInt(points[i].x)-1] = points[i].colour;
            }
    }
    
    print(){
        for(var i=-2; i < this.width; i++){
            process.stdout.write('-');
        }  
        process.stdout.write('\n');
        for(var row=0; row <this.height; row++){
            process.stdout.write('|');
            for(var col=0; col <this.width; col++)
                process.stdout.write(this.pointsArray[row][col]);
            process.stdout.write('|\n');
        }
        for(var i=-2; i < this.width; i++)
            process.stdout.write('-');
        process.stdout.write('\n\n');
    }
    
    // Private functions
    _validate(width, height){
        if (width < 1)
            throw 'error: width must be greater than zero';
        if (height < 1)
            throw 'error: height must be greater than zero';
    }
    
    _generate(width, height){
        for (var i = 0; i < height; i++){
            var col = [];
            for (var j = 0; j < width; j++){
                col.push(' ');
            }
            this.pointsArray.push(col);
        }
    }
}
module.exports = Canvas;