"use strict";

app.controller("SingleLessonCtrl", function($q, $scope){

	//On page load, styling for chord will match the styling of that chord Improviser
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#overallBackground')).addClass("singleLessonBackground");

	
	// First Audio Sample -------------------------------------------
	// --------------------------------------------------------------

		$scope.ii_sample1_START = function(){
			var ii_audioSample_1 = new Audio('/audio/lessonsAudio/lessons-ii-audio/chordclip-I-ii.mp3');
			ii_audioSample_1.play();

			$scope.ii_revealPlayOrPause_1 = true;
			
			//When the audio file finishes:
			ii_audioSample_1.addEventListener("ended", function(){
				$scope.ii_revealPlayOrPause_1 = false;
				angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");
			});

			//Stop audio and reset elements:
			$scope.ii_sample1_END = function(){
				ii_audioSample_1.pause();

				$scope.ii_revealPlayOrPause_1 = false;

				angular.element(document.querySelector('.lessonChordBoxes')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");
			};
		};
		

		$scope.ii_sample1_STARTGlowBox = function(){			
			let glowNextBox = function(){
				angular.element(document.querySelector('#ii_chordBox1')).addClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");

				var nextGlowBox1 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).addClass("lessonGlowBox");	
				},2000);

				var nextGlowBox2 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).addClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");	
				},4000);

				var nextGlowBox3 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).addClass("lessonGlowBox");	
				},6000);

				var nextGlowBox4 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).addClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");	
				},8000);

				var nextGlowBox5 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).addClass("lessonGlowBox");	
				},10000);

				var done_GlowBox = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");
					$scope.ii_revealPlayOrPause_1 = false;	
				},12000);
			
				$scope.ii_sample1_ENDGlowBox = function(){
				 	clearTimeout(nextGlowBox1,nextGlowBox2,nextGlowBox3,nextGlowBox4,nextGlowBox5);
					clearTimeout(done_GlowBox);
				};
			};
			glowNextBox();
		};




});


// var nextChord;
// 				let playNextChord = function(){
// 					nextChord = setTimeout(function(){chord2Player();},1990);
// 				};
// 				let stopNextChord = function(){
// 					clearTimeout(nextChord);
// 				};
// 			playNextChord();