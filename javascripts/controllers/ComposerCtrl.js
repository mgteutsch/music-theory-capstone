"use strict";

app.controller("ComposerCtrl", function($q, $scope, $rootScope, $location, ComposerFactory){
	
	//On page load, remove any styling done by Improviser
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");

	//On page load, Saved Chord Progressions input fields need to be disabled:
	$scope.buttonHider = false;
	$scope.editDisabler = true;

	//For More Details Collapsible:
	$(document).ready(function(){
	    $('.collapsible').collapsible();
	});

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
//Audio Manipulation, Glowing Boxes Animations, & Loading Saved Chords
/**************************************************************************************************/

	//Clears the player's chord progression:
	$scope.clearProgression = function(){
		$scope.newProgression = {};
	};
		

	//Loads Saved Chords so they can be played:
	$scope.loadToPlayer = function(savedChords){
		$scope.newProgression = savedChords;
	};
 


	//Play Button (& Pause functionality is within the chord#Player functions)
	$scope.playProgression = function(userChords){
		
		let chord1 = userChords.chord1;
		let chord2 = userChords.chord2;
		let chord3 = userChords.chord3;
		let chord4 = userChords.chord4;


		//Hides Play Button & shows Pause Button:
		$scope.revealPlayOrPause = true;


		// ---------------------------------------------------------------------------------------
		// CHORD PROGRESSION PLAYER --------------------------------------------------------------
		// ---------------------------------------------------------------------------------------
		/*  The following chord#Player functions:
				(1) Determine which chords to play,
				(2) Add/Remove glowBox classes as each chord plays
		*/
		let chord4Player = function(){
			var nextChord;
				let playNextChord = function(){
					nextChord = setTimeout(function(){chord1Player();},1980);
				};
				let stopNextChord = function(){
					clearTimeout(nextChord);
				};
			playNextChord();			


			if (chord4 == "I" || chord4 == "II" || chord4 == "III" || chord4 == "IV" || chord4 == "V" || chord4 == "VI") {
				console.log("4th Chord is Major: ", chord4);
				var audio4Major = new Audio("audio/composerChords/"+chord4+".mp3");
				audio4Major.play();
				
				angular.element(document.querySelector('.newChordInput3')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput4')).addClass("glowBox");

				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio4Major.pause();
					stopNextChord();
				};

			} else {
				console.log("4th Chord is minor: ", chord4);
				var audio4Minor = new Audio("audio/composerChords/minor-"+chord4+".mp3");
				audio4Minor.play();
				
				angular.element(document.querySelector('.newChordInput3')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput4')).addClass("glowBox");
				
				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio4Minor.pause();
					stopNextChord();
				};
			}
		};


		let chord3Player = function(){
			var nextChord;
				let playNextChord = function(){
					nextChord = setTimeout(function(){chord4Player();},1980);
				};
				let stopNextChord = function(){
					clearTimeout(nextChord);
				};
			playNextChord();			


			if (chord3 == "I" || chord3 == "II" || chord3 == "III" || chord3 == "IV" || chord3 == "V" || chord3 == "VI") {
				console.log("3rd Chord is Major: ", chord3);
				var audio3Major = new Audio("audio/composerChords/"+chord3+".mp3");
				audio3Major.play();
				
				angular.element(document.querySelector('.newChordInput2')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput3')).addClass("glowBox");
				

				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio3Major.pause();
					stopNextChord();
				};

			} else {
				console.log("3rd Chord is minor: ", chord3);
				var audio3Minor = new Audio("audio/composerChords/minor-"+chord3+".mp3");
				audio3Minor.play();
				
				angular.element(document.querySelector('.newChordInput2')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput3')).addClass("glowBox");
				

				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio3Minor.pause();
					stopNextChord();
				};
			}
		};


		let chord2Player = function(){
			var nextChord;
				let playNextChord = function(){
					nextChord = setTimeout(function(){chord3Player();},1980);
				};
				let stopNextChord = function(){
					clearTimeout(nextChord);
				};
			playNextChord();


			if (chord2 == "I" || chord2 == "II" || chord2 == "III" || chord2 == "IV" || chord2 == "V" || chord2 == "VI") {
				console.log("2nd Chord is Major: ", chord2);
				var audio2Major = new Audio("audio/composerChords/"+chord2+".mp3");
				audio2Major.play();
				
				angular.element(document.querySelector('.newChordInput1')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput2')).addClass("glowBox");
				
				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio2Major.pause();
					stopNextChord();
				};

			} else {
				console.log("2nd Chord is minor: ", chord2);
				var audio2Minor = new Audio("audio/composerChords/minor-"+chord2+".mp3");
				audio2Minor.play();
				
				angular.element(document.querySelector('.newChordInput1')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput2')).addClass("glowBox");

				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio2Minor.pause();
					stopNextChord();
				};
			}
		};


		let chord1Player = function(){
			var nextChord;
				let playNextChord = function(){
					nextChord = setTimeout(function(){chord2Player();},1990);
				};
				let stopNextChord = function(){
					clearTimeout(nextChord);
				};
			playNextChord();			

			if (chord1 == "I" || chord1 == "II" || chord1 == "III" || chord1 == "IV" || chord1 == "V" || chord1 == "VI") {
				console.log("1st Chord is Major: ", chord1);
				var audio1Major = new Audio('audio/composerChords/'+chord1+'.mp3');
				audio1Major.play();
				
				angular.element(document.querySelector('.newChordInput4')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput1')).addClass("glowBox");

				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio1Major.pause();
					stopNextChord();
				};
				
			} else {
				console.log("1st Chord is minor: ", chord1);
				var audio1Minor = new Audio('audio/composerChords/minor-'+chord1+'.mp3');
				audio1Minor.play();
				
				angular.element(document.querySelector('.newChordInput4')).removeClass("glowBox");
				angular.element(document.querySelector('.newChordInput1')).addClass("glowBox");
				
				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio1Minor.pause();
					stopNextChord();
				};
			}	
		};

		//chordPlayerStarter() only executes once per Play button press. It is created because:
			//There is a slight delay before the chord1 plays so that chord2 plays in time.
			//Without this half-second delay (below), chord1 has a slight load delay and as a result chord2 plays slightly ahead of time.
		//In order to have the Pause function still work during this function, the if/else statement needed to be written.
		let chordPlayerStarter = function(){
			var nextChord;
				let playNextChord = function(){
					nextChord = setTimeout(function(){chord1Player();},500);
				};
				let stopNextChord = function(){
					clearTimeout(nextChord);
				};
			playNextChord();

			if (chord1 == "I" || chord1 == "II" || chord1 == "III" || chord1 == "IV" || chord1 == "V" || chord1 == "VI") {
				var audio1Major = new Audio('audio/composerChords/'+chord1+'.mp3');
				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio1Major.pause();
					stopNextChord();
				};
			
			} else {
				var audio1Minor = new Audio('audio/composerChords/minor-'+chord1+'.mp3');
				$scope.pauseProgression = function(){		
					$scope.revealPlayOrPause = false;
					audio1Minor.pause();
					stopNextChord();
				};
			}	
		};
		chordPlayerStarter(); /* Executes the loop of chord#Player() functions */


		//Pause Button ends the glowing:
		$scope.glowBoxesEnd = function(){
			angular.element(document.querySelector('.newChordInput1')).removeClass("glowBox");
			angular.element(document.querySelector('.newChordInput2')).removeClass("glowBox");
			angular.element(document.querySelector('.newChordInput3')).removeClass("glowBox");
			angular.element(document.querySelector('.newChordInput4')).removeClass("glowBox");
		};
	};

});

