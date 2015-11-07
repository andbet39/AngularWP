'use strict';

describe('Service: wpfact', function () {

  // load the service's module
  beforeEach(module('angularWpApp'));

  // instantiate service
  var wpfact;
  beforeEach(inject(function (_wpfact_) {
    wpfact = _wpfact_;
  }));

  it('should do something', function () {
    expect(!!wpfact).toBe(true);
  });

});
