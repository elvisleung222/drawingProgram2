const Bucket = require("../src/Bucket");

test('Bucket with y < 1 throws exception', () => {
    expect(() => {
        bucket = new Bucket(1, -5, 'o', {width: 5, height: 5});
    }).toThrow('error: y cannot be zero negative');
});

test('Bucket with x < 1 throws exception', () => {
    expect(() => {
        bucket = new Bucket(-5, 5, 'o', {width: 5, height: 5});
    }).toThrow('error: x cannot be zero negative');
});

test('Bucket with x > width throws exception', () => {
    expect(() => {
        bucket = new Bucket(6, 5, 'o', {width: 5, height: 5});
    }).toThrow('error: x is out of the range of Canvas');
});

test('Bucket with y > height throws exception', () => {
    expect(() => {
        bucket = new Bucket(5, 7, 'o', {width: 5, height: 5});
    }).toThrow('error: y is out of the range of Canvas');
});

test('Bucket with no colour throws exception', () => {
    expect(() => {
        bucket = new Bucket(5, 5, null, {width: 5, height: 5});
    }).toThrow('error: colour must be a single character');

    expect(() => {
        bucket = new Bucket(5, 5, undefined, {width: 5, height: 5});
    }).toThrow('error: colour must be a single character');
});

test('Bucket with colour character != 1 throws exception', () => {
    expect(() => {
        bucket = new Bucket(5, 5, '', {width: 5, height: 5});
    }).toThrow('error: colour must be a single character');

    expect(() => {
        bucket = new Bucket(5, 5, 'oo', {width: 5, height: 5});
    }).toThrow('error: colour must be a single character');
});

test('Fills connected points accordingly', () => {
    const testCanvas = new Canvas(20, 4)
    testCanvas.canvas = [
        [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','x','x','x','x','x',' ',' '],
        ['x','x','x','x','x','x',' ',' ',' ',' ',' ',' ',' ','x',' ',' ',' ','x',' ',' '],
        [' ',' ',' ',' ',' ','x',' ',' ',' ',' ',' ',' ',' ','x','x','x','x','x',' ',' '],
        [' ',' ',' ',' ',' ','x',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']]
    
    const bucket = new Bucket(10, 3, 'o', testCanvas);
    testCanvas.draw(bucket.getPoints());
    expect(testCanvas.canvas).toEqual([
        ['o','o','o','o','o','o','o','o','o','o','o','o','o','x','x','x','x','x','o','o'],
        ['x','x','x','x','x','x','o','o','o','o','o','o','o','x',' ',' ',' ','x','o','o'],
        [' ',' ',' ',' ',' ','x','o','o','o','o','o','o','o','x','x','x','x','x','o','o'],
        [' ',' ',' ',' ',' ','x','o','o','o','o','o','o','o','o','o','o','o','o','o','o']]
    )
});