#pragma strict

var customSkin : GUISkin;
var showGUI : boolean = false;

function Start () {

}


function OnTriggerEnter(hit : Collider){

    if(hit.gameObject.tag == "Player") {
    //add a tag to the player called Player, or just
    //replace it with your tag if you already have one
    audio.Play();
    showGUI = true;
   	yield WaitForSeconds (2);
   	Application.LoadLevel(3);
    
    
  }
}

function OnGUI(){ 
  	GUI.skin = customSkin;
  	if (showGUI) {
		GUI.Label(Rect(500, 300, 100, 75), "SUCCESS!", "gameover");
	}
}
