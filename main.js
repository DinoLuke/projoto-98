
prediction1 = " ";
prediction2 = " ";

Webcam.set({
Width:350,
height:300,
ImageFormat : 'png',
pngQuality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function takeSnapShot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>";
});
}
console.log("ml5.version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/st6lN2gNq/model.json',modelLoaded);



function modelLoaded() {
console.log("Modelo carregado"); 
}
function speak() {
var synth = window.speechSynthesis;
var utterThis = new SpeechSynthesisUtterance(speakData1);
synth.speak(utterThis);
}

function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}


function gotResult(error, results) {
if (error ) {
console.error(error);
}else{
console.log(results);
document.getElementById("resultEmotionName").innerHTML = results[0].label;
prediction1 = results[0].label;
if(results[0].label == "ok")
{
speakData1 = "A primeira previsão é ok ";
document.getElementById("updateEmoji").innerHTML = "&#128077";
}

if(results[0].label == "mão")
{
    
speakData1 = "A primeira previsão é mão ";
document.getElementById("updateEmoji").innerHTML = "&#9995";
}

if(results[0].label == "paz")
{
speakData1 = "A primeira previsão é paz ";
document.getElementById("updateEmoji").innerHTML = "&#9996";
}
speak();
}
}