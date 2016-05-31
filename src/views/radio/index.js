
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            msg: 'This is page Note.'
        }
    }
}

var isplay = 0;
$(function () {
    $(window).scroll(function () {
        var a = document.body.scrollTop;
        if (a > 300) {
            $('.fixedPlay').removeClass('uhide');
            playStatus();
        } else {
            $('.fixedPlay').addClass('uhide');
            playStatus();
        }
    })
})

function playStatus() {
    if (isplay == 1) {
        $('.radioTop').addClass('playAnimation');
        $('.radioTop').css('animation-play-state', 'running');
        $('.radioPlay2').addClass('radioPlayF');
        $('.radioPlay2').removeClass('radioPlayT');
        $('.fiexedPlay').addClass('fixedPauseIcon');
        $('.fiexedPlay').removeClass('fixedPlayIcon');
    } else {
        $('.radioTop').css('animation-play-state', 'paused');
        $('.radioPlay2').removeClass('radioPlayF');
        $('.radioPlay2').addClass('radioPlayT');
        $('.fiexedPlay').removeClass('fixedPauseIcon');
        $('.fiexedPlay').addClass('fixedPlayIcon');
    }
}


//请求接口,获取电台详情信息
/*var id = '5734954b723125fa558b4603';
 R.ajax({
 url: 'ting/info.php',
 data: {
 tingid: id
 },
 success: function (data) {
 showTingInfo(data)
 }
 });*/
showTingInfo();
function showTingInfo() {
    $('.radioTop img').attr('src', tingData.imgUrl)
    $('.titleR').html(tingData.title);
    $('.Anchor').html(tingData.userinfo.uname);
    $('.plays').html(tingData.plays);
    $('.spaceName').html(tingData.collInfo.spaceName);


    var idIndex = tingData.webview_url.lastIndexOf('/');
    var tingAriticleId = tingData.webview_url.substring(idIndex + 1);
    showTingArticleInfo(tingAriticleId);

    $('#audiosrc').attr('src', tingData.musicUrl);
    playCotrol(); //播放控制函数
}

function playCotrol() {
    var audio = document.getElementById("audiosrc");
    audio.addEventListener("loadeddata", //歌曲一经完整的加载完毕()
        function () {
            var allTime = audio.duration;
            timeChange(allTime, "musicTime");
            setInterval(function () {
                var currentTime = audio.currentTime;
                timeChange(currentTime, "musicPlayTimesC");
            }, 1000);
        }, false);
    audio.addEventListener("ended", function () {
        $('.radioPlay2').removeClass('radioPlayF');
        $('.radioPlay2').addClass('radioPlayT');
    }, false)

    $('.radioPlay2').click(function () {
        if (isplay == 1) {
            //停止旋转,停止播放
            audiosrc.pause();
            $('.radioTop').css('animation-play-state', 'paused');
            isplay = 0;
            $('.radioPlay2').removeClass('radioPlayF');
            $('.radioPlay2').addClass('radioPlayT');
        } else {
            //旋转,播放
            audiosrc.play();
            $('.radioTop').css('animation-play-state', 'running');
            $('.radioTop').addClass('playAnimation');
            isplay = 1;
            $('.radioPlay2').addClass('radioPlayF');
            $('.radioPlay2').removeClass('radioPlayT');
        }

    })
    $('.fiexedPlay').click(function () {
        if (isplay == 1) {
            //停止旋转,停止播放
            audiosrc.pause();
            isplay = 0;
            $('.fiexedPlay').removeClass('fixedPauseIcon');
            $('.fiexedPlay').addClass('fixedPlayIcon');
        } else {
            //旋转,播放
            audiosrc.play();
            isplay = 1;
            $('.fiexedPlay').addClass('fixedPauseIcon');
            $('.fiexedPlay').removeClass('fixedPlayIcon');
        }
    })

}

//播放时间
function timeChange(time, timePlace) {
    //分钟
    var minute = time / 60;
    var minutes = parseInt(minute);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //秒
    var second = time % 60;
    seconds = parseInt(second);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var allTime = "" + minutes + "" + " : " + "" + seconds + ""
    $('.' + timePlace).html(allTime);
}


function showTingArticleInfo(){
    //请求接口,获取电台原文
    /*R.ajax({
     url: 'article/editableInfo.php',
     data: {
     id: tingAriticleId
     },
     success: function (data) {
     showTingArticleInfo(data)
     }
     });*/


    var tingContent = '';
    $.each(tingArticleData.content,function(idx,item){
        tingContent += '<p>'+ item.content +'</p>';
    })
    $('.radioContent').html(tingContent);
    contentCols($('.radioContent'),20);
}
