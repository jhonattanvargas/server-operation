angular.module('app', ['ngRoute','ngAnimate'])

//controler para la navegación
angular.module('app')
.controller('NavCtrl', function($scope, $location){
    //devuelve true or false dependiendo si es la locación activa
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

//rutas para la aplicación
angular.module('app')
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'OperatorCtrl',
    templateUrl: 'operator.html'
  })
  .when('/about', {
    controller: 'AboutCtrl',
    templateUrl: 'about.html'
  })
});

angular.module('app')
.controller('AboutCtrl',function($scope,$location){
  $scope.host = $location.host()
  $scope.port = $location.port()
});

angular.module('app')
.controller('OperatorCtrl', function($scope, operatorService){
  $scope.add = function(){
    if(isNaN($scope.a) || isNaN($scope.b))
      return $scope.answer = 'datos ingresados incorrectamente'
    operatorService.getAdd($scope.a,$scope.b)
    .success(function(data){
      $scope.answer = data.result
    })
  },
  $scope.sub = function(){
    if(isNaN($scope.a) || isNaN($scope.b))
      return $scope.answer = 'datos ingresados incorrectamente'
    operatorService.getSub($scope.a,$scope.b)
    .success(function(data){
      $scope.answer = data.result
    })
  },
  $scope.mul = function(){
    if(isNaN($scope.a) || isNaN($scope.b))
      return $scope.answer = 'datos ingresados incorrectamente'
    operatorService.getMul($scope.a,$scope.b)
    .success(function(data){
      $scope.answer = data.result
    })
  },
  $scope.div = function(){
    if(isNaN($scope.a) || isNaN($scope.b))
      return $scope.answer = 'datos ingresados incorrectamente'
    operatorService.getDiv($scope.a,$scope.b)
    .success(function(data){
      $scope.answer = data.result
    })
  }

});

angular.module('app')
.service('operatorService', function($http){
  this.getAdd = function(a,b){
    return $http.get(`/api/add/${a}/${b}`);
  };
  this.getSub = function(a,b){
    return $http.get(`/api/sub/${a}/${b}`);
  };
  this.getMul = function(a,b){
    return $http.get(`/api/mul/${a}/${b}`);
  };
  this.getDiv = function(a,b){
    return $http.get(`/api/div/${a}/${b}`);
  };
});
