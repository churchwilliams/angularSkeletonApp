var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.name = "ChurchWilliams";

	$scope.friends = ['scott', 'brett', 'sombryn', 'blair', 'rhett'];

	$scope.addFriend = function(){
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = "";
	};
});