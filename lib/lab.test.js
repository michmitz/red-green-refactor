const { getName, copyAndPush, capitalizeAndFilter, fetchQuote } = require('./lab-api.js');

describe('getName function', () => {
  it('finds the name of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name)
      .toEqual('spot');
  });
});

describe('copyAndPush function', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const newArray = copyAndPush(numbers, 4);

    expect(newArray)
      .toEqual([1, 2, 3, 4]);
    expect(numbers)
      .toEqual([1, 2, 3]);
  });
});

describe('capitalizeAndFilter function', () => {
  it('takes in an array of strings, capitalizes all strings, and filters out any string that starts with the letter f', () => {
    const coolStrings = ['tubular', 'fantastic', 'cool', 'wow', 'awesome', 'fosho'];
    const lessCoolArray = capitalizeAndFilter(coolStrings);

    expect(lessCoolArray)
      .toEqual(['TUBULAR', 'COOL', 'WOW', 'AWESOME']);
  });
});

describe('fetchQuote function', () => {
  it('returns a Futurama quote', async() => {

    const result = await fetchQuote();

    expect(result).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    });
  });
});

