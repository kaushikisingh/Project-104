Webcam.set({
    width:400,
    height:400,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function snap()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    }
    );
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassfier('https://teachablemachine.withgoogle.com/models/9_OFI-U3s/model.json',modelLoaded);
function modelLoaded()
{
    console.log("model loaded");
}