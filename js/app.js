angular.module('App', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'index-tmpl',
		controller: 'HomeController'
	});
}])
.controller('HomeController', [function HomeController() {

}]);