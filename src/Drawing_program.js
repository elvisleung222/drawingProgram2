const readline = require('readline');
const Point = require('./Point');
const Line = require('./Line');
const Rectangle = require('./Rectangle');
const Bucket = require('./Bucket');
const Canvas = require('./Canvas');

class DrawingProgram {
  constructor(){
    this.quit = false;
    this.canvas = null;
    this.defaultChar = 'x';
  }

  async commandInput() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise((resolve, reject) => {
      rl.question('enter command: ', (command) => {
        try{
          this._processCommand(command.split(' '));
        }
        catch(err){
          console.log(err.message);
        }
        
        rl.close();
        resolve();
      });
    });
  }

  is_quit(){
    return this.quit;
  }
  
  _processCommand(cmd){
    switch(cmd[0]){
      case 'c':
      case 'C':
        this.canvas = new Canvas(parseInt(cmd[1]), parseInt(cmd[2]));
        break;
      case 'l':
      case 'L':
        var line = new Line(parseInt(cmd[1]), parseInt(cmd[2]), parseInt(cmd[3]), parseInt(cmd[4]), this.defaultChar);
        this.canvas.draw(line.getPoints());
        break;
      case 'r':
      case 'R':
        var rectangle = new Rectangle(parseInt(cmd[1]), parseInt(cmd[2]), parseInt(cmd[3]), parseInt(cmd[4]), this.defaultChar);
        this.canvas.draw(rectangle.getPoints());
        break;
      case 'b':
      case 'B':
        if (cmd[2] == this.defaultChar)
          break;
        var bucket = new Bucket(parseInt(cmd[1]), parseInt(cmd[2]), cmd[3], this.canvas);
        this.canvas.draw(bucket.getPoints());
        break;
      case 'q':
      case 'Q':
        console.log('Quit drawing program.');
        this.quit = true;
        break;
      default:
        console.log('Error: wrong cmd');
    }
    if (this.canvas != null && this.is_quit() != true)
      this.canvas.print();
  }
}

async function main() {
  var dp = new DrawingProgram();
  while(!dp.is_quit()){
    await dp.commandInput();
  }
}

main();