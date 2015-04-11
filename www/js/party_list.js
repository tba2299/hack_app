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


$$('div', 'dl').tap(() {
	this.style('color', 'red');
});


// loading all local party data from Parse
function getPartyData() {

	// querying all party data
	var Party = Parse.Object.extend("Party");
	var party_query = new Parse.Query(Party);

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
				document.getElementById("party_list").appendChild(party);
			}
		}, 

		error : function(error) {
			alert("Error fetching party information.");
		}
	});

}