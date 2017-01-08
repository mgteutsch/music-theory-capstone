"use strict";

app.controller("ImproviserCtrl", function($q, $scope, $rootScope, $location){

	//Reset any accidental Backgound/Navbar styling
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");

	//For More Details Collapsible:
	$(document).ready(function(){
	    $('.collapsible').collapsible();
	});


	//Drum Beat Player:	
	$scope.drumBeatPlayer = function(){
		$scope.drumBtnHider = true;


		if (document.getElementById('choice1').checked) {
			var basicPianoBeat = new Audio("audio/improviserLibrary/drumBeats/basicPiano-drumbeat.mp3"); 
		  	basicPianoBeat.play();

		  	$scope.drumBeatPause = function(){
				basicPianoBeat.pause();
				basicPianoBeat.currentTime = 0;
				$scope.drumBtnHider = false;
			};

		} else if (document.getElementById('choice2').checked) {
			var symphonyBeat = new Audio("audio/improviserLibrary/drumBeats/symphony-drumbeat.mp3"); 
		  	symphonyBeat.play();

		  	$scope.drumBeatPause = function(){
				symphonyBeat.pause();
				symphonyBeat.currentTime = 0;
				$scope.drumBtnHider = false;
			};
		
		} else if (document.getElementById('choice3').checked) {
			var synthBeat = new Audio("audio/improviserLibrary/drumBeats/synth-drumbeat.mp3"); 
		  	synthBeat.play();

		  	$scope.drumBeatPause = function(){
				synthBeat.pause();
				synthBeat.currentTime = 0;
				$scope.drumBtnHider = false;
			};
		
		} else {
			var defaultBeat = new Audio("audio/improviserLibrary/drumBeats/synth-drumbeat.mp3"); 
		  	defaultBeat.play();

		  	$scope.drumBeatPause = function(){
				defaultBeat.pause();
				defaultBeat.currentTime = 0;
				$scope.drumBtnHider = false;
			};
		}

	};


	//Keys:
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


		if (document.getElementById('choice1').checked) {
			var audioI = new Audio("audio/composerChords/I.mp3");
			audioI.play();
		} else if (document.getElementById('choice2').checked) {
			var audioI_symphony = new Audio("audio/improviserLibrary/symphony-I.mp3");
			audioI_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioI_synth = new Audio("audio/improviserLibrary/synth-I.mp3");
			audioI_synth.play();
		} else {
			var audioI_default = new Audio("audio/composerChords/I.mp3");
			audioI_default.play();
		}	
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


		if (document.getElementById('choice1').checked) {
			var audioii = new Audio("audio/composerChords/minor-ii.mp3");
			audioii.play();
		} else if (document.getElementById('choice2').checked) {
			var audioii_symphony = new Audio("audio/improviserLibrary/symphony-minor-ii.mp3");
			audioii_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioii_synth = new Audio("audio/improviserLibrary/synth-minor-ii.mp3");
			audioii_synth.play();
		} else {
			var audioii_default = new Audio("audio/composerChords/minor-ii.mp3");
			audioii_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioiii = new Audio("audio/composerChords/minor-iii.mp3");
			audioiii.play();
		} else if (document.getElementById('choice2').checked) {
			var audioiii_symphony = new Audio("audio/improviserLibrary/symphony-minor-iii.mp3");
			audioiii_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioiii_synth = new Audio("audio/improviserLibrary/synth-minor-iii.mp3");
			audioiii_synth.play();
		} else {
			var audioiii_default = new Audio("audio/composerChords/minor-iii.mp3");
			audioiii_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioIV = new Audio("audio/composerChords/IV.mp3");
			audioIV.play();
		} else if (document.getElementById('choice2').checked) {
			var audioIV_symphony = new Audio("audio/improviserLibrary/symphony-IV.mp3");
			audioIV_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioIV_synth = new Audio("audio/improviserLibrary/synth-IV.mp3");
			audioIV_synth.play();
		} else {
			var audioIV_default = new Audio("audio/composerChords/IV.mp3");
			audioIV_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioV = new Audio("audio/composerChords/V.mp3");
			audioV.play();
		} else if (document.getElementById('choice2').checked) {
			var audioV_symphony = new Audio("audio/improviserLibrary/symphony-V.mp3");
			audioV_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioV_synth = new Audio("audio/improviserLibrary/synth-V.mp3");
			audioV_synth.play();
		} else {
			var audioV_default = new Audio("audio/composerChords/V.mp3");
			audioV_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audiovi = new Audio("audio/composerChords/minor-vi.mp3");
			audiovi.play();
		} else if (document.getElementById('choice2').checked) {
			var audiovi_symphony = new Audio("audio/improviserLibrary/symphony-minor-vi.mp3");
			audiovi_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audiovi_synth = new Audio("audio/improviserLibrary/synth-minor-vi.mp3");
			audiovi_synth.play();
		} else {
			var audiovi_default = new Audio("audio/composerChords/minor-vi.mp3");
			audiovi_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audiovii = new Audio("audio/composerChords/minor-vii.mp3");
			audiovii.play();
		} else if (document.getElementById('choice2').checked) {
			var audiovii_symphony = new Audio("audio/improviserLibrary/symphony-minor-vii.mp3");
			audiovii_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audiovii_synth = new Audio("audio/improviserLibrary/synth-minor-vii.mp3");
			audiovii_synth.play();
		} else {
			var audiovii_default = new Audio("audio/composerChords/minor-vii.mp3");
			audiovii_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioi = new Audio("audio/composerChords/minor-i.mp3");
			audioi.play();
		} else if (document.getElementById('choice2').checked) {
			var audioi_symphony = new Audio("audio/improviserLibrary/symphony-minor-i.mp3");
			audioi_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioi_synth = new Audio("audio/improviserLibrary/synth-minor-i.mp3");
			audioi_synth.play();
		} else {
			var audioi_default = new Audio("audio/composerChords/minor-i.mp3");
			audioi_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioII = new Audio("audio/composerChords/II.mp3");
			audioII.play();
		} else if (document.getElementById('choice2').checked) {
			var audioII_symphony = new Audio("audio/improviserLibrary/symphony-II.mp3");
			audioII_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioII_synth = new Audio("audio/improviserLibrary/synth-II.mp3");
			audioII_synth.play();
		} else {
			var audioII_default = new Audio("audio/composerChords/II.mp3");
			audioII_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioIII = new Audio("audio/composerChords/III.mp3");
			audioIII.play();
		} else if (document.getElementById('choice2').checked) {
			var audioIII_symphony = new Audio("audio/improviserLibrary/symphony-III.mp3");
			audioIII_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioIII_synth = new Audio("audio/improviserLibrary/synth-III.mp3");
			audioIII_synth.play();
		} else {
			var audioIII_default = new Audio("audio/composerChords/III.mp3");
			audioIII_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioiv = new Audio("audio/composerChords/minor-iv.mp3");
			audioiv.play();
		} else if (document.getElementById('choice2').checked) {
			var audioiv_symphony = new Audio("audio/improviserLibrary/symphony-minor-iv.mp3");
			audioiv_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioiv_synth = new Audio("audio/improviserLibrary/synth-minor-iv.mp3");
			audioiv_synth.play();
		} else {
			var audioiv_default = new Audio("audio/composerChords/minor-iv.mp3");
			audioiv_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audiov = new Audio("audio/composerChords/minor-v.mp3");
			audiov.play();
		} else if (document.getElementById('choice2').checked) {
			var audiov_symphony = new Audio("audio/improviserLibrary/symphony-minor-v.mp3");
			audiov_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audiov_synth = new Audio("audio/improviserLibrary/synth-minor-v.mp3");
			audiov_synth.play();
		} else {
			var audiov_default = new Audio("audio/composerChords/minor-v.mp3");
			audiov_default.play();
		}
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


		if (document.getElementById('choice1').checked) {
			var audioVI = new Audio("audio/composerChords/VI.mp3");
			audioVI.play();
		} else if (document.getElementById('choice2').checked) {
			var audioVI_symphony = new Audio("audio/improviserLibrary/symphony-VI.mp3");
			audioVI_symphony.play();
		} else if (document.getElementById('choice3').checked) {
			var audioVI_synth = new Audio("audio/improviserLibrary/synth-VI.mp3");
			audioVI_synth.play();
		} else {
			var audioVI_default = new Audio("audio/composerChords/VI.mp3");
			audioVI_default.play();
		}
	};

});