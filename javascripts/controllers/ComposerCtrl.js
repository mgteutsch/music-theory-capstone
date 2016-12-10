"use strict";

app.controller("ComposerCtrl", function($q, $scope, $rootScope, $location, ComposerFactory){
	
	//On page load, Saved Chord Progressions input fields need to be disabled:
	$scope.buttonHider = false;
	$scope.editDisabler = true;
	


/**************************************************************************************************/
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
//AUDIO MANIPULATION
/**************************************************************************************************/
	
	$scope.playProgression = function(userChords){
		
		console.log("from playProgression()", userChords);

		let chord1 = userChords.chord1;
		let chord2 = userChords.chord2;
		let chord3 = userChords.chord3;
		let chord4 = userChords.chord4;


		let chord4Player = function(){
			if (chord4 == "I" || chord4 == "II" || chord4 == "III" || chord4 == "IV" || chord4 == "V" || chord4 == "VI") {
				console.log("4th Chord is Major: ", chord4);
				var audio4Major = new Audio("audio/composerChords/"+chord4+".mp3");
				audio4Major.play();
				//audio4Major.addEventListener('ended', chord1Player);
			} else {
				console.log("4th Chord is minor: ", chord4);
				var audio4Minor = new Audio("audio/composerChords/minor-"+chord4+".mp3");
				audio4Minor.play();
				//audio4Minor.addEventListener('ended', chord1Player);
			}
		};


		let chord3Player = function(){
			if (chord3 == "I" || chord3 == "II" || chord3 == "III" || chord3 == "IV" || chord3 == "V" || chord3 == "VI") {
				console.log("3rd Chord is Major: ", chord3);
				var audio3Major = new Audio("audio/composerChords/"+chord3+".mp3");
				audio3Major.play();
				audio3Major.addEventListener('ended', chord4Player);
			} else {
				console.log("3rd Chord is minor: ", chord3);
				var audio3Minor = new Audio("audio/composerChords/minor-"+chord3+".mp3");
				audio3Minor.play();
				audio3Minor.addEventListener('ended', chord4Player);
			}
		};


		let chord2Player = function(){
			if (chord2 == "I" || chord2 == "II" || chord2 == "III" || chord2 == "IV" || chord2 == "V" || chord2 == "VI") {
				console.log("2nd Chord is Major: ", chord2);
				var audio2Major = new Audio("audio/composerChords/"+chord2+".mp3");
				audio2Major.play();
				audio2Major.addEventListener('ended', chord3Player);
			} else {
				console.log("2nd Chord is minor: ", chord2);
				var audio2Minor = new Audio("audio/composerChords/minor-"+chord2+".mp3");
				audio2Minor.play();
				audio2Minor.addEventListener('ended', chord3Player);
			}
		};


		let chord1Player = function(){
			if (chord1 == "I" || chord1 == "II" || chord1 == "III" || chord1 == "IV" || chord1 == "V" || chord1 == "VI") {
				console.log("1st Chord is Major: ", chord1);
				var audio1Major = new Audio("audio/composerChords/"+chord1+".mp3");
				audio1Major.play();
				audio1Major.addEventListener('ended', chord2Player);
				
			} else {
				console.log("1st Chord is minor: ", chord1);
				var audio1Minor = new Audio("audio/composerChords/minor-"+chord1+".mp3");
				audio1Minor.play();
				audio1Minor.addEventListener('ended', chord2Player);
			}
		};
		chord1Player();

	};



	$scope.pauseProgression = function(){
		
		//switch back to Play button:
		$scope.revealPlayOrPause = false;



	};	


 

});

