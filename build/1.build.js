webpackJsonp([1,6],{

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {
	    template: __webpack_require__(5),
	    data: function () {
	        return {
	            msg: 'This is page Note.'
	        };
	    }
	};
	
	//请求接口,获取话题详情信息
	/*var id = '5740021702334d673ee8e71e';
	 R.ajax({
	 url: 'topic/info.php',
	 data: {
	 contentid: id
	 },
	 success: function (data) {
	 showTopicInfo(data)
	 }
	 });*/
	showTopicInfo();
	function showTopicInfo() {
	    $('.topicUserIcon').attr('src', topicData.userinfo.icon); //楼主头像
	    $('.joinTopicNum').html(topicData.topicUsers); //参与人数
	    $('.topicAdmin').html(topicData.userinfo.uname); //楼主
	    $('.topicTitle').html(topicData.title); //话题标题
	    var topicContent = topicData.html;
	    $('.topicContent').html(topicCols(topicContent).shortHtml); //话题内容
	    if (topicCols(topicContent).dataLenght > 5) {
	        $('.more').removeClass('uhide');
	    }
	    $('.more').click(function () {
	        $('.topicContent').html(topicData.html); //话题内容
	        $('.more').addClass('uhide');
	    });
	}

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = "<!--topic start-->\r\n<div class=\"topic\">\r\n    <div class=\"ub\">\r\n        <div class=\"topicMarks ub-img\"></div>\r\n        <div class=\"joinPerson\"><span class=\"joinTopicNum\"></span>人&nbsp;参与</div>\r\n    </div>\r\n    <div class=\"topicTitle\">写下你最近单曲循环的歌曲+此刻的心情</div>\r\n    <div class=\"ub ub-ac\">\r\n        <div>\r\n            <img src=\"xxxHTMLLINKxxx0.45296653738874150.9848832693948768xxx\" alt=\"\" class=\"commentUserIcon topicUserIcon\">\r\n        </div>\r\n        <div class=\"topicAdmin\"></div>\r\n        <div class=\"ub-f1\"><span class=\"topicType\">楼主</span></div>\r\n    </div>\r\n    <hr class=\"topicHr\">\r\n    <div class=\"topicContent\">\r\n    </div>\r\n    <div class=\"more ub ub-ver ub-ac uhide\">\r\n        <div>查看全部</div>\r\n        <div class=\"ub-img moredown\"></div>\r\n    </div>\r\n</div>\r\n<!--topic end-->\r\n";

/***/ }

});
//# sourceMappingURL=1.build.js.map