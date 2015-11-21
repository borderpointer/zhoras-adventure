#pragma strict

var startTime : float;
var restSeconds : int;
var roundedRestSeconds : int;
var displaySeconds : int;
var displayMinutes : int;
var text;
var customSkin : GUISkin;
var countDownSeconds : int;
var timetext : String;
 
function Awake() {
    startTime = Time.time;
}
 
function OnGUI () {
    //make sure that your time is based on when this script was first called
    //instead of when your game started
    GUI.skin = customSkin;
    
    var guiTime : float = Time.time - (startTime);
 
    restSeconds = countDownSeconds - (guiTime);
 
    //display messages or whatever here -->do stuff based on your timer
    if (restSeconds == 60) {
    	GUI.Label(Rect(390, 200, 1000, 1000), "HURRY UP!", "hurryup");
    }
    //display the timer
    roundedRestSeconds = Mathf.CeilToInt(restSeconds);
    displaySeconds = roundedRestSeconds % 60;
    displayMinutes = roundedRestSeconds / 60; 
    
 	timetext = (displayMinutes.ToString()+":");
 	
	if (displaySeconds > 9) {
    timetext = timetext + displaySeconds.ToString();
	}
	else {
    timetext = timetext + "0" + displaySeconds.ToString();
	}
	
	GUI.Label(Rect(1220, 49.3, 100, 75), timetext);
	
	LoadLevel();
   
}

function LoadLevel() {
    if (restSeconds == 0) {
 		GUI.Label(Rect(390, 250, 1000, 1000), "GAME OVER", "gameover");
 		yield WaitForSeconds(.7);
 		Application.LoadLevel(2);
    }
 
}