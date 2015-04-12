/************* code for current location gathering **************************/

/*
// attempts to gather the user's location
function getDeviceLocation() {
	navigator.geolocation.watchPosition(successfulLocation, failedLocation);
}

// gets the current location of the user and stores info in global vars
function successfulLocation(currPosition) {
	getPartyData(currPosition);
}

// produces an error if current location can't be accessed
function failedLocation(error) {
	alert("ERROR: " + error.code + " " + error.message);
}
*/


// loading all local party data from Parse
function getPartyData() {

	// querying all party data
	var Party = Parse.Object.extend("Party");
	var party_query = new Parse.Query(Party);

	// creating a gesture recognizer
	var gestureHandler = new Hammer.Manager(document.getElementById('party_list'));
	gestureHandler.add( new Hammer.Swipe({ event: 'swipeleft' }) );

	// specifying animations for gesture
	gestureHandler.on("swipeleft", function(ev) {
		$("#" + ev.target.id).animate({ opacity: 0.25, right: '+=500' } , "400", 
			function() {
     					$('#party_list').animate(
     						{ opacity: 0, right: '+=500' } , "800", 
     						function() {
     							document.body.innerHTML = "";
     							loadPartyPictures(ev.target.id)
     						}
     					);
     		}
     	);
	});

	// iterating through all parties and modifying html
	party_query.find({
		success : function(results) {
			for (var i = 0; i < results.length; i++) {
				var party = document.createElement("div");
				var party_title = document.createElement("dt");
				var title_content = document.createTextNode(results[i].get("title"));
				var amount_donated = document.createElement("dd");
				var amount_content = document.createTextNode("total donations: " + results[i].get("money_donated"));

				// adding new elements
				party_title.appendChild(title_content);
				amount_donated.appendChild(amount_content);
				party.appendChild(party_title);
				party.appendChild(amount_donated);
				party.setAttribute("class", "party");
				party.setAttribute("id", results[i].id);
				party.style.position = "relative";
				document.getElementById("party_list").style.position = "relative";
				document.getElementById("party_list").appendChild(party);
			}
		}, 

		error : function(error) {
			alert("ERROR: " + error.code + ", " + error.message);
		}
	});

}

// loading all pictures for the specified party
function loadPartyPictures(party_id) {

	// querying all party data
	var PartyPhoto = Parse.Object.extend("PartyPhoto");
	var photo_query = new Parse.Query(Party);

}