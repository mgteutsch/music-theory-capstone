"use strict";

app.controller("ComposerCtrl", function($scope, $rootScope, $location, ComposerFactory){
	
	console.log("ComposerCtrl checking in!");
	//console log is appearing twice as of 12.4.2016 --> make sure functions going forward don't duplicate.

	let retrieveSavedProgressions = function(){
		ComposerFactory.getSavedProgressions($rootScope.user.uid).then(function(fbProgressions){
			console.log("Progressions from Controller: ", fbProgressions);
			$scope.chordProgressions = fbProgressions;
		});
	};
	retrieveSavedProgressions();


	$scope.addNewProgression = function(){
		$scope.newProgression.chord1 = $scope.newProgression.chord1;
		$scope.newProgression.chord2 = $scope.newProgression.chord2;
		$scope.newProgression.chord3 = $scope.newProgression.chord3;
		$scope.newProgression.chord4 = $scope.newProgression.chord4;
		$scope.newProgression.uid = $rootScope.user.uid;
		ComposerFactory.postNewProgression($scope.newProgression).then(function(progressionId){
			retrieveSavedProgressions(); 
			$scope.newProgression = {}; 
		});
	};

	$scope.deleteProgression = function(progressionId) {
		console.log("progression id from Delete: ", progressionId);
		ComposerFactory.deleteSavedProgression(progressionId).then(function(whatever){
			retrieveSavedProgressions();
		});
	};


});