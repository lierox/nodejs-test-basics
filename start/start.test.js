const expect = require('expect');
const start = require('./start.js');

describe('start.test', () => {
  it('sum of two arguments', () => {
    var result = start.sum(2,3);

    expect(result).toBe(5).toBeA('number');
  });

  it('square of argument', () => {
    var result = start.square(6);

    expect(result).toBe(36).toBeA('number');
  });

  it('object add prop and value', () => {
    var result = start.addNewPropValue({id:1, name:'qq'}, 'newprops value');
    expect(result).toInclude({newProp: 'newprops value'});
  });

  it('async square', (done) => {
    start.asyncSquare(4, (result) => {
      expect(result).toBe(16);
      done();
    });
  });
});

// it('toNotBe', () => {
//   expect(5).toNotBe(4);
// });
//
// it('for objects to Equal', () => {
//   expect({id:1}).toEqual({id:1});
// });
//
// it('toInclude', () => {
//   expect([1,2,3]).toInclude(1);
// });
//
// it('toExclude', () => {
//   expect([1,2,3]).toExclude(4);
// });
//
// it('toInclude for objects', () => {
//   expect({id:1,name:'qq'}).toInclude({id:1});
// });
