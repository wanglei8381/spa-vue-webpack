webpackJsonp([3,6],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    activate: function (done) {
	        console.log('在router下activate不执行气人');
	    },
	    template: __webpack_require__(12),
	    data: function () {
	        return { info: {}, cnt: {} };
	    },
	    ready: function () {
	        var self = this;
	        var id = self.$route.params.id;
	        var self = this;
	        fetch(function (info, cnt) {
	            self.$data.info = info;
	            self.$data.cnt = cnt;
	        });
	        //contentCols($('.articleContent'), 20);
	    }
	};
	
	//获取数据
	function fetch(cb) {
	    var info, cnt;
	    var count = 0;
	    var done = function (err) {
	        count++;
	        if (count === 2) {
	            cb(info, cnt);
	        }
	    };
	
	    $.ajax({
	        url: 'src/views/article/data.json',
	        dataType: 'json',
	        success: function (data) {
	            info = data;
	            done();
	        },
	        error: function () {
	            done();
	        }
	    });
	
	    $.ajax({
	        url: 'src/views/article/data2.json',
	        dataType: 'json',
	        success: function (data) {
	            cnt = data;
	            done();
	        },
	        error: function () {
	            done();
	        }
	    });
	}

/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = "<!--article start-->\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub-f1 articleTop articleImage\">\r\n        <img v-bind:src=\"info.coverimg\" width=\"100%\" alt=\"\">\r\n    </div>\r\n    <!--<div class=\"ub-img articlePlay\"></div>-->\r\n</div>\r\n\r\n<div class=\"article\">\r\n    <div class=\"ub ub-ac ub-pc\">\r\n        <div class=\"articleTitle\">{{cnt.title}}</div>\r\n    </div>\r\n    <div class=\"ub ub-pc ub-ac articleAuthor\">\r\n        <div class=\"articleAColor\">作者&nbsp;:&nbsp;&nbsp;<span class=\"author\">{{info.userinfo.uname}}</span></div>\r\n        <div class=\"articleMarginLR\">\r\n            <span>{{info.min}} </span> min&nbsp;read\r\n        </div>\r\n        浏览&nbsp;:&nbsp;&nbsp;<span>{{info.views}}</span>\r\n    </div>\r\n    <hr class=\"minHr\">\r\n    <div class=\"articleDes\"></div>\r\n    <div class=\"articleContent\">\r\n        <p v-for=\"item in cnt.content\">\r\n            {{{ item.content }}}\r\n        </p>\r\n    </div>\r\n    <div class=\"more ub ub-ver ub-ac uhide\">\r\n        <div>查看全部</div>\r\n        <div class=\"ub-img moredown\"></div>\r\n    </div>\r\n</div>\r\n<!--article end-->";

/***/ }

});
//# sourceMappingURL=3.build.js.map