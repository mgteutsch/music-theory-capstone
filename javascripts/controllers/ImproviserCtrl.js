"use strict";

app.controller("ImproviserCtrl", function($q, $scope, $rootScope, $location){

	$scope.playI = function(){
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-I");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-I");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-I");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-I");

		var audioI = new Audio("audio/composerChords/I.mp3");
		audioI.play();
	};


	$scope.playii = function(){
		angular.element(document.querySelector('#improviserBackground')).removeClass();
		angular.element(document.querySelector('#improviserBackground')).addClass("background-ii");
		angular.element(document.querySelectorAll('#improviserBackground')).removeClass();
		angular.element(document.querySelectorAll('#improviserBackground')).addClass("background-ii");
		angular.element(document.querySelectorAll('a#improviserKey')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKey')).addClass("col s1 btn key-ii");
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).removeClass();
		angular.element(document.querySelectorAll('a#improviserKeyAlt')).addClass("col s1 btn keyAlt-ii");
		angular.element(document.querySelectorAll('#improviserTitle')).removeClass();
		angular.element(document.querySelectorAll('#improviserTitle')).addClass("textColor-ii");

		var audioii = new Audio("audio/composerChords/minor-ii.mp3");
		audioii.play();
	};


	$scope.playiii = function(){
		angular.element(document.querySelector('#improviserBackground')).removeClass();
		angular.element(document.querySelector('#improviserBackground')).addClass("background-iii");

		var audioiii = new Audio("audio/composerChords/minor-iii.mp3");
		audioiii.play();
	};


	$scope.playIV = function(){
		var audioIV = new Audio("audio/composerChords/IV.mp3");
		audioIV.play();
	};


	$scope.playV = function(){
		var audioV = new Audio("audio/composerChords/V.mp3");
		audioV.play();
	};


	$scope.playvi = function(){
		var audiovi = new Audio("audio/composerChords/minor-vi.mp3");
		audiovi.play();
	};


	$scope.playvii = function(){
		var audiovii = new Audio("audio/composerChords/minor-vii.mp3");
		audiovii.play();
	};	



//Alternates:
	$scope.playi = function(){
		var audioi = new Audio("audio/composerChords/minor-i.mp3");
		audioi.play();
	};


	$scope.playII = function(){
		var audioII = new Audio("audio/composerChords/II.mp3");
		audioII.play();
	};


	$scope.playIII = function(){
		var audioIII = new Audio("audio/composerChords/III.mp3");
		audioIII.play();
	};


	$scope.playiv = function(){
		var audioiv = new Audio("audio/composerChords/minor-iv.mp3");
		audioiv.play();
	};	


	$scope.playv = function(){
		var audiov = new Audio("audio/composerChords/minor-v.mp3");
		audiov.play();
	};


	$scope.playVI = function(){
		var audioVI = new Audio("audio/composerChords/VI.mp3");
		audioVI.play();
	};

});