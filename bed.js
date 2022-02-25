status="";

function preload()
{
    img=loadImage('bed.jpg');
}

function setup()
{
    canvas= createCanvas(380, 380);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded());
    document.getElementById("status").innerHTML = "Detecting Objects"; 

}

function modelLoaded()
{
   console.log("Model Loaded");
    status= true;
    objectDetector.detect(img, gotResult);

}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}


