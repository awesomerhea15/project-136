Status = "";
input_text = "";


function preload(){

}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 0, 0, 500, 500)

}

function start(){
    objectDetection = ml5.objectDetection('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_text = document.getElementById("input_id").value;
}
function modelLoaded(){
    console.log("Model_Loaded");
    Status = true;
}



function modelLoaded(){

}