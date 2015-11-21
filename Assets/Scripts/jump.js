#pragma strict

var jumpAudio : AudioClip;
var jumpheight : float = 1.5;
var jump : boolean;

function Update () {

var jumper = gameObject.FindWithTag("PlayerMain");

  	if (jumpAudio) {
  		if (Input.GetKeyDown(KeyCode.Space)) {
  			
  			animation.Play("z_jump");
  			jumper.transform.Translate(Vector3(0, jumpheight, 0));
  			AudioSource.PlayClipAtPoint(jumpAudio, transform.position);
  			audio.volume = 1.0;
  			}
  		
  		if (jumper.transform.position.y >= 7) {
  			
  			jumper.transform.Translate(Vector3(0, -jumpheight, 0));
  		} 
  		
  		if (jumper.transform.position.y <=2.17) {
  			jumper.transform.Translate(Vector3(-21.0374, 2.177915, -2.2));
  		}
	}
}

