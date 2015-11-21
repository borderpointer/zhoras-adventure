#pragma strict

var speed : float = 5.0;
var jumpAudio : AudioClip;
private var jumping : boolean = false;
var CurrentPosition : Vector3;
var startPositionY : float;

function Start () {
}
	startPositionY = rigidbody.position.y;

function FixedUpdate () {
	
	CurrentPosition = rigidbody.position;
	
	if (Mathf.Abs(Input.GetAxis("Horizontal"))) {
		transform.Translate(Vector3 (0, 0, Input.GetAxis("Horizontal")) * speed);
		animation.Play("z_walk");
	}

	if (Input.GetKeyDown(KeyCode.DownArrow)) {
		animation.Play("z_down");
	}

  	if (jumpAudio) {
  		if (Input.GetKeyDown(KeyCode.Space)) {
  			
  			animation.Play("z_jump");
  			jumping = true;
			rigidbody.velocity=Vector3.up*12;
  			AudioSource.PlayClipAtPoint(jumpAudio, transform.position);
  			audio.volume = 1.0;
  			}

         if (rigidbody.position.y >= 9.0) {
             rigidbody.velocity=Vector3.down*12;
            }
         if (rigidbody.position.y <= 1.2) {
             jumping = false;
             rigidbody.velocity=Vector3.down*0;
             rigidbody.position.y = startPositionY;
             
            }            
 }
 }


