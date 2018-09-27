const DrawingProgram = require('./Drawing_program');

async function main() {
    var game = new DrawingProgram();
    while(!game.do_quit()){
      await game.commandInput();
    }
  }
  
main();