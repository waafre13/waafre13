'use strict';

describe('Controller: TjenesteCtrl', function () {

  // load the controller's module
  beforeEach(module('lierKommuneApp'));

  var TjenesteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TjenesteCtrl = $controller('TjenesteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
