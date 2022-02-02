nose_x= 0;
nose_y= 0;
function preload(){  
    clown_nose= loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');  
}
function setup(){
   canvas= createCanvas(350, 300);
   canvas.center();
   video= createCapture(VIDEO);
   video.size(350, 300);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotposes);
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        nose_x= results[0].pose.nose.x-15;
        nose_y= results[0].pose.nose.y-15;
        console.log("nose x="+nose_x);
        console.log("nose y="+nose_y);
    }
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw(){
   image(video, 0, 0, 350, 300);
   fill(255, 0, 0);
   stroke(255, 200, 0);
   circle(nose_x+15, nose_y+15, 10);
   image(clown_nose, nose_x, nose_y, 30, 30);
}
function take_snapshot(){
    save('my_filter_image.png');
}
