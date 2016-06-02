webpackJsonp([4,6],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(17),
	    data: function () {
	        return { info: {}, cnt: {} };
	    },
	    computed: {},
	    methods: {
	        'isplay': 0,
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
	                setInterval(function () {
	                    var currentTime = audio.currentTime;
	                    self.timeChange(currentTime, "musicPlayTimesC");
	                }, 1000);
	            }, false);
	            audio.addEventListener("ended", function () {
	                self.isplay = 0;
	                $('.radioTop').css('animation-play-state', 'paused');
	                $('.radioPlay2').removeClass('radioPlayF');
	                $('.radioPlay2').addClass('radioPlayT');
	                $('.fiexedPlay').removeClass('fixedPauseIcon');
	                $('.fiexedPlay').addClass('fixedPlayIcon');
	            }, false);
	
	            $('.radioPlay2').click(function () {
	                if (self.isplay == 1) {
	                    //停止旋转,停止播放
	                    audiosrc.pause();
	                    $('.radioTop').css('animation-play-state', 'paused');
	                    self.isplay = 0;
	                    $('.radioPlay2').removeClass('radioPlayF');
	                    $('.radioPlay2').addClass('radioPlayT');
	                } else {
	                    //旋转,播放
	                    audiosrc.play();
	                    $('.radioTop').css('animation-play-state', 'running');
	                    $('.radioTop').addClass('playAnimation');
	                    self.isplay = 1;
	                    $('.radioPlay2').addClass('radioPlayF');
	                    $('.radioPlay2').removeClass('radioPlayT');
	                }
	            });
	            $('.fiexedPlay').click(function () {
	                if (self.isplay == 1) {
	                    //停止旋转,停止播放
	                    audiosrc.pause();
	                    self.isplay = 0;
	                    $('.fiexedPlay').removeClass('fixedPauseIcon');
	                    $('.fiexedPlay').addClass('fixedPlayIcon');
	                } else {
	                    //旋转,播放
	                    audiosrc.play();
	                    self.isplay = 1;
	                    $('.fiexedPlay').addClass('fixedPauseIcon');
	                    $('.fiexedPlay').removeClass('fixedPlayIcon');
	                }
	            });
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
	            var allTime = "" + minutes + "" + " : " + "" + seconds + "";
	            $('.' + timePlace).html(allTime);
	        },
	        'playStatus': function () {
	            var self = this;
	            if (self.isplay == 1) {
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
	    },
	    watch: {
	        "cnt.content": function () {
	            contentCols($('.radioContent'), 20);
	        }
	    },
	    ready: function () {
	        var self = this;
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
	        R.ajax({
	            url: 'ting/info.php',
	            data: {
	                tingid: id
	            },
	            success: function (data) {
	                self.info = data;
	                var idIndex = data.webview_url.lastIndexOf('/');
	                var tingAriticleId = data.webview_url.substring(idIndex + 1);
	                self.$options.methods.playControl(); //歌曲播放控制
	                R.ajax({
	                    url: 'article/editableInfo.php',
	                    data: {
	                        id: tingAriticleId
	                    },
	                    success: function (data) {
	                        self.cnt = data;
	                    }
	                });
	            }
	        });
	    }
	};

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = "\r\n<!--radio start-->\r\n<audio id=\"audiosrc\" class=\"uhide\" controls=\"controls\" v-bind:src=\"info.musicUrl\">\r\n    Your browser does not support the audio element.\r\n</audio>\r\n\r\n<!--页面上滑到一定高度后显示播放效果-->\r\n<div class=\"fixedPlay ub ub-ac ub-pc uhide\">\r\n    <div class=\"ub-f1 ub-ver fixedTitle\">\r\n        <div class=\"ub-f1 titleR\"></div>\r\n        <div class=\"ub-f1 fixedPlayTime\"><span class=\"musicPlayTimesC\">00 : 00</span> / <span\r\n                class=\"musicTime\">00 : 00</span></div>\r\n    </div>\r\n    <div class=\"ub-img fixedPlayIcon fiexedPlay\"></div>\r\n</div>\r\n\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub radioTop ub-img ub-ac ub-pc\">\r\n        <img v-bind:src=\"info.imgUrl\" class=\"musicImgWH\" alt=\"\">\r\n    </div>\r\n    <div class=\"ub-img radioPlay2 radioPlayT\"></div>\r\n    <div class=\"playTime\"><span class=\"musicPlayTimesC\">00 : 00</span> / <span class=\"musicTime\">00 : 00</span></div>\r\n    <div class=\"radioTitle\">{{info.title}}</div>\r\n    <div class=\"radioAnchor\">主播: <span>{{info.userinfo.uname}}</span></div>\r\n</div>\r\n<div class=\"playNumbers\">播放: <span>{{info.plays}}</span></div>\r\n\r\n<div class=\"commonSpace\"></div>\r\n\r\n<div class=\"radio\">\r\n    <div class=\"radioContentAuthor\">文:&nbsp;by&nbsp; <span>{{info.collInfo.spaceName}}</span></div>\r\n    <hr class=\"radioHr\">\r\n    <div class=\"radioContent\">\r\n        <p v-for=\"item in cnt.content\">\r\n          {{item.content}}\r\n        </p>\r\n    </div>\r\n    <div class=\"more ub ub-ver ub-ac uhide\">\r\n        <div>查看全部</div>\r\n        <div class=\"ub-img moredown\"></div>\r\n    </div>\r\n</div>\r\n<!--radio end-->\r\n\r\n<div class=\"commonSpace\"></div>\r\n\r\n<div class=\"appDown ub ub-ver ub-ac\" v-on:click=\"download\">\r\n    <div class=\"ub-img appImage\"></div>\r\n    <div class=\"ub appText\">\r\n        <div>打开片刻APP</div>\r\n        <div class=\"appComma\">,</div>\r\n        <div>下载收听该电台</div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 分享组件 -->\r\n<share-cpt></share-cpt>";

/***/ }

});
//# sourceMappingURL=4.build.js.map