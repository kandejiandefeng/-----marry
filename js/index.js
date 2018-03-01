
$(function() {
  
    $('.j-tips').click(function(){
        $('.j-tips').addClass('on').siblings().removeClass('on');
    });

    var myVideo=document.getElementById("video1"); 
        $('.show-per-v').click(function(){
            if (myVideo.paused) 
                  myVideo.play(); 
                else 
                  myVideo.pause(); 
        });
});