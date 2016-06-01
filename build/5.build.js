webpackJsonp([5,6],{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	
	
	var Vue = __webpack_require__(1);
	var VueRouter = __webpack_require__(3);
	var my = Vue.extend({
	    template: '<h1>Hello {{msg}}</h1>',
	    data: function () {
	        return {
	            msg: 'LSII'
	        };
	    }
	});
	Vue.component('my', my);
	new Vue({
	    el: 'html',
	    data: {
	        msg: 'world'
	    }
	});
	
	module.exports = {
	    template: __webpack_require__(13),
	    data: function () {
	        //timelineData = {}
	        return timelineData;
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
	        console.log("xxxxxxxxxxxxxxx");
	        /*var self = this;
	         var id = self.$route.params.id;
	         R.ajax({
	         url: 'timeline/info.php',
	         data: {
	         contentid: id
	         },
	         success: function (data) {
	         self.timelineData = data;
	         }
	         });*/
	    }
	};

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = "<!--timeline start-->\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub-f1 articleTop articleImage\">\r\n        <img v-bind:src=\"coverimg\" width=\"100%\" alt=\"\">\r\n    </div>\r\n</div>\r\n<div class=\"timeline\">\r\n    <div class=\"articleContent\">\r\n        {{text}}\r\n    </div>\r\n    <div class=\"playTime\">by:&nbsp; <span>{{userinfo.uname}}</span></div>\r\n</div>\r\n<!--timeline end-->\r\n<div class=\"commonSpace\"></div>\r\n\r\n<div class=\"appDown ub ub-ver ub-ac\" v-on:click=\"download\">\r\n    <div class=\"ub-img appImage\"></div>\r\n    <div class=\"ub appText\">\r\n        <div>打开片刻APP</div>\r\n        <div class=\"appComma\">,</div>\r\n        <div>查看更多碎片</div>\r\n    </div>\r\n</div>\r\n\r\n<my></my>";

/***/ }

});
//# sourceMappingURL=5.build.js.map