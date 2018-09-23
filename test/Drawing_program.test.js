const DrawingProgram = require('../src/Drawing_program');
// var stdout = require("test-console").stdout;

let outputData = "";
storeLog = inputs => (outputData += inputs);
test('xxx', () => {
    return new Promise((resolve) => {
        const outputString = [];
        const process_output = (output) => {
            outputString.push(output);
        }
    
        const real_stdout  = process.stdout.write;
        process.stdout.write = process_output;
    
        
    
        // console["log"] = jest.fn(storeLog);
        const dp = new DrawingProgram();
        // var output = 
        
        // stdout.inspectSync(function(output) {
        // process.stdout.write("quit drawing program.");
        dp._processCommand('q'.split(' '))
        expect(outputString).toEqual("quit drawing program.");
        resolve();
    });

    // });
    // console.log(output)
    
});