const readline = require('readline');

class DrawingProgram {
  constructor(){
    this.quit = false;
  }

  async commandInput(){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise((resolve, reject) => {
      rl.question('enter command: ', (command) => {
        if (command == 'quit')
          this.quit = true;
        console.log(command, 'test');
        rl.close();
        resolve();
      });
    });
  }

  is_quit(){
    return this.quit;
  }
}

async function main() {
  var dp = new DrawingProgram();
  while(!dp.is_quit()){
    await dp.commandInput()
  }
}

main();