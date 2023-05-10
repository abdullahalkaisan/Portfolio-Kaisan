$(document).ready(function () {
    $("#counter-1").countMe(10, 1);
    $("#counter-2").countMe(10, 1);
    $("#counter-3").countMe(10, 1);
})



$(document).ready(function () {
    var obj = document.createElement("audio");
    const dogSoundList = [
        "dog_bark_1.wav",
        "dog_bark_2.wav",
        "dog_bark_3.wav",
    ];


    
    const theRandomNumber = Math.floor(Math.random() * dogSoundList.length);


    obj.src = dogSoundList[theRandomNumber];
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;

    $(".dog1").click(function () {
        obj.play();
        // obj.pause();
    });
});

