angular.module('flightsController', []).controller('flightsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.addFlight = function(){
		$http.post('/api/addFlight/', $scope.flight)
		.then(function onSuccess(response){
			//handle on success
			console.log(response.data);
			$scope.success = "Flight added!";
		}, function onError(response){
			//handle on error
			console.log(response.data);
			$scope.success = "";
		});
	};
}]);