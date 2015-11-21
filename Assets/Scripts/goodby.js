#pragma strict

function Update () {
		
	LoadLevel();
}

function LoadLevel () {
		yield WaitForSeconds(2);
		Application.LoadLevel(0);
		
}