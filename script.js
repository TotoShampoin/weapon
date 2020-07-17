$(document).ready(function(){
    var gun = "Desert Eagle";
    var audio = new Audio("weapon/"+gun+"/shoot.wav")
    $(".gun").attr("src","weapon/"+gun+"/image.png");
    $(".gun").on("click",function(){    
        if (audio.paused) {
            audio.play();
        }else{
            audio.currentTime = 0
        }
    });
});