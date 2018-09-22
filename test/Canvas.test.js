const Canvas = require('../src/Canvas');

test('Canvas with width less than 1 throws exception', () => {
    expect(() => {
        canvas = new Canvas(-1, 2);
    }).toThrow('Error: width must be greater than zero');
});

test('Canvas with height less than 1 throws exception', () => {
    expect(() => {
        canvas = new Canvas(4, -1);
    }).toThrow('Error: height must be greater than zero');
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