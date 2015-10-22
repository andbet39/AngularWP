'use strict';

describe('Controller: ViewpostCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWpApp'));

  var ViewpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewpostCtrl = $controller('ViewpostCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewpostCtrl.awesomeThings.length).toBe(3);
  });
});
