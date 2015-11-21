#pragma strict


var x : int = 4;
var y : int = 4;

var currentFrame : float = 0.0;
var currentXY : Vector2;
var frameScale : Vector2;
var frameOffset: Vector2;

var deathAudio : AudioClip; 
var treatAudio : AudioClip;

function Update () {
	currentXY = Vector2(Mathf.Floor(currentFrame % x), Mathf.Floor(currentFrame/y));
	frameScale = Vector2 (1.0/x, 1.0/y);
	frameOffset = Vector2(currentXY.x/x, 1.0 -(1.0-currentXY.y)/y);
	
	renderer.material.SetTextureScale("_MainTex", frameScale);
	renderer.material.SetTextureOffset("_MainTex", frameOffset);

}


//detects collision

function OnTriggerEnter(hit : Collider) {
	if (hit.gameObject.tag == "Enemy") {
	  var player= gameObject.FindWithTag("Player");
	  var playerMain = gameObject.FindWithTag("PlayerMain");
   	  var newPlayer = Instantiate(player,new Vector3(-20.7, 2.177914, -2.2), player.transform.rotation);
   	  newPlayer.transform.parent = playerMain.transform;
   	  var mainCamera = gameObject.FindWithTag("MainCamera");
   	  mainCamera.GetComponent(camera_follow).target = newPlayer.transform;
  	  Destroy(player);
  	  playerMain.transform.position = new Vector3(-20.7, 2.177914, -2.2);
  	  if (deathAudio) {
  	  	AudioSource.PlayClipAtPoint(deathAudio, transform.position);
  	  	}
  	  PlayerCount.playerNumber -= 1;
  	   
  	}
  	
  	if (treatAudio) {
  		if (hit.gameObject.tag == "Treats") {
  		AudioSource.PlayClipAtPoint(treatAudio, transform.position);
  		audio.volume = 1.0;

  		}
	}
    
}
  