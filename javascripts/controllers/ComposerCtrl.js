"use strict";

app.controller("ComposerCtrl", function($scope, $rootScope, $location, ComposerFactory){
	
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
		$scope.showChord = true;

		let chord1 = userChords.chord1;
		let chord2 = userChords.chord2;
		let chord3 = userChords.chord3;
		let chord4 = userChords.chord4;

		//var audio1 = new Audio("audio/composerChords/"+chord1+".mp3");
			// audio1.addEventListener('ended', audio2.play());
		// var audio2 = new Audio("audio/composerChords/"+chord2+".mp3");
		// var audio3 = new Audio("audio/composerChords/"+chord3+".mp3");
		// var audio4 = new Audio("audio/composerChords/"+chord4+".mp3");
		//audio1.play().then(audio2.play()).then(audio3.play()).then(audio4.play());


		// var audio = new Audio('audio_file.mp3');
		// audio.play()


		// var audio1 = new Audio();
		// audio1.addEventListener('ended',audio2.play)
		// var audio2= new Audio();
		// audio2.addEventListener('ended',audio3.play)
		// var audio3 = new Audio();
		// var audi4 = new Audio();

		//promise... play(ii).then(play(IV)).then(play(V)).then(play(vi))
		//event called "ended" audio.onended or somehting
		//audio.addEventListener
		//audio.src=""


		let audio2Function = function(){
			if (chord2 == "I" || chord2 == "II" || chord2 == "III" || chord2 == "IV" || chord2 == "V" || chord2 == "VI") {
				console.log("2nd Chord is Major: ", chord2);
				var audio2Major = new Audio("audio/composerChords/"+chord2+".mp3");
				audio1Major.addEventListener('ended', audio2Major.play());
			} else {
				console.log("2nd Chord is minor: ", chord2);
				var audio2Minor = new Audio("audio/composerChords/minor-"+chord2+".mp3");
				audio2Minor.play();
			}
		}; 


		if (chord1 == "I" || chord1 == "II" || chord1 == "III" || chord1 == "IV" || chord1 == "V" || chord1 == "VI") {
			console.log("1st Chord is Major: ", chord1);
			console.log("chord1 Audio Source: ", "audio/composerChords/"+chord1+".mp3");
			var audio1Major = new Audio("audio/composerChords/"+chord1+".mp3");
			audio1Major.play();
			audio1Major.addEventListener('ended', audio2Function());
		} else {
			console.log("1st Chord is minor: ", chord1);
			console.log("chord1 Audio Source: ", "audio/composerChords/minor-"+chord1+".mp3");
			var audio1Minor = new Audio("audio/composerChords/minor-"+chord1+".mp3");
			audio1Minor.play();
			audio1Minor.addEventListener('ended', audio2Function());
		}

/*
		if (chord2 == "I" || chord2 == "II" || chord2 == "III" || chord2 == "IV" || chord2 == "V" || chord2 == "VI") {
			console.log("2nd Chord is Major: ", chord2);
			var audio2Major = new Audio("audio/composerChords/"+chord2+".mp3");
			audio2Major.play();
		} else {
			console.log("2nd Chord is minor: ", chord2);
			var audio2Minor = new Audio("audio/composerChords/minor-"+chord2+".mp3");
			audio2Minor.play();
		}


		if (chord3 == "I" || chord3 == "II" || chord3 == "III" || chord3 == "IV" || chord3 == "V" || chord3 == "VI") {
			console.log("3rd Chord is Major: ", chord3);
			var audio3Major = new Audio("audio/composerChords/"+chord3+".mp3");
			audio3Major.play();
		} else {
			console.log("3rd Chord is minor: ", chord3);
			var audio3Minor = new Audio("audio/composerChords/minor-"+chord3+".mp3");
			audio3Minor.play();
		}


		if (chord4 == "I" || chord4 == "II" || chord4 == "III" || chord4 == "IV" || chord4 == "V" || chord4 == "VI") {
			console.log("4th Chord is Major: ", chord4);
			var audio4Major = new Audio("audio/composerChords/"+chord4+".mp3");
			audio4Major.play();
		} else {
			console.log("4th Chord is minor: ", chord4);
			var audio4Minor = new Audio("audio/composerChords/minor-"+chord4+".mp3");
			audio4Minor.play();
		}
*/
	}; 

});