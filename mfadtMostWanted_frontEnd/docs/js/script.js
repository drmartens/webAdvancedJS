//Global Variables
// var names = "Jewell Munter:854370;Alden Ehrhard:852014;Chance Hunnewell:158189;Adriana Geffers:17473;Celia Schnieders:746599;Corliss Denk:791623;Sally Zehnpfennig:185749;Jayme Behrends:462289;Jesica Farmsworth:720507;Laree Chime:822125;Henrietta Chandsawangbh:400455;Regine Criado:593497;Louann Rull:437496;Raylene Bodell:230709;Lenora Heidorn:84678;Terica Bacote:53904;Dena Picket:584555;Laurie Arambuia:912065;Freeda Barbar:725347;Arlena Blenden:512319;Toshia Siaperas:623512;Randell Hassig:117809;Denise Litsey:461117;Ron Blankenbecler:147578;Quincy Wileman:626921;Cherish Patz:744193;Burma Erskin:5184;Arron Bulfer:803810;Tiny Pokorski:482737;Mitzie Hadef:253250;Genie Malys:421633;Robbin Steenburg:356368;Delsie Gallegos:76374;Kaycee Leone:924465;Lorna Komar:474375;Joie Warf:448658;Zana Philpot:710606;Caroline Koles:87033;Joey Heine:740998;Pilar Gividen:714223;Kesha Rushforth:157566;Phebe Yournet:979838;Casimira Wohlenhaus:244810;Glenda Prestridge:466791;Bianca Derienzo:510015;Earnest Lapage:888249;Argentina Arnoux:672254;Elva Wieto:786812;Tomi Kirgan:684709;Jacquelynn Drader:666873;Robert Dasen:449309;";

var resultsDiv = document.getElementById("resultsDiv");



var inputVal;
var nameArray = [];
var results;
//Immediately Invoked Function that runs when DOM is ready

(function() {
	if (document.readyState != "loading") {
		addEventListener();
		var dictionary = new Dictionary(names,";",":");
		


	} else {
		document.addEventListener("DOMContentLoaded", function() {
		//create instance with seperators I want to parse text by
		addEventListener();
		var dictionary = new Dictionary(names,";",":");

		});

	}

})();


//function to get input

//function to sort dictionaroy

function Dictionary (nameString, entryDelimiter, recordDelimiter){
	let eD = entryDelimiter;
	let rD = recordDelimiter;
	let entryArray = nameString.split(eD);
	// console.log(entryArray);

	for (i=0;i<entryArray.length;i++) {
		let tempHolder = entryArray[i].split(rD);
		// console.log(tempHolder);
		nameArray.push({name:tempHolder[0], id:tempHolder[1]});
	}
}

//function to match the input
function matchInput(val) {
	// let matches = [];
	let filter = val.toLowerCase();
	// for (i=0;i<nameArray.length;i++) {
	// 	if (nameArray[i].name.indexOf(val) > -1) {
	// 	matches.push({name: nameArray[i].name, id:nameArray[i].id});
	// 	}

	// }

	let matches = [];
	var min = 0;
	var max = nameArray.length-1;
	var temp;
	var mid;

	// while (min <= max) {
	// 	mid = Math.round(min + (max-min)/2);
	// 	temp = nameArray[mid] ? nameArray[mid][val] : undefined;
	// 	if (temp === target) {
	// 		return nameArray[mid];
	// 	} else if (temp < target) {
	// 		min = mid + 1;
	// 	} else {
	// 		max = mid - 1;
	// 	}
	// }

//implemnet binary saerch to make it faster?????

	for (i=0;i<nameArray.length;i++) {
		let tempChar = nameArray[i].name.toLowerCase().slice(0,filter.length);
		// while (min <= max) {
		// mid = Math.round(min + (max-min)/2);
		// temp = nameArray[mid] ? nameArray[mid][val] : undefined;
		// if (temp === tempChar) {
		// return nameArray[mid];
		// } else if (temp < tempChar) {
		// 	min = mid + 1;
		// } else {
		// 	max = mid - 1;
		// 	}
	 // }
		if (filter === tempChar) {
			matches.push({name: nameArray[i].name, id:nameArray[i].id});
		}
	}

	var sortedMatches = matches.slice(0);
	sortedMatches.sort(function(a,b){
		return a.id - b.id;
	});

	matches = sortedMatches;
	return matches;



}

//events

function addEventListener(){
	var input = document.querySelector('input');
	input.addEventListener('input',handleInput,false);
}

function handleInput(event) {
	let value = event.target.value;
	inputVal = value;
	console.log(inputVal);
	showResults();
}


//function to show the input in list
function showResults() {
	let inputArray = inputVal;
	var searchResults = document.getElementById("searchResults");

	if (inputArray.length > 0) {
		var showResults = [];

		searchResults.innerHTML = '';

		showResults = matchInput(inputVal);
		// console.log(showResults);
		for (i=0;i<showResults.length;i++) {
			searchResults.innerHTML += '<li>' + '<span id="listSpan">Rank: '+ showResults[i].id + ': </span> ' + showResults[i].name +  '</li>';
			//+ '<img src = "iconPerson.png">' 
		}
		searchResults.style.display = 'block';
	} else {
		showResults = [];
		searchResults.innerHTML = '';
		// resultsDiv.innerHTML += '<img src ="http://www.iceflowstudios.com/v3/wp-content/uploads/2013/01/LoadingCircle_finalani.gif"></img>';

		// searchResults.style.display = 'hidden';
	}

}




// 	function matchPeople(input) {
// //   var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
// //   return people.filter(function(person) {
// //     if (person.match(reg)) {
// //       return person;
// //     }
// //   });
// // }

// 	for (i=0;i<this.dictionary.length;i++) {
// 		var recordName = this.dictionary[i].name;
// 		var recordID = this.dictionary[i].id;
// 		console.log(recordName);
// 		// console.log(recordID);

// 		if (this.inputVal === recordName.slice(0, this.inputVal.length)) {
// 		this.recordArray.push(recordName)
// 		// console.log(recordArray);
// 		// if (inputText === recordName.slice(0, inputText.length)){
// 		// 	recordArray.push({entryName:recordName, entryID:recordID});
// 		}
// 	}
// 		console.log("The record Array is" + this.recordArray);


	

// }


// if (input_value.length>0){
// 	this.inputVal.push(input_value);
// 	console.log(this.inputVal);

// 	if (input_value.length>0){
// 		var recordsToShow =[]
// 		nameResults = document.getElementById('searchResults');
// 		nameResults.innerHTML = '';
// 		recordsToShow = this.	



// 	}


// 		if (input_value === recordName.slice(0, input_value.length)) {
// 			recordArray.push({entryName:recordName, entryID:recordID});
// 		}
// 		return recordArray;
// 		console.log(recordArray);



// input.onkeyup = function (k) {
// input_value = this.value; //update on each instance
	
// 	if (input_value.length >0) {
// 		var recordsToShow = [];
// 		matchName_results = document.getElementById('searchResults');
// 		matchName_results.innerHTML = '';
// 		recordsToShow = this.matchNames(input_value); 

// 		for (i=0; i<recordsToShow; i++) {
// 			matchName_results.innerHTML += '<li>' + recordsToShow[i] + '</li>';
// 		}
// 		matchName_results.style.display = 'block';
// 	} else {
// 		recordstoShow = [];
// 		matchName_results.innerHTML = '';
// 	}
// }










// HTML
// <input type="text" onkeyup="changeInput(this.value)">
// <div id="result"></div>
// JavaScript

// var people = ['Steven', 'Sean', 'Stefan', 'Sam', 'Nathan'];

// function matchPeople(input) {
//   var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
//   return people.filter(function(person) {
//     if (person.match(reg)) {
//       return person;
//     }
//   });
// }

// function changeInput(val) {
//   var autoCompleteResult = matchPeople(val);
//   document.getElementById("result").innerHTML = autoCompleteResult;
// }






