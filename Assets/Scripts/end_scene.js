#pragma strict

var alpha : float = 0;

var startAudio : AudioClip; 

function Start () {
	alpha = guiText.color.a;
}

function Update () {
		
	guiText.color.a = alpha;
	LoadLevel();
}

function LoadLevel () {

	if (Input.GetKey(KeyCode.Y)) {
		if (startAudio) {
			AudioSource.PlayClipAtPoint(startAudio, transform.position);
			yield WaitForSeconds(1.2);
			Application.LoadLevel(2);
			}
		}
		
	if (Input.GetKey(KeyCode.N)) {
		Application.LoadLevel(4);
		}
}
