#pragma strict
 
var myCamera : Transform;
var target : Transform;
 
function Update () 
{
	if (target != null) {
  	  myCamera.position = target.position + Vector3(12, 4, -25);
    }
}