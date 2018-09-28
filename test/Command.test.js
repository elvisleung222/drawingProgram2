const Command = require('../src/Command');
const fakeCanvas = {
    width: 10,
    height: 4,
    draw(){}
}

test('Assigns correct handler to canvas command', () => {
    const cmd = new Command('C 20 4'.split(' '), null)
    const _canvasHandler = jest.spyOn(cmd, '_canvasHandler');
    try{
        cmd.render();
    }
    catch(error){
        
    }
    finally{
        expect(_canvasHandler).toHaveBeenCalled();
    }
});

test('Assigns correct handler to line command', () => {
    const cmd = new Command('L 1 2 6 2'.split(' '), fakeCanvas)
    const _lineHandler = jest.spyOn(cmd, '_lineHandler');
    try{
        cmd.render();
    }
    catch(error){
        
    }
    finally{
        expect(_lineHandler).toHaveBeenCalled();
    }
});

test('Assigns correct handler to rectangle command', () => {
    const cmd = new Command('R 14 1 18 3'.split(' '), fakeCanvas)
    const _rectangleHandler = jest.spyOn(cmd, '_rectangleHandler');
    try{
        cmd.render();
    }
    catch(error){

    }
    finally{
        expect(_rectangleHandler).toHaveBeenCalled();
    }
});

test('Assigns correct handler to bucket command', () => {
    const cmd = new Command('B 10 3 o'.split(' '), fakeCanvas)
    const _bucketHandler = jest.spyOn(cmd, '_bucketHandler');
    try{
        cmd.render();
    }
    catch(error){

    }
    finally{
        expect(_bucketHandler).toHaveBeenCalled();
    }
});

test('Throws exception for unknow command', () => {
    expect(() => {
        const cmd = new Command('T 10 3 9 8'.split(' '), null);
        cmd.render();
    }).toThrow('error: unknown command');
});

test('Throws exception x is out of range of canvas', () => {
    const cmd = new Command([], fakeCanvas);
    expect(() => {
        cmd._validate(-1,1)
    }).toThrow('error: x is out of range of canvas');
    expect(() => {
        cmd._validate(11,1)
    }).toThrow('error: x is out of range of canvas');
});

test('Throws exception y is out of range of canvas', () => {
    const cmd = new Command([], fakeCanvas);
    expect(() => {
        cmd._validate(1,-1)
    }).toThrow('error: y is out of range of canvas');
    expect(() => {
        cmd._validate(1,5)
    }).toThrow('error: y is out of range of canvas');
});

test('Throws exception if trying to convert a non-integer string to integer', () => {
    const cmd = new Command([], fakeCanvas);
    expect(() => {
        cmd._strToNumber('x')
    }).toThrow('error: x is not an integer');
    expect(() => {
        console.log('debug', cmd._strToNumber('1.1'))
    }).toThrow('error: 1.1 is not an integer');
    expect(() => {
        cmd._strToNumber('-2.1')
    }).toThrow('error: -2.1 is not an integer');
});