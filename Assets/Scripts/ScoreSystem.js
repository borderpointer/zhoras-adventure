#pragma strict

static var myScore = 0;
var customSkin : GUISkin;

function Start() {   
	
}
 
function OnGUI(){ 
  	GUI.skin = customSkin;
	GUI.Label(Rect(1010, 49.3, 100, 75), "" + myScore);
	
}