
$(function() {
  
    $('.j-tips').click(function(){
        console.log(this);
        $(this).addClass('on').siblings().removeClass('on');
    });

    $('.other').mouseenter(function(){
        $(".o-direction").css('background-image','url(img/其他-2.png)')
    });
    $('.other').mouseleave(function(){
        $(".o-direction").css('background-image','url(img/其他-1.png)')
    });

    // var myVideo=document.getElementById("video1"); 
    //     $('.show-per-v').click(function(){
    //         if (myVideo.paused) 
    //               myVideo.play(); 
    //             else 
    //               myVideo.pause(); 
    //     });
});