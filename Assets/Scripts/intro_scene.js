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
	if (Input.GetKeyDown(KeyCode.Return)) {
		audio.Play();
		yield WaitForSeconds(1.2);
		Application.LoadLevel(1);
		}
}