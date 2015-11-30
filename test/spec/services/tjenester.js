'use strict';

describe('Service: tjenester', function () {

  // load the service's module
  beforeEach(module('lierKommuneApp'));

  // instantiate service
  var tjenester;
  beforeEach(inject(function (_tjenester_) {
    tjenester = _tjenester_;
  }));

  it('should do something', function () {
    expect(!!tjenester).toBe(true);
  });

});
