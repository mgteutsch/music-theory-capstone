"use strict";

app.controller("SingleLessonCtrl", function($q, $scope){

	//On page load, styling for chord will match the styling of that chord Improviser
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#overallBackground')).addClass("singleLessonBackground");

	
	// First Audio Sample -------------------------------------------
	// --------------------------------------------------------------

		var audio_sample1 = document.getElementById('ii_sample1');

		$scope.ii_sample1_START = function(){
	        audio_sample1.play();
	        $scope.ii_sample1_revealPlayOrPause = true;

	        //Glowing:
	        let glowNextBox = function(){
				angular.element(document.querySelector('#ii_chordBox1')).addClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");


				var nextGlowBox1 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).addClass("lessonGlowBox");	
				},2000);

					let stopNextGlow1 = function(){
						clearTimeout(nextGlowBox1);
					};
						

				var nextGlowBox2 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).addClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");	
				},4000);

					let stopNextGlow2 = function(){
						clearTimeout(nextGlowBox2);
					};

				var nextGlowBox3 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).addClass("lessonGlowBox");	
				},6000);

					let stopNextGlow3 = function(){
						clearTimeout(nextGlowBox3);
					};

				var nextGlowBox4 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).addClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");	
				},8000);

					let stopNextGlow4 = function(){
						clearTimeout(nextGlowBox4);
					};

				var nextGlowBox5 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox2')).addClass("lessonGlowBox");	
				},10000);

					let stopNextGlow5 = function(){
						clearTimeout(nextGlowBox5);
					};

				//Stop Glowing:	
				$scope.ii_sample1_glowSTOP = function(){
						stopNextGlow1();
						stopNextGlow2();
						stopNextGlow3();
						stopNextGlow4();
						stopNextGlow5();
				};
			};	
			glowNextBox();
			

			//Stop Audio:		
			$scope.ii_sample1_END = function(){
				audio_sample1.pause();
				audio_sample1.currentTime = 0;
				$scope.ii_sample1_revealPlayOrPause = false;
				angular.element(document.querySelector('#ii_chordBox1')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox2')).removeClass("lessonGlowBox");
			};
				    
		};	

	
	// Second Audio Sample (Valerie Verse) --------------------------
	// --------------------------------------------------------------

		var audio_sample2 = document.getElementById('ii_sample2');

		$scope.ii_sample2_START = function(){
	        audio_sample2.play();
	        $scope.ii_sample2_revealPlayOrPause = true;
	        angular.element(document.querySelector('#ii_chordBox3')).addClass("lessonGlowBox");

	        //Stop Audio:		
			$scope.ii_sample2_END = function(){
				audio_sample2.pause();
				audio_sample2.currentTime = 0;
				$scope.ii_sample2_revealPlayOrPause = false;
				angular.element(document.querySelector('#ii_chordBox3')).removeClass("lessonGlowBox");
			};
	    };


	// Third Audio Sample (Sunday Morning) --------------------------
	// --------------------------------------------------------------

	/* ORIGINAL SONG */
		var audio_sample3 = document.getElementById('ii_sample3');

		$scope.ii_sample3_START = function(){
	        audio_sample3.play();
	        $scope.ii_sample3_revealPlayOrPause = true;
	        angular.element(document.querySelector('#ii_chordBox6')).addClass("lessonGlowBox");

	        //Stop Audio:		
			$scope.ii_sample3_END = function(){
				audio_sample3.pause();
				audio_sample3.currentTime = 0;
				$scope.ii_sample3_revealPlayOrPause = false;
				angular.element(document.querySelector('#ii_chordBox6')).removeClass("lessonGlowBox");
			};
	    };

	/* CLARIFY PROGRESSION */
		var audio_sample4 = document.getElementById('ii_sample4');

		$scope.ii_sample4_START = function(){
	        audio_sample4.play();
	        $scope.ii_sample4_revealPlayOrPause = true;
	        angular.element(document.querySelector('#ii_chordBox10')).addClass("lessonGlowBox");

	        //Stop Audio:		
			$scope.ii_sample4_END = function(){
				audio_sample4.pause();
				audio_sample4.currentTime = 0;
				$scope.ii_sample4_revealPlayOrPause = false;
				angular.element(document.querySelector('#ii_chordBox10')).removeClass("lessonGlowBox");
			};
	    };             

});
