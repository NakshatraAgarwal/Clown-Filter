nose_x = 0;
nose_y = 0;

function preload(){
clown_nose = loadImage('https://i.postimg.cc/j20GbnTP/nose-removebg-preview.png');
}
function draw(){

image(video, 0, 0, 500, 500);
poseNet = ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotposes);
image(clown_nose, nose_x, nose_y, 50, 50);
}

function setup(){

canvas = createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.size(500,500);
video.hide();
}

function save(){
    save('My Filter Image')
}


function modelloaded(){
    console.log("Pose Net Loaded");
}

function gotposes(results){

if(results.length > 0){

console.log(results);
nose_x = results[0].pose.nose.x - 15;
nose_y = results[0].pose.nose.y - 15;
console.log("nose x:" + results[0].pose.nose.x);
console.log("nose y:" + results[0].pose.nose.y);
}

}