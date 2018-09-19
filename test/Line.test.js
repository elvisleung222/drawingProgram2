const Line = require('../src/Line');

test('Line with a point at negative x coordination throws exception', () => {
    expect(() => {
        line = new Line(-1, 1, 1, 1, 'o');
    }).toThrow('Error: x cannot be negative');
});

test('Line with a point at negative x coordination throws exception', () => {
    expect(() => {
        line = new Line(1, 1, -1, 1, 'o');
    }).toThrow('Error: x cannot be negative');
});

test('Line with a point at negative y coordination throws exception', () => {
    expect(() => {
        line = new Line(1, -1, 1, 1, 'o');
    }).toThrow('Error: y cannot be negative');
});

test('Line with a point at negative y coordination throws exception', () => {
    expect(() => {
        line = new Line(1, 1, 1, -1, 'o');
    }).toThrow('Error: y cannot be negative');
});

test('Line with zero length throws exception', () => {
    expect(() => {
        line = new Line(1, 2, 1, 2, 'o');
    }).toThrow('Error: line length must be greater than zero');
});

test('Line with slope 1 > x > 0 throws exception', () => {
    expect(() => {
        line = new Line(1, 2, 3, 4, 'o');
    }).toThrow('Error: line can only be either vertical or horizontal');
});

test('Line with slope 0 > x > -1 throws exception', () => {
    expect(() => {
        line = new Line(3, 4, 1, 2, 'o');
    }).toThrow('Error: line can only be either vertical or horizontal');
});

test('Line with no char input throws exception', () => {
    expect(() => {
        line = new Line(1, 2, 5, 2, '');
    }).toThrow('Error: point must contain a single character');
});

test('Line with muti-char input throws exception', () => {
    expect(() => {
        line = new Line(1, 2, 5, 2, 'ox');
    }).toThrow('Error: point can only contain a single character');
});

test('Line length of (0,5) to (0,10) is 5', () => {
    line = new Line(0, 5, 0, 10, 'o');
    expect(line.length()).toBe(5);
});

test('Line length of (0,5) to (9,5) is 5', () => {
    line = new Line(0, 5, 9, 5, 'o');
    expect(line.length()).toBe(9);
});

test('Accepts vertical line (1,2) to (1,6)', () => {
    line = new Line(1, 2, 1, 6, 'o');
    expect(line.isVertical).toBe(true);
    expect(line.isHorizontal).toBe(false);
    expect(line.length()).toBe(4);
    var y = 2;
    line.points.forEach((point) => {
        expect(point.x).toBe(1);
        expect(point.y).toBe(y);
        expect(point.char).toBe('o');
        y++;
    });
});

test('Accepts horizontal line (9,5) to (28,5)', () => {
    line = new Line(9, 5, 28, 5, 'o');
    expect(line.isVertical).toBe(false);
    expect(line.isHorizontal).toBe(true);
    expect(line.length()).toBe(19);
    var x = 9;
    line.points.forEach((point) => {
        expect(point.x).toBe(x);
        expect(point.y).toBe(5);
        expect(point.char).toBe('o');
        x++;
    });
});