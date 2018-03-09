angular.module('searchFlightController', []).controller('searchFlightCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.searchFlight = function(){
		$http.post('/api/search/', $scope.flight)
		.then(function onSuccess(response){
			//handle on success
			console.log(response.data.flight);
		}, function onError(response){
			//handle on error
			console.log(response.data.message);
		});
	};
}]);