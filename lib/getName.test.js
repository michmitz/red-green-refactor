const { getName } = require('./getName.js');

describe('getName function', () => {
  it('finds the name of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);

    expect(name)
      .toEqual('spot');
  });
});
