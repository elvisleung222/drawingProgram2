const DrawingProgram = require('./Drawing_program');

async function main() {
    var dp = new DrawingProgram();
    while(!dp.is_quit()){
      await dp.commandInput();
    }
  }
  
main();