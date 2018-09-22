const Point = require('../src/Point');

test('Point with negative x throws exception', () => {
    expect(() => {
        point = new Point(-1, 1, 'o')
    }).toThrow('Error: x cannot be zero or negative');
});

test('Point with x = 0 throws exception', () => {
    expect(() => {
        point = new Point(0, 1, 'o')
    }).toThrow('Error: x cannot be zero or negative');
});

test('Point with negative y throws exception', () => {
    expect(() => {
        point = new Point(1, -1, 'o')
    }).toThrow('Error: y cannot be zero or negative');
});

test('Point with y=0 throws exception', () => {
    expect(() => {
        point = new Point(1, 0, 'o')
    }).toThrow('Error: y cannot be zero or negative');
});

test('Point with non-single char throws exception', () => {
    expect(() => {
        point = new Point(1, 1, 'oo')
    }).toThrow('Error: point can only contain a single character');
});

test('Point with no char throws exception', () => {
    expect(() => {
        point = new Point(1, 1, '')
    }).toThrow('Error: point must contain a single character');
});

test('Accepts point at (1,1)', () => {
    point = new Point(1, 1, 'o')
    expect(point.x).toBe(1);
    expect(point.y).toBe(1);
    expect(point.char).toBe('o');
});

test('Accepts point at any positive non-zero coordinate', () => {
    point = new Point(28, 3, 'o')
    expect(point.x).toBe(28);
    expect(point.y).toBe(3);
    expect(point.char).toBe('o');
});

// test getPoints()
