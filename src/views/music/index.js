module.exports = {
    template: require('./template.html'),
    data: function () {
        return {songInfo:{}};
    },
    route: {
        canReuse: false,
    },
    computed: {
        musicUrl: function () {
            return 'http://mhp.sturgeon.mopaas.com/resolve/xm.php/?id=' + this.songid;
        }
    },
    methods: {
        'download': function (e) {
            var u = navigator.userAgent;
            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
                window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client');
            } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
                window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client&g_f=995016');
            }
        },
        'playControl': function () {
            var self = this;
            var audio = document.getElementById("audiosrc");
            audio.addEventListener("loadeddata", //歌曲一经完整的加载完毕()
                function () {
                    var allTime = audio.duration;
                    self.timeChange(allTime, "musicTime");
                    th = setInterval(function () {
                        var currentTime = audio.currentTime;
                        self.timeChange(currentTime, "musicPlayTimesC");
                    }, 1000);
                }, false);
            audio.addEventListener("ended", function () {
                isplay = 0;
                $('.musicTop').css('-webkit-animation-play-state', 'paused');
                $('.musicTop').css('animation-play-state', 'paused');
                $('.radioPlay').removeClass('radioPlayF');
                $('.radioPlay').addClass('radioPlayT');
                $('.fiexedPlay').removeClass('fixedPauseIcon');
                $('.fiexedPlay').addClass('fixedPlayIcon');
            }, false)

            $('.radioPlay').click(function () {
                if (isplay == 1) {
                    //停止旋转,停止播放
                    audiosrc.pause();
                    $('.musicTop').css('-webkit-animation-play-state', 'paused');
                    $('.musicTop').css('animation-play-state', 'paused');
                    isplay = 0;
                    $('.radioPlay').removeClass('radioPlayF');
                    $('.radioPlay').addClass('radioPlayT');
                } else {
                    //旋转,播放
                    audiosrc.play();
                    $('.musicTop').css('-webkit-animation-play-state', 'running');
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
        },
        'timeChange': function (time, timePlace) {
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
        },
        'playStatus': function () {
            if (isplay == 1) {
                $('.musicTop').addClass('playAnimation');
                $('.musicTop').css('-webkit-animation-play-state', 'running');
                $('.musicTop').css('animation-play-state', 'running');
                $('.radioPlay').addClass('radioPlayF');
                $('.radioPlay').removeClass('radioPlayT');
                $('.fiexedPlay').addClass('fixedPauseIcon');
                $('.fiexedPlay').removeClass('fixedPlayIcon');
            } else {
                $('.musicTop').css('animation-play-state', 'paused');
                $('.musicTop').css('-webkit-animation-play-state', 'paused');
                $('.radioPlay').removeClass('radioPlayF');
                $('.radioPlay').addClass('radioPlayT');
                $('.fiexedPlay').removeClass('fixedPauseIcon');
                $('.fiexedPlay').addClass('fixedPlayIcon');
            }
        }
    },
    watch: {
        "text": function (val) {
            contentCols($('.musicContent'), 7.5);
        }
    },
    ready: function () {
        window.scrollTo(0, -100);
        var self = this;
        isplay = 0;
        if (th) {
            clearInterval(th);
        }
        $(window).scroll(function () {
            var a = document.body.scrollTop;
            if (a > 300) {
                $('.fixedPlay').removeClass('uhide');
                self.$options.methods.playStatus();
            } else {
                $('.fixedPlay').addClass('uhide');
                self.$options.methods.playStatus();
            }
        });
        var id = self.$route.params.id;
        var u = navigator.userAgent;
        if (u.match(/Android/i) || (u.indexOf('iPhone') != -1) || (u.indexOf('iPod') != -1) || (u.indexOf('iPad') != -1)) {
            R.ajax({
                url: 'music/info.php',
                data: {
                    contentid: id
                },
                success: function (data) {
                    self.songInfo = data.songInfo;

                    document.title = data.shareInfo.title;
                    text = data.text.replace(/\n/g, "<br/>");
                    $('.musicContent').html(text)
                    self.$data = data;
                    self.$options.methods.playControl();  //歌曲播放控制
                }
            });
        } else {
            window.location.href = 'http://pianke.me/posts/' + id
        }
    }
}
