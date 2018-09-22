const Rectangle = require('../src/Rectangle');
const Point = require('../src/Point');

function testFourLines(tl, br){
    var rect = new Rectangle(tl.x, tl.y, br.x, br.y, 'o');
    // test top line
    for (var x = tl.x; x <= br.x; x++)
        expect(new Point(x, tl.y, 'o')).toEqual(rect.topLine.getPoints()[x-tl.x]);
    // test bottom line
    for (var x = tl.x; x <= br.x; x++)
        expect(new Point(x, br.y, 'o')).toEqual(rect.bottomLine.getPoints()[x-tl.x]);
    // // test left line
    for (var y = br.y; y <= tl.y; y++)
        expect(new Point(tl.x, y, 'o')).toEqual(rect.leftLine.getPoints()[y-br.y]);
    // // test right line
    for (var y = br.y; y <= tl.y; y++)
        expect(new Point(br.x, y, 'o')).toEqual(rect.rightLine.getPoints()[y-br.y]);
}

test('Accepts square (1,1), (2,2)', () => {
    var tl = { x: 1, y: 1 }; // top-left coordinate
    var br = { x: 2, y: 2 }; // bottom-right coordinate
    testFourLines(tl, br);
});

test('Accepts rectangle A (3,21), (109,20)', () => {
    var tl = { x: 3, y: 21 }; // top-left coordinate
    var br = { x: 109, y: 20 }; // bottom-right coordinate
    testFourLines(tl, br);
});

test('Accepts rectangle B (50,71), (51,29)', () => {
    var tl = { x: 3, y: 21 }; // top-left coordinate
    var br = { x: 109, y: 20 }; // bottom-right coordinate
    testFourLines(tl, br);
});

test('Rectangle with no area on X axis throws exception', () => {
    expect(() => {
        rect = new Rectangle(8, 2, 15, 2, 'o');
    }).toThrow('Error: line length must be greater than zero');
});

test('Rectangle with no area on Y axis throws exception', () => {
    expect(() => {
        rect = new Rectangle(9, 21, 9, 7, 'o');
    }).toThrow('Error: line length must be greater than zero');
});

test('Rectangle starting with negative x throws exception', () => {
    expect(() => {
        rect = new Rectangle(-2, 2, 1, 1, 'o');
    }).toThrow('Error: x cannot be zero or negative');
});

test('Rectangle ending with negative x throws exception', () => {
    expect(() => {
        rect = new Rectangle(2, 2, -1, 1, 'o');
    }).toThrow('Error: x cannot be zero or negative');
});

test('Rectangle starting with negative y throws exception', () => {
    expect(() => {
        rect = new Rectangle(1, -2, 2, 1, 'o');
    }).toThrow('Error: y cannot be zero or negative');
});

test('Rectangle ending with negative y throws exception', () => {
    expect(() => {
        rect = new Rectangle(2, 2, 1, -1, 'o');
    }).toThrow('Error: y cannot be zero or negative');
});
