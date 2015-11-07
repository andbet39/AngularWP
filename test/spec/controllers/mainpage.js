'use strict';

describe('Controller: MainpageCtrl', function () {

  // load the controller's module
  beforeEach(module('angularWpApp'));

  var MainpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainpageCtrl = $controller('MainpageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainpageCtrl.awesomeThings.length).toBe(3);
  });
});
