function main(){
    oscroll();
}
main();
function oscroll(){
    var jj=document.getElementById('subnav');
    window.onscroll=function () {
        // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var subh =window.pageYOffset;
        var hirght=120-subh;
        if(subh>=120){
            jj.style.top=0;
        }else {
            jj.style.top=hirght+'px';
        }
    };
};

// $(document).ready(function(){
//     $('li#other').click(function(){
//         $('div#other_sub').show();
//     });
//     // var oth=document.getElementById('other');
//     // var oth_sub=document.getElementById('other_sub');
//     // oth.click=function(){
//     //     oth_sub.style.display = 'block';
//     // }
// });

var myVideo=document.getElementById("video1"); 

myVideo.onclick=function()
{ 
    if (myVideo.paused) 
      myVideo.play(); 
    else 
      myVideo.pause(); 
} 