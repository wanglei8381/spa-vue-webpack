webpackJsonp([3,6],{

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(15),
	    data: function () {
	        return { info: {}, cnt: {} };
	    },
	    route: {
	        canReuse: false
	    },
	    watch: {
	        "cnt.content": function () {
	            contentCols($('.articleContent'), 20);
	        },
	        "info.coverimg": function (val) {
	            if (val == '') {
	                $('.articleImage').addClass('uhide');
	            }
	        }
	    },
	    ready: function () {
	        window.scrollTo(0, -100);
	        var self = this;
	        var id = self.$route.params.id;
	        R.ajax({
	            url: 'article/info.php',
	            data: {
	                contentid: id
	            },
	            success: function (data) {
	                self.info = data;
	            }
	        });
	        R.ajax({
	            url: 'article/editableInfo.php',
	            data: {
	                id: id
	            },
	            success: function (data) {
	                self.cnt = data;
	            }
	        });
	    }
	};

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = "<!--article start-->\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub-f1 articleTop articleImage\">\r\n        <img v-bind:src=\"info.coverimg\" width=\"100%\" alt=\"\">\r\n    </div>\r\n    <!--<div class=\"ub-img articlePlay\"></div>-->\r\n</div>\r\n\r\n<div class=\"article\">\r\n    <div class=\"ub ub-ac ub-pc\">\r\n        <div class=\"articleTitle\">{{cnt.title}}</div>\r\n    </div>\r\n    <div class=\"ub ub-pc ub-ac articleAuthor\">\r\n        <div class=\"articleAColor\">作者&nbsp;:&nbsp;&nbsp;<span class=\"author\">{{info.userinfo.uname}}</span></div>\r\n        <div class=\"articleMarginLR\">\r\n            <span>{{info.min}} </span> min&nbsp;read\r\n        </div>\r\n        浏览&nbsp;:&nbsp;&nbsp;<span>{{info.views}}</span>\r\n    </div>\r\n    <hr class=\"minHr\">\r\n    <div class=\"articleDes\"></div>\r\n    <div class=\"articleContent\">\r\n        <p v-for=\"item in cnt.content\">\r\n            {{{ item.content }}}\r\n        </p>\r\n    </div>\r\n    <div class=\"more ub ub-ver ub-ac uhide\">\r\n        <div>查看全部</div>\r\n        <div class=\"ub-img moredown\"></div>\r\n    </div>\r\n</div>\r\n<!--article end-->\r\n\r\n<!-- 评论组件 -->\r\n<comment-cpt></comment-cpt>\r\n<!-- 分享组件 -->\r\n<share-cpt></share-cpt>";

/***/ }

});
//# sourceMappingURL=3.build.js.map