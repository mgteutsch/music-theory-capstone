"use strict";

app.controller("AboutCtrl", function($q, $scope){
	
	//On page load, remove any styling done by Improviser
	angular.element(document.querySelectorAll('#overallBackground')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).removeClass();
	angular.element(document.querySelectorAll('#navbar')).addClass("nav-wrapper pink accent-3");
	
});