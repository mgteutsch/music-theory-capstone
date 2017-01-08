"use strict";

app.controller("SingleLessonCtrl", function($q, $scope){

	//On page load, styling for chord will match the styling of that chord Improviser
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#overallBackground')).addClass("singleLessonBackground");

	//For More Quiz Collapsible (bottom of page):
	$(document).ready(function(){
	    $('.collapsible').collapsible();
	});
	

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

	        //Glowing:
	        let glowNextBox = function(){
				angular.element(document.querySelector('#ii_chordBox3')).addClass("lessonGlowBox");


				var nextGlowBox1 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox3')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox4')).addClass("lessonGlowBox");	
				},6700);

					let stopNextGlow1 = function(){
						clearTimeout(nextGlowBox1);
					};

				var nextGlowBox2 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox4')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox5')).addClass("lessonGlowBox");	
				},11700);

					let stopNextGlow2 = function(){
						clearTimeout(nextGlowBox2);
					};

				var nextGlowBox3 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox5')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox4')).addClass("lessonGlowBox");	
				},16700);

					let stopNextGlow3 = function(){
						clearTimeout(nextGlowBox3);
					};

				var nextGlowBox4 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox4')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox5')).addClass("lessonGlowBox");	
				},21700);

					let stopNextGlow4 = function(){
						clearTimeout(nextGlowBox4);
					};

				var nextGlowBox5 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox5')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox4')).addClass("lessonGlowBox");	
				},26700);

					let stopNextGlow5 = function(){
						clearTimeout(nextGlowBox5);
					};

				//Stop Glowing:	
				$scope.ii_sample2_glowSTOP = function(){
						stopNextGlow1();
						stopNextGlow2();
						stopNextGlow3();
						stopNextGlow4();
						stopNextGlow5();
				};		

			};
			glowNextBox();
					
	        //Stop Audio:		
			$scope.ii_sample2_END = function(){
				audio_sample2.pause();
				audio_sample2.currentTime = 0;
				$scope.ii_sample2_revealPlayOrPause = false;
				angular.element(document.querySelector('#ii_chordBox3')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox4')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox5')).removeClass("lessonGlowBox");
			};
	    };


	// Third Audio Sample (Sunday Morning) --------------------------
	// --------------------------------------------------------------

	/* ORIGINAL SONG */
		var audio_sample3 = document.getElementById('ii_sample3');

		$scope.ii_sample3_START = function(){
	        audio_sample3.play();
	        $scope.ii_sample3_revealPlayOrPause = true;
	        

	        //Glowing:
	        let glowNextBox = function(){
				angular.element(document.querySelector('#ii_chordBox6')).addClass("lessonGlowBox");


				var nextGlowBox1 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox6')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox7')).addClass("lessonGlowBox");	
				},1500);

					let stopNextGlow1 = function(){
						clearTimeout(nextGlowBox1);
					};

				var nextGlowBox2 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox7')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox8')).addClass("lessonGlowBox");	
				},2800);

					let stopNextGlow2 = function(){
						clearTimeout(nextGlowBox2);
					};

				var nextGlowBox3 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox8')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox9')).addClass("lessonGlowBox");	
				},4200);

					let stopNextGlow3 = function(){
						clearTimeout(nextGlowBox3);
					};

				var nextGlowBox4 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox9')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox7')).addClass("lessonGlowBox");	
				},7000);

					let stopNextGlow4 = function(){
						clearTimeout(nextGlowBox4);
					};

				var nextGlowBox5 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox7')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox8')).addClass("lessonGlowBox");	
				},8300);

					let stopNextGlow5 = function(){
						clearTimeout(nextGlowBox5);
					};

				var nextGlowBox6 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox8')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox9')).addClass("lessonGlowBox");	
				},9600);

					let stopNextGlow6 = function(){
						clearTimeout(nextGlowBox6);
					};

				//Stop Glowing:	
				$scope.ii_sample3_glowSTOP = function(){
						stopNextGlow1();
						stopNextGlow2();
						stopNextGlow3();
						stopNextGlow4();
						stopNextGlow5();
						stopNextGlow6();
				};		

			};
			glowNextBox();

	        //Stop Audio:		
			$scope.ii_sample3_END = function(){
				audio_sample3.pause();
				audio_sample3.currentTime = 0;
				$scope.ii_sample3_revealPlayOrPause = false;
				angular.element(document.querySelector('#ii_chordBox6')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox7')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox8')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox9')).removeClass("lessonGlowBox");
			};
	    };

	/* CLARIFY PROGRESSION */
		var audio_sample4 = document.getElementById('ii_sample4');

		$scope.ii_sample4_START = function(){
	        audio_sample4.play();
	        $scope.ii_sample4_revealPlayOrPause = true;

	        //Glowing:
	        let glowNextBox = function(){
				angular.element(document.querySelector('#ii_chordBox10')).addClass("lessonGlowBox");


				var nextGlowBox1 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox10')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox11')).addClass("lessonGlowBox");	
				},1500);

					let stopNextGlow1 = function(){
						clearTimeout(nextGlowBox1);
					};

				var nextGlowBox2 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox11')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox12')).addClass("lessonGlowBox");	
				},2800);

					let stopNextGlow2 = function(){
						clearTimeout(nextGlowBox2);
					};

				var nextGlowBox3 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox12')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox13')).addClass("lessonGlowBox");	
				},4200);

					let stopNextGlow3 = function(){
						clearTimeout(nextGlowBox3);
					};

				var nextGlowBox4 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox13')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox11')).addClass("lessonGlowBox");	
				},7000);

					let stopNextGlow4 = function(){
						clearTimeout(nextGlowBox4);
					};

				var nextGlowBox5 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox11')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox12')).addClass("lessonGlowBox");	
				},8300);

					let stopNextGlow5 = function(){
						clearTimeout(nextGlowBox5);
					};

				var nextGlowBox6 = setTimeout(function(){
					angular.element(document.querySelector('#ii_chordBox12')).removeClass("lessonGlowBox");
					angular.element(document.querySelector('#ii_chordBox13')).addClass("lessonGlowBox");	
				},9600);

					let stopNextGlow6 = function(){
						clearTimeout(nextGlowBox6);
					};

				//Stop Glowing:	
				$scope.ii_sample4_glowSTOP = function(){
						stopNextGlow1();
						stopNextGlow2();
						stopNextGlow3();
						stopNextGlow4();
						stopNextGlow5();
						stopNextGlow6();
				};		

			};
			glowNextBox();

	        //Stop Audio:		
			$scope.ii_sample4_END = function(){
				audio_sample4.pause();
				audio_sample4.currentTime = 0;
				$scope.ii_sample4_revealPlayOrPause = false;
				angular.element(document.querySelector('#ii_chordBox10')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox11')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox12')).removeClass("lessonGlowBox");
				angular.element(document.querySelector('#ii_chordBox13')).removeClass("lessonGlowBox");
			};
	    };             

	

	/* QUIZ SECTION*/
		$scope.quiz = {};

		var audio_quiz = document.getElementById('ii_quiz');

		$scope.quizPlay = function(){
	        audio_quiz.play();

	        //Glowing
	        let glowNextBox = function(){

				var nextGlowBox1 = setTimeout(function(){
					angular.element(document.querySelector('#quiz1')).addClass("quizGlowBox");	
				},4500);

					let stopNextGlow1 = function(){
						clearTimeout(nextGlowBox1);
					};

				var nextGlowBox2 = setTimeout(function(){
					angular.element(document.querySelector('#quiz1')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz2')).addClass("quizGlowBox");	
				},5800);

					let stopNextGlow2 = function(){
						clearTimeout(nextGlowBox2);
					};

				var nextGlowBox3 = setTimeout(function(){
					angular.element(document.querySelector('#quiz2')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz3')).addClass("quizGlowBox");	
				},7000);

					let stopNextGlow3 = function(){
						clearTimeout(nextGlowBox3);
					};

				var nextGlowBox4 = setTimeout(function(){
					angular.element(document.querySelector('#quiz3')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz4')).addClass("quizGlowBox");	
				},8000);

					let stopNextGlow4 = function(){
						clearTimeout(nextGlowBox4);
					};

				var nextGlowBox5 = setTimeout(function(){
					angular.element(document.querySelector('#quiz4')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz1')).addClass("quizGlowBox");	
				},9000);

					let stopNextGlow5 = function(){
						clearTimeout(nextGlowBox5);
					};

				var nextGlowBox6 = setTimeout(function(){
					angular.element(document.querySelector('#quiz1')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz2')).addClass("quizGlowBox");	
				},10200);

					let stopNextGlow6 = function(){
						clearTimeout(nextGlowBox6);
					};

				var nextGlowBox7 = setTimeout(function(){
					angular.element(document.querySelector('#quiz2')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz3')).addClass("quizGlowBox");	
				},11300);

					let stopNextGlow7 = function(){
						clearTimeout(nextGlowBox7);
					};

				var nextGlowBox8 = setTimeout(function(){
					angular.element(document.querySelector('#quiz3')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz4')).addClass("quizGlowBox");	
				},12400);

					let stopNextGlow8 = function(){
						clearTimeout(nextGlowBox8);
					};

				//Stop Glowing:	
				$scope.quiz_glowSTOP = function(){
						stopNextGlow1();
						stopNextGlow2();
						stopNextGlow3();
						stopNextGlow4();
						stopNextGlow5();
						stopNextGlow6();
						stopNextGlow7();
						stopNextGlow8();
				};		
	    

				//Stop Audio			
				$scope.quizPause = function(){
			        audio_quiz.pause();
			        audio_quiz.currentTime = 0;
			        angular.element(document.querySelector('#quiz1')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz2')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz3')).removeClass("quizGlowBox");
					angular.element(document.querySelector('#quiz4')).removeClass("quizGlowBox");
			    }; 
		    };
		    glowNextBox();

		};


	    $scope.checkQuizAnswer = function(quizAnswers){
	    	
	    	if(quizAnswers.chord1=="I" && quizAnswers.chord2=="ii" && quizAnswers.chord3=="vi" && quizAnswers.chord4=="IV"){
	    		angular.element(document.querySelector('.quizInput1')).removeClass("quizInputWrong");
				angular.element(document.querySelector('.quizInput2')).removeClass("quizInputWrong");
				angular.element(document.querySelector('.quizInput3')).removeClass("quizInputWrong");
				angular.element(document.querySelector('.quizInput4')).removeClass("quizInputWrong");

				angular.element(document.querySelector('.quizInput1')).addClass("quizInputCorrect");
				angular.element(document.querySelector('.quizInput2')).addClass("quizInputCorrect");
				angular.element(document.querySelector('.quizInput3')).addClass("quizInputCorrect");
				angular.element(document.querySelector('.quizInput4')).addClass("quizInputCorrect");


	    	} else {
				angular.element(document.querySelector('.quizInput1')).removeClass("quizInputCorrect");
				angular.element(document.querySelector('.quizInput2')).removeClass("quizInputCorrect");
				angular.element(document.querySelector('.quizInput3')).removeClass("quizInputCorrect");
				angular.element(document.querySelector('.quizInput4')).removeClass("quizInputCorrect");

				if(quizAnswers.chord1!=="I"){
					angular.element(document.querySelector('.quizInput1')).addClass("quizInputWrong");
				}
				if(quizAnswers.chord2!=="ii"){
					angular.element(document.querySelector('.quizInput2')).addClass("quizInputWrong");
				}
				if(quizAnswers.chord3!=="vi"){
					angular.element(document.querySelector('.quizInput3')).addClass("quizInputWrong");
				}
				if(quizAnswers.chord4!=="IV"){
					angular.element(document.querySelector('.quizInput4')).addClass("quizInputWrong");
				}
	    	}    
	    };	

	    $scope.nextQuizSong = function(clearChords){
	    	$scope.quiz = {};

	    	angular.element(document.querySelector('.quizInput1')).removeClass("quizInputCorrect");
			angular.element(document.querySelector('.quizInput2')).removeClass("quizInputCorrect");
			angular.element(document.querySelector('.quizInput3')).removeClass("quizInputCorrect");
			angular.element(document.querySelector('.quizInput4')).removeClass("quizInputCorrect");

			angular.element(document.querySelector('.quizInput1')).removeClass("quizInputWrong");
			angular.element(document.querySelector('.quizInput2')).removeClass("quizInputWrong");
			angular.element(document.querySelector('.quizInput3')).removeClass("quizInputWrong");
			angular.element(document.querySelector('.quizInput4')).removeClass("quizInputWrong");
	    };
	 

});
