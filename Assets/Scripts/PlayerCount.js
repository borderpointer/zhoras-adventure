#pragma strict

static var playerNumber = 3;
var customSkin : GUISkin;
var alpha : float = 0;

function Start() { 
	alpha = guiText.color.a;  
	
}
 
function OnGUI(){ 
  	GUI.skin = customSkin;
	GUI.Label(Rect(760, 49.3, 100, 75), "" + playerNumber);
	
	LoadLevel();
}

function LoadLevel() {
    if (playerNumber <= 0) {
    	audio.Play();
 		GUI.Label(Rect(390, 250, 1000, 1000), "GAME OVER", "gameover");
 		yield WaitForSeconds(.7);
 		Application.LoadLevel(3);
    }
 
}