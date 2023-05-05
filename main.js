var SpeechRecognition = window.webkitSpeechRecognition;
var content;

var recognition = new SpeechRecognition();


function start()
{

recognition.start();
}


recognition.onresult = function(event) {


console.log(event);


var Content = event.results[0][0].transcript.toLowerCase();
console.log(Content);
if (Content == "selfie")
{
console.log("tirando selfie --- ");
speak();
}



}
function speak(){
var synth = window.speechSynthesis;
Webcam.attach(camera);

speakData = "tirando sua selfie em 5 segundos";


var utterThis = new SpeechSynthesisUtterance(speakData);


synth.speak(utterThis);
setTimeout(function()
{
imgId = "selfie1";
takeSelfie();
speakData = "tirando sua selfie em 10 segundos";


var utterThis = new SpeechSynthesisUtterance(speakData);


synth.speak(utterThis);
},5000);
setTimeout(function()
{
imgId = "selfie2";
takeSelfie();
speakData = "tirando sua selfie em 15 segundos";


var utterThis = new SpeechSynthesisUtterance(speakData);


synth.speak(utterThis);
},10000);
setTimeout(function()
{
imgId = "selfie3";
takeSelfie();

},15000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});


function takeSelfie()
{


Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';

});

}

function save()
{
link = document.getElementById("link");
image = document.getElementById("selfie_image").scr;
link.href = image;
link.click();
}
function takeSelfie()
{
    console.log(imgId);
    
    Webcam.snap(function(data_uri) {
        if(imgId=="selfie1"){
        document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}