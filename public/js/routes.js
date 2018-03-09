angular.module('routes', []).config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: '../views/signUpForm.html',
		controller: 'signUpFormCtrl'
	})
	.when('/login', {
		templateUrl: '../views/signIn.html',
		controller: 'signInCtrl'
	})
	.when('/search', {
		templateUrl: '../views/searchFlight.html',
		controller: 'searchFlightCtrl'
	})
	.when('/admin', {
		templateUrl: '../views/admin.html',
		controller: 'adminCtrl'
	})
	.when('/addFlight', {
		templateUrl: '../views/addFlights.html',
		controller: 'flightsCtrl'
	})
}]);