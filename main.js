noseX=0;
noseY=0;
function preload(){
    clowNose=loadImage('https://i.postimg.cc/N0nSpcL3/Nose.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results){
 if(results.length > 0)
 {
     console.log(results);
     noseX=results[0].pose.nose.x-12;
     noseY=results[0].pose.nose.y-12;
     console.log("nose x = "+ noseX);
     console.log("nose y = "+ noseY);
 }
}

function modelLoaded(){
console.log('poseNet is initialized');
}

function draw(){
    image(video , 0,0,300,300);             
    image(clowNose,noseX,noseY,25,25);
}
function take_snapshot(){ 
    save('MyImage.jpg');
}