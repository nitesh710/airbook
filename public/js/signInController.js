angular.module('signInController', []).controller('signInCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.signIn = function(){
		$http.post('/api/login/', $scope.user)
		.then(function onSuccess(response){
			// handle on success
			console.log(response.status);
			console.log(response.data.message);
			$scope.errorText = "";
			$scope.success="Success";
			$location.path('/search');
		}, function onError(response){
			// handle on error
			console.log(response.status);
			console.log(response.data.message);
			$scope.errorText = "Invalid UserId and Password!";
		});
	};
}]);