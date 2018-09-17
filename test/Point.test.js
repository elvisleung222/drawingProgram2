const Point = require('../src/Point');

test('Point with negative x throws exception', () => {
    expect(() => {
        point = new Point(-1, 1, 'o')
    }).toThrow('Error: x cannot be negative');
});

test('Point with negative y throws exception', () => {
    expect(() => {
        point = new Point(1, -1, 'o')
    }).toThrow('Error: y cannot be negative');
});

test('Point with non-single char throws exception', () => {
    expect(() => {
        point = new Point(1, 1, 'oo')
    }).toThrow('Error: point can only contain single character');
});

test('Point with no char throws exception', () => {
    expect(() => {
        point = new Point(1, 1, '')
    }).toThrow('Error: point must contain single character');
});

test('Accepts point at (0,0)', () => {
    point = new Point(0, 0, 'o')
    expect(point.x).toBe(0);
    expect(point.y).toBe(0);
    expect(point.char).toBe('o');
});

test('Accepts point at any positive coordinate', () => {
    point = new Point(28, 3, 'o')
    expect(point.x).toBe(28);
    expect(point.y).toBe(3);
    expect(point.char).toBe('o');
});
