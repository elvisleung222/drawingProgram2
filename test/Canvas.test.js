const Canvas = require('../src/Canvas');
const Line = require('../src/Line');

test('Canvas with width less than 1 throws exception', () => {
    expect(() => {
        canvas = new Canvas(-1, 2);
    }).toThrow('error: width must be greater than zero');
});

test('Canvas with height less than 1 throws exception', () => {
    expect(() => {
        canvas = new Canvas(4, -1);
    }).toThrow('error: height must be greater than zero');
});

test('Accepts canvas with width 3 and height 5', () => {
    canvas = new Canvas(3, 5);
    expect(3).toBe(canvas.width);
    expect(5).toBe(canvas.height);
    expect([ 
        [ ' ', ' ', ' ' ],
        [ ' ', ' ', ' ' ],
        [ ' ', ' ', ' ' ],
        [ ' ', ' ', ' ' ],
        [ ' ', ' ', ' ' ]
        ]).toEqual(canvas.canvas);
});

test('Accepts canvas with width 1 and height 1', () => {
    canvas = new Canvas(1, 1);
    expect(1).toBe(canvas.width);
    expect(1).toBe(canvas.height);
    expect([ [ ' ' ] ]).toEqual(canvas.canvas);
});

test('Draws points on canvas correctly', () => {
    const canvas = new Canvas(10, 10);
    const testPoints = [
        { x: 1, y: 6, colour: 'o' },
        { x: 2, y: 6, colour: 'o' },
        { x: 3, y: 6, colour: 'o' },
        
    ]
    expect(canvas.canvas[5][0]).toEqual(' ');
    expect(canvas.canvas[5][1]).toEqual(' ');
    expect(canvas.canvas[5][2]).toEqual(' ');
    canvas.draw(testPoints)
    expect(canvas.canvas[5][0]).toEqual('o');
    expect(canvas.canvas[5][1]).toEqual('o');
    expect(canvas.canvas[5][2]).toEqual('o');
});