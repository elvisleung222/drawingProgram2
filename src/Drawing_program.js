const readline = require('readline');
const Point = require('./Point');
const Line = require('./Line');
const Rectangle = require('./Rectangle');
const Bucket = require('./Bucket');
const Canvas = require('./Canvas');
const Command = require('./Command');

class DrawingProgram {
  constructor(){
    this.quit = false;
    this.canvas = null;
    this.history = [];
  }
  // Public functions
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
        catch(error){
          console.log(error);
        }
        rl.close();
        resolve();
      });
    });
  }

  do_quit(){
    return this.quit;
  }
  
  // Helper functions
  _processCommand(cmd){
    if(cmd[0].toUpperCase() == 'Q'){
      console.log('quit drawing program.');
      this.quit = true;
      return;
    }else{
      var command = new Command(cmd, this.canvas);
      this.canvas = command.render();
      this.history.push(cmd);
    }
    if (this.canvas != null)
      this.canvas.print();
  }
}
module.exports = DrawingProgram;