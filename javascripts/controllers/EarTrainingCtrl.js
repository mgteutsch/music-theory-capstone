"use strict";

app.controller("EarTrainingCtrl", function($q, $scope){
	
	//On page load, remove any styling done by Improviser
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");

	$scope.clearCheckboxes = function(){
		$('input:checkbox').prop('checked', false);
	};

	$scope.selectAllCheckboxes = function(){
		$('input:checkbox').prop('checked', true);
	};

	//For Demo Purposes:
	var audio_earTraining = document.getElementById('earTrainingSong');

	$scope.earTrainingPlay = function(){
		audio_earTraining.play();
		angular.element(document.querySelector('.earTrainingInput1')).addClass("lessonGlowBox");
	};

	$scope.earTrainingPause = function(){
		audio_earTraining.pause();
		audio_earTraining.currentTime = 0;
		angular.element(document.querySelector('.earTrainingInput1')).removeClass("lessonGlowBox");
	};

	$scope.checkAnswer = function(userChords){
		if(userChords.chord1=="ii" && userChords.chord2=="IV" && userChords.chord3=="vi" && userChords.chord4=="V"){
			console.log("CORRECT");
		} else {
			console.log("Try Again;");
		}
	};

});