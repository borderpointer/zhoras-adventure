#pragma strict

var x : int = 4;
var y : int = 4;

var currentFrame : float = 0.0;
var currentXY : Vector2;
var frameScale : Vector2;
var frameOffset: Vector2;

var Amp:float = 5.0;   // amp
var f:float = 5.0;    //freq
var offy:float = 0.0; // offt y
var offt:float = 0.0; // offset t


function Start () {

}

function Update () {

	currentXY = Vector2(Mathf.Floor(currentFrame % x), Mathf.Floor(currentFrame % y));
	frameScale = Vector2 (1.0/x, 1.0/y);
	frameOffset = Vector2(currentXY.x/4, 0);
	
	renderer.material.SetTextureScale("_MainTex", frameScale);
	renderer.material.SetTextureOffset("_MainTex", frameOffset);
	
	transform.position.x = Amp*-Mathf.Sin(f* (Time.time + offt)) + offy;
	
	if (transform.position.x == -61.5) {
		Destroy(gameObject.FindWithTag("Squirrel"));
	}
}


function OnCollisionEnter( collision:Collision) {
	Debug.Log("player collided with " + collision.other.name);
	if (collision.other.name == "Player") {
		Destroy(gameObject.FindWithTag("Squirrel"));
	}
	// oscillatory movement (periodic movement)
	// A * sin (f * t + offsett ) + offsety
	// A == amplitude
	// f == frequency
	// t == is something that goes as time goes
	// offsett == offset in the time direction
	// offsety == offset in the y(amplitude) direction
	
	
	//Debug.Log("current time: " + Time.time);
}