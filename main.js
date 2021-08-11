var harryPotter = "";
var peterPan = "";
var LeftWristX = 0;
var LeftWristY = 0;
var RightWristX = 0;
var RightWristY = 0;

function preload(){
    harryPotter = loadSound("music.mp3");
    peterPan = loadSound("music2.mp3");
    console.log("Songs Loaded!");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(475, 275);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PosNet is initialized!");
}

function draw(){
    image(video, 0, 0, 500, 400);
}
function gotPoses(results) {
    if(results > 0){
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        RightWristY = results[0].pose.rightWrist.y;
        console.log(results);
    }
}