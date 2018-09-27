const DrawingProgram = require("../src/Drawing_program");
const Canvas = require("../src/Canvas");
jest.mock('../src/Canvas');


test('xxx', () => {
    const dp = new DrawingProgram();
    dp._processCommand('c 10 10'.split(' '));
    expect(Canvas).toHaveBeenCalledWith(10,10);
});