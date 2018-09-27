const Bucket = require("../src/Bucket");
const Canvas = require("../src/Canvas");

test('Bucket with y < 1 throws exception', () => {
    expect(() => {
        bucket = new Bucket(1, -5, 'o', new Canvas(5,5));
    }).toThrow('error: y cannot be zero negative');
});

test('Bucket with x < 1 throws exception', () => {
    expect(() => {
        bucket = new Bucket(-5, 5, 'o', new Canvas(5,5));
    }).toThrow('error: x cannot be zero negative');
});

test('Bucket with x > width throws exception', () => {
    expect(() => {
        bucket = new Bucket(6, 5, 'o', new Canvas(5,5));
    }).toThrow('error: x is out of the range of Canvas');
});

test('Bucket with y > height throws exception', () => {
    expect(() => {
        bucket = new Bucket(5, 7, 'o', new Canvas(5,5));
    }).toThrow('error: y is out of the range of Canvas');
});

test('Bucket with no colour throws exception', () => {
    expect(() => {
        bucket = new Bucket(5, 5, null, new Canvas(5,5));
    }).toThrow('error: colour must be a single character');

    expect(() => {
        bucket = new Bucket(5, 5, undefined, new Canvas(5,5));
    }).toThrow('error: colour must be a single character');
});

test('Bucket with colour character != 1 throws exception', () => {
    expect(() => {
        bucket = new Bucket(5, 5, '', new Canvas(5,5));
    }).toThrow('error: colour must be a single character');

    expect(() => {
        bucket = new Bucket(5, 5, 'oo', new Canvas(5,5));
    }).toThrow('error: colour must be a single character');
});