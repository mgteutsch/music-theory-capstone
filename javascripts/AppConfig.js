"use strict";


let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		resolve(); 
	} else {
		reject();
	}	
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
	firebase.initializeApp(FIREBASE_CONFIG);

	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){ //this is looking for when the url changes, then executes the function
		let logged = AuthFactory.isAuthenticated(); 
		let appTo;

		if(currRoute.originalPath){
			appTo = currRoute.originalPath.indexOf('/auth') !== -1;
		}
		
		if(!appTo && !logged){
			event.preventDefault();
			$location.path('/auth');
		}
	});
});

app.config(function($routeProvider){
	$routeProvider
		.when('/',{ 
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when('/auth',{ 
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when('/lessons', {
			templateUrl: 'partials/lessons.html',
			controller: 'LessonsCtrl',
			resolve: {isAuth}
		})
		.when('/chordcomposer', {	
			templateUrl: 'partials/chordcomposer.html',
			controller: 'ComposerCtrl',
			resolve: {isAuth} 
		})
		.when('/improviser', {
			templateUrl: 'partials/improviser.html',
			controller: 'ImproviserCtrl',
			resolve: {isAuth}
		}) 
		.when('/logout', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl',
			resolve: {isAuth}
		})
		.otherwise('/auth');
});