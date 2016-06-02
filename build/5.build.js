webpackJsonp([5,6],{

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    template: __webpack_require__(19),
	    data: function () {
	        return {};
	    },
	    methods: {
	        'download': function (e) {
	            var u = navigator.userAgent;
	            if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
	                window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client');
	            } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
	                window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client&g_f=995016');
	            }
	        }
	    },
	    ready: function () {
	        var self = this;
	        var id = self.$route.params.id;
	        R.ajax({
	            url: 'timeline/info.php',
	            data: {
	                contentid: id
	            },
	            success: function (data) {
	                self.$data = data;
	            }
	        });
	    }
	};

/***/ },

/***/ 19:
/***/ function(module, exports) {

	module.exports = "<!--timeline start-->\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub-f1 articleTop articleImage\">\r\n        <img v-bind:src=\"coverimg\" width=\"100%\" alt=\"\">\r\n    </div>\r\n</div>\r\n<div class=\"timeline\">\r\n    <div class=\"articleContent\">\r\n        {{text}}\r\n    </div>\r\n    <div class=\"playTime\">by:&nbsp; <span>{{userinfo.uname}}</span></div>\r\n</div>\r\n<!--timeline end-->\r\n<div class=\"commonSpace\"></div>\r\n\r\n<div class=\"appDown ub ub-ver ub-ac\" v-on:click=\"download\">\r\n    <div class=\"ub-img appImage\"></div>\r\n    <div class=\"ub appText\">\r\n        <div>打开片刻APP</div>\r\n        <div class=\"appComma\">,</div>\r\n        <div>查看更多碎片</div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 分享组件 -->\r\n<share-cpt></share-cpt>";

/***/ }

});
//# sourceMappingURL=5.build.js.map