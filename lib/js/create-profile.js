var questionIndex;
var profileQuestions = {
				"sex":["Male", "Female"],
				"class":["Humble", "Working Class", "Upper Crust"],
				"origin":["Immigrant", "Native"],
				"education":["None", "High School", "Associates", "Bachelors", "Graduate"],
				"sector":["Farming", "Manufacturing","Technology"]
			}
			
var questionKeys = Object.keys(profileQuestions);
			
document.getElementById("profile-option-div").onload = initProfileSetup();
	
function initProfileSetup(){
	questionIndex = 0;
	displayOptions(questionIndex);
}

function displayOptions(questionIndex){
	var questionKey = questionKeys[questionIndex];
	var questionOptions = profileQuestions[questionKey];
	document.getElementById("profile-option-div").innerHTML = '<div id="button-container"></div>';
	for(var i=0; i < questionOptions.length; i++){
		var questionLabel = questionOptions[i];
		var questionButton = '<p><button class="setup-button" onclick="toggleQuestions()"><span>' + questionLabel + '</span></button></p>';
		document.getElementById("button-container").innerHTML += questionButton;
	}
}

function toggleQuestions(){
	hideButtonDiv();
	if(questionIndex < questionKeys.length -1){
	questionIndex++;
	var buttonContainer = document.getElementById("button-container");
	buttonContainer.parentNode.removeChild(buttonContainer);
	displayOptions(questionIndex);
	showButtonDiv();
	}
}

function hideButtonDiv(){
	var buttonContainer = document.getElementById("profile-option-div");
	buttonContainer.style.display = "none";
}

function showButtonDiv(){
	var buttonContainer = document.getElementById("profile-option-div");
	buttonContainer.style.display = "block";
}