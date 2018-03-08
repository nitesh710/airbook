angular.module('signUpController', []).controller('signUpFormCtrl',['$scope', '$http', '$location', function($scope, $http, $location){
	
	$scope.signUp = function(){

		
		$http.post('/api/register/', $scope.user)
		.then(function onSuccess(response){
			// handle on success
			console.log(response.data);
			$location.path('/login');
		}, function onError(response){
			// handle on error
			console.log(response);
			$scope.errorText = 'User is already registered!';
		});
		
	};

}]);