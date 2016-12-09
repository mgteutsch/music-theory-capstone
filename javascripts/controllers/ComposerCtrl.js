"use strict";

app.controller("ComposerCtrl", function($scope, $rootScope, $location, ComposerFactory){
	
	console.log("ComposerCtrl checking in!");
	//console log is appearing twice as of 12.4.2016 --> make sure functions going forward don't duplicate.

	//On page load, Saved Chord Progressions input fields need to be disabled:
	$scope.buttonHider = false;
	$scope.editDisabler = true;
	//editProgression() below will enable the fields for editing.



	let retrieveSavedProgressions = function(){
		ComposerFactory.getSavedProgressions($rootScope.user.uid).then(function(fbProgressions){
			//console.log("Progressions from Controller: ", fbProgressions);
			$scope.chordProgressions = fbProgressions;
		});
	};
	retrieveSavedProgressions();




	$scope.addNewProgression = function(userNewProgression){
		//These 4 lines are not needed since I have now passed in userNewProgression:
			// $scope.newProgression.chord1 = $scope.newProgression.chord1;
			// $scope.newProgression.chord2 = $scope.newProgression.chord2;
			// $scope.newProgression.chord3 = $scope.newProgression.chord3;
			// $scope.newProgression.chord4 = $scope.newProgression.chord4;
		//I am keeping these for learning purposes.
		
		userNewProgression.uid = $rootScope.user.uid;
		ComposerFactory.postNewProgression(userNewProgression).then(function(progressionId){
			retrieveSavedProgressions(); 
			$scope.newProgression = {}; 
		});
	};




	$scope.deleteProgression = function(progressionId){
		//console.log("id from deleteProgression(): ", progressionId);
		ComposerFactory.deleteSavedProgression(progressionId).then(function(whatever){
			retrieveSavedProgressions();
		});
	};



		
	$scope.editProgression = function(chordProgression){
		//console.log("chordProgression from editProgression(): ", chordProgression);
		
		//resets the input fields to disabled, and hides the Done button
		$scope.buttonHider = false;
		$scope.editDisabler = true;

		ComposerFactory.editSavedProgression(chordProgression).then(function(whatever){
			retrieveSavedProgressions();
		});
	};
});