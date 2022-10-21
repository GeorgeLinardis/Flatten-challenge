const flatten = require('./flatten');

describe('Flatten - one element', () => {
  it('should flatten an array - no params', () => {
    // WHEN flatten is called without params
    const flattened = flatten();
    // THEN it should return an empty array
    expect(flattened).toEqual([]);
  });
  it('should flatten an array - empty array', () => {
    // GIVEN an empty array
    const example = [];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return an empty array
    expect(flattened).toEqual([]);
  });
  it('should flatten an array - null', () => {
    // GIVEN a null value
    const example = null;
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return an empty array
    expect(flattened).toEqual([]);
  });
  it('should flatten an array - empty object', () => {
    // GIVEN an empty object
    const example = {};
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return an empty array
    expect(flattened).toEqual([]);
  });
  it('should flatten an array - string', () => {
    // GIVEN a string
    const example = 'awesome example of string';
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return an empty array
    expect(flattened).toEqual([]);
  });
})

describe('Flatten - array no sublevels', () => {
  it('should flatten an array - case 1', () => {
    // GIVEN an array with no sublevels
    const example = [1, 2, 3];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2, 3]);
  });
  it('should flatten an array - case 2', () => {
    // GIVEN an array with no sublevels
    const example = [1, {}, null, undefined, 'random-string'];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, {}, null, undefined, 'random-string']);
  });
})

describe('Flatten - multiple sublevels', () => {
  it('should flatten an array - case 1', () => {
    // GIVEN an array with multiple sublevels
    const example = [ 1, [2, [ 3 ]] ];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2, 3]);
  });
  it('should flatten an array - case 2', () => {
    // This is the exercise's example

    // GIVEN an array with multiple sublevels
    const example = [ 1, [ 2, [ 3 ] ], 4 ];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2, 3, 4]);
  });
  it('should flatten an array - case 3', () => {
    // GIVEN an array with multiple sublevels
    const example = [ 1, [2, 3, 4, [1, 2]] ];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2, 3, 4, 1, 2]);
  });
  it('should flatten an array - case 4', () => {
    // GIVEN an array with multiple sublevels
    const example = [ 1, [] ];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1]);
  });
  it('should flatten an array - case 5', () => {
    // GIVEN an array with multiple sublevels
    const example = [ 1, ['string'] ];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 'string']);
  });
  it('should flatten an array - case 6', () => {
    // GIVEN an array with multiple sublevels
    const example = [1, ['string', 2, {}]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 'string', 2 , {}]);
  });
  it('should flatten an array - case 8', () => {
    // GIVEN an array with multiple sublevels
    const example = [1, [[[[[[[]]]]]]]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1]);
  });
  it('should flatten an array - case 9', () => {
    // GIVEN an array with multiple sublevels
    const example = [1, [[[[[[[2]]]]]]]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2]);
  });
  it('should flatten an array - case 10', () => {
    // GIVEN an array with multiple sublevels
    const example = [1, [[[[2, [[[]]]]]]]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2]);
  });
  it('should flatten an array - case 11', () => {
    // GIVEN an array with multiple sublevels
    const example = [1, [[[[[2]]]]], ['random-string', [1, [4]]]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2, 'random-string', 1, 4]);
  });
  it('should flatten an array - case 12', () => {
    // GIVEN an array with multiple sublevels
    const example = [1, ['string', [[[2,3, [[{}]]]]]]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 'string', 2, 3, {}]);
  });
  it('should flatten an array - case 13', () => {
    // GIVEN an array with multiple sublevels
    const example = [1, [2, 3], 4, 5, [6, [7, [8]]]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it('should flatten an array - case 14', () => {
    const getNumber = () => {}
    // GIVEN an array with multiple sublevels
    const example = [1, [[{ name: 'My name', number: getNumber }]]];
    // WHEN flatten is called
    const flattened = flatten(example);
    // THEN it should return a flattened array
    expect(flattened).toEqual([1, { name: 'My name', number: getNumber }]);
  });
})
