"use strict";

app.controller("ImproviserCtrl", function($q, $scope, $rootScope, $location){

	$scope.playI = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-I");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-I");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-I");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-I");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-I");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-I");

		var audioI = new Audio("audio/composerChords/I.mp3");
		audioI.play();
	};


	$scope.playii = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-ii");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-ii");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-ii");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-ii");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-ii");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-ii");

		var audioii = new Audio("audio/composerChords/minor-ii.mp3");
		audioii.play();
	};


	$scope.playiii = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-iii");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-iii");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-iii");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-iii");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-iii");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-iii");

		var audioiii = new Audio("audio/composerChords/minor-iii.mp3");
		audioiii.play();
	};


	$scope.playIV = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-IV");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-IV");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-IV");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-IV");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-IV");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-IV");


		var audioIV = new Audio("audio/composerChords/IV.mp3");
		audioIV.play();
	};


	$scope.playV = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-V");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-V");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-V");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-V");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-V");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-V");

		var audioV = new Audio("audio/composerChords/V.mp3");
		audioV.play();
	};


	$scope.playvi = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-vi");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-vi");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-vi");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-vi");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-vi");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-vi");

		var audiovi = new Audio("audio/composerChords/minor-vi.mp3");
		audiovi.play();
	};


	$scope.playvii = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-vii");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-vii");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-vii");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-vii");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-vii");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-vii");

		var audiovii = new Audio("audio/composerChords/minor-vii.mp3");
		audiovii.play();
	};	



//Alternates:
	$scope.playi = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-i");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-i");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-i");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-i");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-i");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-i");

		var audioi = new Audio("audio/composerChords/minor-i.mp3");
		audioi.play();
	};


	$scope.playII = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-II");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-II");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-II");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-II");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-II");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-II");

		var audioII = new Audio("audio/composerChords/II.mp3");
		audioII.play();
	};


	$scope.playIII = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-III");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-III");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-III");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-III");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-III");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-III");

		var audioIII = new Audio("audio/composerChords/III.mp3");
		audioIII.play();
	};


	$scope.playiv = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-iv");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-iv");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-iv");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-iv");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-iv");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-iv");

		var audioiv = new Audio("audio/composerChords/minor-iv.mp3");
		audioiv.play();
	};	


	$scope.playv = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-v");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-v");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-v");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-v");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-v");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-v");

		var audiov = new Audio("audio/composerChords/minor-v.mp3");
		audiov.play();
	};


	$scope.playVI = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-VI");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-VI");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-VI");
		angular.element(document.querySelectorAll('#keyboardKey')).removeClass();
		angular.element(document.querySelectorAll('#keyboardKey')).addClass("btn keyboardKey-VI");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-VI");
		angular.element(document.querySelectorAll('#soundLibrary')).removeClass();
		angular.element(document.querySelectorAll('#soundLibrary')).addClass("soundLibrary-VI");

		var audioVI = new Audio("audio/composerChords/VI.mp3");
		audioVI.play();
	};

});