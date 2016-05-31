webpackJsonp([4,6],{

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {
	    template: __webpack_require__(11),
	    data: function () {
	        return {
	            msg: 'This is page Note.'
	        };
	    }
	};
	
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
	    });
	});
	
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
	    $('.radioTop img').attr('src', tingData.imgUrl);
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
	    }, false);
	
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
	    });
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
	    });
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
	    var allTime = "" + minutes + "" + " : " + "" + seconds + "";
	    $('.' + timePlace).html(allTime);
	}
	
	function showTingArticleInfo() {
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
	    $.each(tingArticleData.content, function (idx, item) {
	        tingContent += '<p>' + item.content + '</p>';
	    });
	    $('.radioContent').html(tingContent);
	    contentCols($('.radioContent'), 20);
	}

/***/ },

/***/ 11:
/***/ function(module, exports) {

	module.exports = "\r\n<!--radio start-->\r\n<audio id=\"audiosrc\" class=\"uhide\" src=\"\" controls=\"controls\">\r\n    Your browser does not support the audio element.\r\n</audio>\r\n\r\n<!--页面上滑到一定高度后显示播放效果-->\r\n<div class=\"fixedPlay ub ub-ac ub-pc uhide\">\r\n    <div class=\"ub-f1 ub-ver fixedTitle\">\r\n        <div class=\"ub-f1 titleR\"></div>\r\n        <div class=\"ub-f1 fixedPlayTime\"><span class=\"musicPlayTimesC\">00 : 00</span> / <span\r\n                class=\"musicTime\">00 : 00</span></div>\r\n    </div>\r\n    <div class=\"ub-img fixedPlayIcon fiexedPlay\"></div>\r\n</div>\r\n\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub radioTop ub-img ub-ac ub-pc\">\r\n        <img src=\"xxxHTMLLINKxxx0.0069494161292948940.5480074603544309xxx\" class=\"musicImgWH\" alt=\"\">\r\n    </div>\r\n    <div class=\"ub-img radioPlay2 radioPlayT\"></div>\r\n    <div class=\"playTime\"><span class=\"musicPlayTimesC\">00 : 00</span> / <span class=\"musicTime\">00 : 00</span></div>\r\n    <div class=\"radioTitle titleR\"></div>\r\n    <div class=\"radioAnchor\">主播: <span class=\"Anchor\"></span></div>\r\n</div>\r\n<div class=\"playNumbers\">播放: <span class=\"plays\"></span></div>\r\n\r\n<div class=\"commonSpace\"></div>\r\n\r\n<div class=\"radio\">\r\n    <div class=\"radioContentAuthor\">文:&nbsp;by&nbsp; <span class=\"spaceName\"></span></div>\r\n    <hr class=\"radioHr\">\r\n    <div class=\"radioContent\">\r\n    </div>\r\n    <div class=\"more ub ub-ver ub-ac uhide\">\r\n        <div>查看全部</div>\r\n        <div class=\"ub-img moredown\"></div>\r\n    </div>\r\n</div>\r\n<!--radio end-->\r\n\r\n<div class=\"commonSpace\"></div>\r\n\r\n<div class=\"appDown ub ub-ver ub-ac\">\r\n    <div class=\"ub-img appImage\"></div>\r\n    <div class=\"ub appText\">\r\n        <div>打开片刻APP</div>\r\n        <div class=\"appComma\">,</div>\r\n        <div>下载收听该电台</div>\r\n    </div>\r\n</div>";

/***/ }

});
//# sourceMappingURL=4.build.js.map