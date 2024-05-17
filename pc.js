img = "";
status = "";

function preload()
{
    img = loadImage('pc.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error)
    }
    console.log(results)
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("PC", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 575, 360);
}

function back()
{
    window.location = "index.html";
}