#pragma strict

var x : int = 4;
var y : int = 4;

var currentFrame : float = 0.0;
var currentXY : Vector2;
var frameScale : Vector2;
var frameOffset: Vector2;

var Amp:float = 1.0;   // amp
var f:float = 0.1;    //freq
var offx: float = 0.0;
var offy:float = 0.0; // offt y
var offt:float = 0.0; // offset t

var mx : float;
var my: float;

function Start () {

}

function Update () {

	currentXY = Vector2(Mathf.Floor(currentFrame % x), Mathf.Floor(currentFrame % y));
	frameScale = Vector2 (1.0/x, 1.0/y);
	frameOffset = Vector2(currentXY.x/x, 0);
	
	renderer.material.SetTextureScale("_MainTex", frameScale);
	renderer.material.SetTextureOffset("_MainTex", frameOffset);
	
	mx = Amp*Mathf.Sin(f* (Time.time + offt)) + offx;
	my = Amp*-Mathf.Sin(f* (Time.time + offt)) + offy;
	transform.Translate(Vector2(mx, my));
}