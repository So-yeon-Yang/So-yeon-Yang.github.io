var audio = document.getElementById("video");

$(function(){
    $('.play').on('click', function(e){
        e = e || window.event;
        var btn = e.target;
        if (!audio.paused) {
            //일시정지
            audio.pause();
            isPlaying = false;
        } else {
            //재생
            audio.play();
            isPlaying = true;
        }
    });
    $('.stop').on('click', function(e){
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    });
});