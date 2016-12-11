"use strict";

app.factory("ComposerFactory", function($q, $http, FIREBASE_CONFIG){

	var getSavedProgressions = function(userId){
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/chordProgressions.json?orderBy="uid"&equalTo="${userId}"`)
			.success(function(response){
				let savedProgressions = [];
				Object.keys(response).forEach(function(key){
					response[key].id = key;
					savedProgressions.push(response[key]);
				});
				resolve(savedProgressions);
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
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/chordProgressions/${targetProgressionId}.json`)
			.success(function(deleteResponse){
				resolve(deleteResponse);
			})
			.error(function(deleteError){
				reject(deleteError);
			});
		});
	};


	var editSavedProgression = function(editProgression){
		console.log("from Factory: ", editProgression);
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/chordProgressions/${editProgression.id}.json`, 
				JSON.stringify({
					chord1: editProgression.chord1,
					chord2: editProgression.chord2,
					chord3: editProgression.chord3,
					chord4: editProgression.chord4,
					uid: editProgression.uid
				})
			)
			.success(function(editResponse){
				resolve(editResponse);
			})
			.error(function(editError){
				reject(editError);
			});	
		});
	};


	return {getSavedProgressions:getSavedProgressions, postNewProgression:postNewProgression, deleteSavedProgression, editSavedProgression:editSavedProgression};
});