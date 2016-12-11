"use strict";

app.controller("AuthCtrl", function($scope, $location, $rootScope, AuthFactory, UserFactory){
	$scope.loginContainer = true; //in /auth, automatically defaults to Login window
	$scope.registerContainer = false;

	$scope.login = {
		email: "a@a.com",
		password: "123456"
	};



	let logMeIn = function(loginStuff){
			AuthFactory.authenticate(loginStuff).then(function(didLogin){
			return UserFactory.getUser(didLogin.uid);
		}).then(function(userCreds){
			$rootScope.user = userCreds;
			$scope.loginNewUser = {};
			$scope.registerNewUser = {};
			$location.url("/chordcomposer");
		});
	};

	if($location.path() == "/logout"){  
		AuthFactory.logout(); 
		$rootScope.user = {}; 
		$location.url("/auth"); 
	}

	$scope.setLoginContainer = function(){
		$scope.loginContainer = true;
		$scope.registerContainer = false;
	};

	$scope.setRegisterContainer = function(){
		$scope.loginContainer = false;
		$scope.registerContainer = true;
	};

	$scope.registerUser = function(registerNewUser){
		AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister){
			registerNewUser.uid = didRegister.uid; //this is not the best way to do it, because it's also grabbing the password. Adjust as needed.
			return UserFactory.addUser(registerNewUser);
		}).then(function(registerComplete){
			logMeIn(registerNewUser); 
		});
	};

	$scope.loginUser = function(loginNewUser){
		logMeIn(loginNewUser);
	};	
});