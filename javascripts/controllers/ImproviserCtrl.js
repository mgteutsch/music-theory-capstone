"use strict";

app.controller("ImproviserCtrl", function($q, $scope, $rootScope, $location){

	//Reset any accidental Backgound/Navbar styling
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");


	//Drum Beat Player:	
	$scope.drumBeatPlayer = function(){
		$scope.drumBtnHider = true;

		var testBeat = new Audio("audio/improviserLibrary/drumBeats/synth-drumbeat.mp3"); 
			testBeat.play();
		
		$scope.drumBeatPause = function(){
			testBeat.pause();
			testBeat.currentTime = 0;
			$scope.drumBtnHider = false;
		};	


/* Need to fix errors with this code:
		var radioValue = angular.element(document.querySelector('input[name="soundChoice"]:checked')).val();		
		console.log("DrumBeat ", radioValue);

		if (radioValue == "Basic-Piano"){
			var pianoBeat = new Audio("audio/improviserLibrary/drumBeats/basicPiano-drumbeat.mp3");
			pianoBeat.play();

			$scope.drumBeatPause = function(){
				pianoBeat.pause();
				$scope.drumBtnHider = false;
			};

 		} else if (radioValue == "Brooding-Symphony") {
 			var symphonyBeat = new Audio("audio/improviserLibrary/drumBeats/symphony-drumbeat.mp3");
			symphonyBeat.play();
 		} else if (radioValue == "80s-Pleather-Anthem") {
 			var synthBeat = new Audio("audio/improviserLibrary/drumBeats/synth-drumbeat.mp3");
			synthBeat.play();
		} else {
			var elseBeat = new Audio("audio/improviserLibrary/drumBeats/symphony-drumbeat.mp3"); 
			elseBeat.play();
		}
*/			
	};

	$scope.playI = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-I");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-I");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-I");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-I");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-I");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-I");


		var audioI = new Audio("audio/composerChords/I.mp3");
		audioI.play();
	};


	$scope.playii = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-ii");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-ii");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-ii");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-ii");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-ii");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-ii");

		var audioii = new Audio("audio/composerChords/minor-ii.mp3");
		audioii.play();
	};


	$scope.playiii = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-iii");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-iii");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-iii");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-iii");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-iii");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-iii");

		var audioiii = new Audio("audio/composerChords/minor-iii.mp3");
		audioiii.play();
	};


	$scope.playIV = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-IV");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-IV");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-IV");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-IV");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-IV");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-IV");


		var audioIV = new Audio("audio/composerChords/IV.mp3");
		audioIV.play();
	};


	$scope.playV = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-V");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-V");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-V");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-V");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-V");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-V");

		var audioV = new Audio("audio/composerChords/V.mp3");
		audioV.play();
	};


	$scope.playvi = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-vi");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-vi");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-vi");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-vi");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-vi");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-vi");

		var audiovi = new Audio("audio/composerChords/minor-vi.mp3");
		audiovi.play();
	};


	$scope.playvii = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-vii");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-vii");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-vii");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-vii");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-vii");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-vii");

		var audiovii = new Audio("audio/composerChords/minor-vii.mp3");
		audiovii.play();
	};	



//Alternates:
	$scope.playi = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-i");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-i");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-i");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-i");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-i");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-i");

		var audioi = new Audio("audio/composerChords/minor-i.mp3");
		audioi.play();
	};


	$scope.playII = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-II");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-II");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-II");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-II");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-II");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-II");

		var audioII = new Audio("audio/composerChords/II.mp3");
		audioII.play();
	};


	$scope.playIII = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-III");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-III");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-III");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-III");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-III");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-III");

		var audioIII = new Audio("audio/composerChords/III.mp3");
		audioIII.play();
	};


	$scope.playiv = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-iv");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-iv");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-iv");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-iv");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-iv");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-iv");

		var audioiv = new Audio("audio/composerChords/minor-iv.mp3");
		audioiv.play();
	};	


	$scope.playv = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-v");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-v");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-v");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-v");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-v");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-v");

		var audiov = new Audio("audio/composerChords/minor-v.mp3");
		audiov.play();
	};


	$scope.playVI = function(){
		angular.element(document.querySelectorAll('#overallBackground')).removeClass();
		angular.element(document.querySelectorAll('#overallBackground')).addClass("background-VI");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-VI");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-VI");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-VI");
		angular.element(document.querySelectorAll('#bottomOptions')).removeClass();
		angular.element(document.querySelectorAll('#bottomOptions')).addClass("bottomOptions-VI");
		angular.element(document.querySelectorAll('#navbar')).removeClass();
		angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper navbarColor-VI");

		var audioVI = new Audio("audio/composerChords/VI.mp3");
		audioVI.play();
	};

});