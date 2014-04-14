'use strict';

angular.module('ds.products')
    .controller('ProductDetailCtrl', [ '$scope', '$rootScope', 'CartSvc', 'product', function($scope, $rootScope, CartSvc, product) {

    $scope.product = product;

    //input default values must be defined in controller, not html, if tied to ng-model
    $scope.productDetailQty = 1;

    $scope.addProductToCart = function () {
        CartSvc.pushProductToRootScope(product, $scope.productDetailQty);
    };

}]);