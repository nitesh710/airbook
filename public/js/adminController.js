angular.module('adminController', []).controller('adminCtrl',['$scope', '$http', '$location', function($scope, $http, $location){
	$scope.adminSignIn = function(){
		
			$http.post('/api/admin/', $scope.admin)
			.then(function onSuccess(response){
				//handle on success
				console.log(response.data.message);
				$scope.errorText = "";
				$location.path('/addFlight');
			}, function onError(response){
				//handle on error
				console.log(response.data.message);
				$scope.errorText = "not valid";
			});
	
	};
}]);