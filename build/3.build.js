webpackJsonp([3,6],{

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(9),
	    data: function () {
	        return { info: articleData, cnt: articleContentData, offset: 20 };
	    },
	    computed: {
	        uhide: function () {
	            return this.cnt.content.length > 20 ? '' : 'uhide';
	        },
	        minContent: function () {
	            return this.cnt.content.splice(0, this.offset);
	        }
	    },
	    methods: {
	        'showAll': function (e) {
	            this.offset = this.cnt.content.length;
	        }
	    },
	    ready: function () {
	        console.log('ready');
	        $('.articleContent').click(function () {
	            alert(1);
	        });
	    },
	    aync: function () {
	        var self = this;
	        $.ajax({
	            success: function (data) {
	                self.info = data;
	            }
	        });
	    }
	};

/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = "<!--article start-->\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub-f1 articleTop articleImage\">\r\n        <img v-bind:src=\"info.coverimg\" width=\"100%\" alt=\"\">\r\n    </div>\r\n    <!--<div class=\"ub-img articlePlay\"></div>-->\r\n</div>\r\n\r\n<div class=\"article\">\r\n    <div class=\"ub ub-ac ub-pc\">\r\n        <div class=\"articleTitle\">{{cnt.title}}</div>\r\n    </div>\r\n    <div class=\"ub ub-pc ub-ac articleAuthor\">\r\n        <div class=\"articleAColor\">作者&nbsp;:&nbsp;&nbsp;<span class=\"author\">{{info.userinfo.uname}}</span></div>\r\n        <div class=\"articleMarginLR\">\r\n            <span>{{info.min}} </span> min&nbsp;read\r\n        </div>\r\n        浏览&nbsp;:&nbsp;&nbsp;<span>{{info.views}}</span>\r\n    </div>\r\n    <hr class=\"minHr\">\r\n    <div class=\"articleDes\"></div>\r\n    <div class=\"articleContent\">\r\n        <p v-for=\"item in minContent\">\r\n            {{ item.content }}\r\n        </p>\r\n    </div>\r\n    <div v-on:click=\"showAll\" class=\"more ub ub-ver ub-ac {{uhide}}\">\r\n        <div>查看全部</div>\r\n        <div class=\"ub-img moredown\"></div>\r\n    </div>\r\n</div>\r\n<!--article end-->";

/***/ }

});
//# sourceMappingURL=3.build.js.map