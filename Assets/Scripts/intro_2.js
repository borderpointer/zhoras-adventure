#pragma strict

var alpha : float = 0;

function Start () {
	alpha = guiText.color.a;
}

function Update () {
		
	guiText.color.a = alpha;
	LoadLevel();
}

function LoadLevel () {
		yield WaitForSeconds(3.5);
		Application.LoadLevel(Application.loadedLevel + 1);
}