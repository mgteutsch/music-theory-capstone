"use strict";

app.controller("EarTrainingCtrl", function($q, $scope){
	
	//On page load, remove any styling done by Improviser
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");

	//On page load, have the chord values equal nothing rather than undefined:
	$scope.earTraining = {};


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

		let glowNextBox_earTraining = function(){
			angular.element(document.querySelector('.earTrainingInput1')).addClass("earTrainingGlowBox");
			angular.element(document.querySelector('.earTrainingInput4')).removeClass("earTrainingGlowBox");


			var nextGlowBox1_earTraining = setTimeout(function(){
				angular.element(document.querySelector('.earTrainingInput1')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput2')).addClass("earTrainingGlowBox");	
			},2200);

				let stopNextGlow1_earTraining = function(){
					clearTimeout(nextGlowBox1_earTraining);
				};


			var nextGlowBox2_earTraining = setTimeout(function(){
				angular.element(document.querySelector('.earTrainingInput2')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput3')).addClass("earTrainingGlowBox");	
			},4300);

				let stopNextGlow2_earTraining = function(){
					clearTimeout(nextGlowBox2_earTraining);
				};


			var nextGlowBox3_earTraining = setTimeout(function(){
				angular.element(document.querySelector('.earTrainingInput3')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput4')).addClass("earTrainingGlowBox");	
			},6400);

				let stopNextGlow3_earTraining = function(){
					clearTimeout(nextGlowBox3_earTraining);
				};

			var nextGlowBox4_earTraining = setTimeout(function(){
				angular.element(document.querySelector('.earTrainingInput4')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput1')).addClass("earTrainingGlowBox");	
			},8500);

				let stopNextGlow4_earTraining = function(){
					clearTimeout(nextGlowBox4_earTraining);
				};

			var nextGlowBox5_earTraining = setTimeout(function(){
				angular.element(document.querySelector('.earTrainingInput1')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput2')).addClass("earTrainingGlowBox");	
			},10600);

				let stopNextGlow5_earTraining = function(){
					clearTimeout(nextGlowBox5_earTraining);
				};


			$scope.earTrainingPause = function(){
				audio_earTraining.pause();
				audio_earTraining.currentTime = 0;
				stopNextGlow1_earTraining();
				stopNextGlow2_earTraining();
				stopNextGlow3_earTraining();
				stopNextGlow4_earTraining();
				stopNextGlow5_earTraining();
				angular.element(document.querySelector('.earTrainingInput1')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput2')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput3')).removeClass("earTrainingGlowBox");
				angular.element(document.querySelector('.earTrainingInput4')).removeClass("earTrainingGlowBox");
			};
		};
		glowNextBox_earTraining();			
	};


	//Initialization of Collapsible:
	$(document).ready(function(){
	    $('.collapsible').collapsible();
	});

	$scope.checkAnswer = function(userChords){
		
		angular.element(document.querySelector('.earTrainingInput1')).removeClass("earTrainingInputWrong");
		angular.element(document.querySelector('.earTrainingInput2')).removeClass("earTrainingInputWrong");
		angular.element(document.querySelector('.earTrainingInput3')).removeClass("earTrainingInputWrong");
		angular.element(document.querySelector('.earTrainingInput4')).removeClass("earTrainingInputWrong");


		if(userChords.chord1=="ii" && userChords.chord2=="IV" && userChords.chord3=="vi" && userChords.chord4=="V"){
			
			angular.element(document.querySelector('#answerResultBox')).removeClass("wrongAnswer");
			angular.element(document.querySelector('#answerResultBox')).addClass("correctAnswer");
			document.getElementById('answerResultText').innerHTML = "CORRECT!";

			angular.element(document.querySelector('.earTrainingInput1')).addClass("earTrainingInputCorrect");
			angular.element(document.querySelector('.earTrainingInput2')).addClass("earTrainingInputCorrect");
			angular.element(document.querySelector('.earTrainingInput3')).addClass("earTrainingInputCorrect");
			angular.element(document.querySelector('.earTrainingInput4')).addClass("earTrainingInputCorrect");

			$scope.nextSongHide = false;


		} else {

			angular.element(document.querySelector('#answerResultBox')).removeClass("correctAnswer");
			angular.element(document.querySelector('#answerResultBox')).addClass("wrongAnswer");
			document.getElementById('answerResultText').innerHTML = "Try Again!";

			angular.element(document.querySelector('.earTrainingInput1')).removeClass("earTrainingInputCorrect");
			angular.element(document.querySelector('.earTrainingInput2')).removeClass("earTrainingInputCorrect");
			angular.element(document.querySelector('.earTrainingInput3')).removeClass("earTrainingInputCorrect");
			angular.element(document.querySelector('.earTrainingInput4')).removeClass("earTrainingInputCorrect");

			if(userChords.chord1!=="ii"){
				angular.element(document.querySelector('.earTrainingInput1')).addClass("earTrainingInputWrong");
			}
			if(userChords.chord2!=="IV"){
				angular.element(document.querySelector('.earTrainingInput2')).addClass("earTrainingInputWrong");
			}
			if(userChords.chord3!=="vi"){
				angular.element(document.querySelector('.earTrainingInput3')).addClass("earTrainingInputWrong");
			}
			if(userChords.chord4!=="V"){
				angular.element(document.querySelector('.earTrainingInput4')).addClass("earTrainingInputWrong");
			}

			$scope.nextSongHide = true;
		}
	};

	$scope.earTrainingNextSong = function(clearChords){
		$scope.earTraining = {};
		$scope.nextSongHide = true;

		angular.element(document.querySelector('.earTrainingInput1')).removeClass("earTrainingInputCorrect");
		angular.element(document.querySelector('.earTrainingInput2')).removeClass("earTrainingInputCorrect");
		angular.element(document.querySelector('.earTrainingInput3')).removeClass("earTrainingInputCorrect");
		angular.element(document.querySelector('.earTrainingInput4')).removeClass("earTrainingInputCorrect");
	};

});