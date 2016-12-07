"use strict";

app.factory("ComposerFactory", function($q, $http, FIREBASE_CONFIG){

	var getSavedProgressions = function(userId){
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/chordProgressions.json?orderBy="uid"&equalTo="${userId}"`)
			.success(function(response){
				console.log("ComposerFactory response: ", response);
				let savedProgressions = [];
				Object.keys(response).forEach(function(key){
					console.log("ComposerFactory key: ", key);
					response[key].id = key;
					savedProgressions.push(response[key]);
				});
				resolve(savedProgressions);
				console.log("ComposerFactory savedProgressions: ", savedProgressions);
			})
			.error(function(errorResponse){
				reject(errorResponse);
			});
		});
	};

	var postNewProgression = function(newProgression){
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/chordProgressions.json`,
				JSON.stringify({
					chord1: newProgression.chord1,
					chord2: newProgression.chord2,
					chord3: newProgression.chord3,
					chord4: newProgression.chord4,
					uid: newProgression.uid
				})	
			)
			.success(function(postResponse){
				resolve(postResponse);
			})
			.error(function(postError){
				reject(postError);
			});
		});
	};

	var deleteSavedProgression = function(targetProgressionId){
		console.log("targetProgressionId: ", targetProgressionId);
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/chordProgressions/${targetProgressionId}.json`)
			.success(function(deleteResponse){
				console.log("deleteResponse: ", deleteResponse);
				resolve(deleteResponse);
			})
			.error(function(deleteError){
				console.log("deleteError: ", deleteError);
				reject(deleteError);
			});
		});
	};


	return {getSavedProgressions:getSavedProgressions, postNewProgression:postNewProgression, deleteSavedProgression};
});