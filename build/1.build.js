webpackJsonp([1,6],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(8),
	    data: function () {
	        //topicData={}
	        return topicData;
	    },
	    ready: function () {
	        var self = this;
	        var id = self.$route.params.id;
	        R.ajax({
	            url: 'topic/info.php',
	            data: {
	                contentid: id
	            },
	            success: function (data) {
	                self.topicData = data;
	                var topicContent = $('.topicContent').html();
	                $('.topicContent').html(topicCols(topicContent).shortHtml); //话题内容
	                if (topicCols(topicContent).dataLenght > 5) {
	                    $('.more').removeClass('uhide');
	                }
	                $('.more').click(function () {
	                    $('.topicContent').html(topicData.html); //话题内容
	                    $('.more').addClass('uhide');
	                });
	            }
	        });
	    }
	};

/***/ },

/***/ 8:
/***/ function(module, exports) {

	module.exports = "<!--topic start-->\r\n<div class=\"topic\">\r\n    <div class=\"ub\">\r\n        <div class=\"topicMarks ub-img\"></div>\r\n        <div class=\"joinPerson\"><span>{{topicUsers}}</span>人&nbsp;参与</div>\r\n    </div>\r\n    <div class=\"topicTitle\">{{title}}</div>\r\n    <div class=\"ub ub-ac\">\r\n        <div>\r\n            <img v-bind:src=\"userinfo.icon\" alt=\"\" class=\"commentUserIcon\">\r\n        </div>\r\n        <div class=\"topicAdmin\">{{userinfo.uname}}</div>\r\n        <div class=\"ub-f1\"><span class=\"topicType\">楼主</span></div>\r\n    </div>\r\n    <hr class=\"topicHr\">\r\n    <div class=\"topicContent\">\r\n        {{{html}}}\r\n    </div>\r\n    <div class=\"more ub ub-ver ub-ac uhide\">\r\n        <div>查看全部</div>\r\n        <div class=\"ub-img moredown\"></div>\r\n    </div>\r\n\r\n</div>\r\n<!--topic end-->";

/***/ }

});
//# sourceMappingURL=1.build.js.map