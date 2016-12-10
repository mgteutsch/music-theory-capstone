"use strict";

app.controller("ComposerCtrl", function($scope, $rootScope, $location, ComposerFactory){
	
	console.log("ComposerCtrl checking in!");
	//console log is appearing twice as of 12.4.2016 --> make sure functions going forward don't duplicate.

	//On page load, Saved Chord Progressions input fields need to be disabled:
	$scope.buttonHider = false;
	$scope.editDisabler = true;


//GET, ADD, EDIT, & DELETE Chords:
/**************************************************************************************************/
	
	let retrieveSavedProgressions = function(){
		ComposerFactory.getSavedProgressions($rootScope.user.uid).then(function(fbProgressions){
			$scope.chordProgressions = fbProgressions;
		});
	};
	retrieveSavedProgressions();



	$scope.addNewProgression = function(userNewProgression){
		userNewProgression.uid = $rootScope.user.uid;
		ComposerFactory.postNewProgression(userNewProgression).then(function(progressionId){
			retrieveSavedProgressions(); 
			$scope.newProgression = {}; 
		});
	};



	$scope.deleteProgression = function(progressionId){
		ComposerFactory.deleteSavedProgression(progressionId).then(function(whatever){
			retrieveSavedProgressions();
		});
	};


		
	$scope.editProgression = function(chordProgression){
		
		//resets the input fields to disabled, and hides the Done button
		$scope.buttonHider = false;
		$scope.editDisabler = true;

		ComposerFactory.editSavedProgression(chordProgression).then(function(whatever){
			retrieveSavedProgressions();
		});
	};
	
/**************************************************************************************************/	
});