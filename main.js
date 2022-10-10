function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = create.Canvas(550, 550);
    canvas.position(400, 100);

    posenet = ml5.poseNet(video, ModelLoaded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    background('#add8e6');
}

function ModelLoaded()
{
    console.log("Model is Loaded.");
}

function gotPoses()
{
if(results>0)
{
    console.log(results);
}
}