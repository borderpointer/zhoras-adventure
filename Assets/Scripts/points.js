#pragma strict

function Start () {

}

function OnTriggerEnter(hit : Collider){

    if(hit.gameObject.tag == "Player"){
    //add a tag to the player called Player, or just
    //replace it with your tag if you already have one
    ScoreSystem.myScore += 1;
    Destroy(gameObject,0.0);
  }
  
}