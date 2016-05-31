
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
        $('.musicTop').addClass('playAnimation');
        $('.musicTop').css('animation-play-state', 'running');
        $('.radioPlay').addClass('radioPlayF');
        $('.radioPlay').removeClass('radioPlayT');
        $('.fiexedPlay').addClass('fixedPauseIcon');
        $('.fiexedPlay').removeClass('fixedPlayIcon');
    } else {
        $('.musicTop').css('animation-play-state', 'paused');
        $('.radioPlay').removeClass('radioPlayF');
        $('.radioPlay').addClass('radioPlayT');
        $('.fiexedPlay').removeClass('fixedPauseIcon');
        $('.fiexedPlay').addClass('fixedPlayIcon');
    }
}


//请求接口,获取音乐详情信息
/*var id = '5746a27e02334de948e8e74a';
 R.ajax({
 url: 'music/info.php',
 data: {
 contentid: id
 },
 success: function (data) {
 showMusicInfo(data)
 }
 });*/
showMusicInfo();
function showMusicInfo() {
    $('.titleM').html(musicData.title)
    $('.musicTitleText').html(musicData.title);
    $('.musicUser').html(musicData.userinfo.uname)
    $('.musicContent').html(musicData.text);
    contentCols($('.musicContent'), 5);
    var songId = musicData.songid;
    $('#audiosrc').attr('src', 'http://mhp.sturgeon.mopaas.com/resolve/xm.php?id=' + songId);
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
        $('.radioPlay').removeClass('radioPlayF');
        $('.radioPlay').addClass('radioPlayT');
    }, false)

    $('.radioPlay').click(function () {
        if (isplay == 1) {
            //停止旋转,停止播放
            audiosrc.pause();
            $('.musicTop').css('animation-play-state', 'paused');
            isplay = 0;
            $('.radioPlay').removeClass('radioPlayF');
            $('.radioPlay').addClass('radioPlayT');
        } else {
            //旋转,播放
            audiosrc.play();
            $('.musicTop').css('animation-play-state', 'running');
            $('.musicTop').addClass('playAnimation');
            isplay = 1;
            $('.radioPlay').addClass('radioPlayF');
            $('.radioPlay').removeClass('radioPlayT');
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
