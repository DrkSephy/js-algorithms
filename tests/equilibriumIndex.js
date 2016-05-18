var expect = require('chai').expect;
var computeIndex = require('../src/equilibriumIndex');

describe('Equilibrim Index', function() {
  describe('Undefined value', function() {
    it('Returns undefined for missing index', function() {
      var index = computeIndex([0, 1, 3, 0, 0]);
      expect(index).to.equal(undefined);
    });
  });
});