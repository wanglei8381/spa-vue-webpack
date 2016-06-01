webpackJsonp([5,6],{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = {
	    template: __webpack_require__(13),
	    data: function () {
	        return {
	            msg: 'This is page Note.'
	        };
	    }
	};
	
	/*//请求接口,获取碎片详情信息
	 var id = '574d0add01334daf3828419c';
	 R.ajax({
	 url: 'timeline/info.php',
	 data: {
	 contentid: id
	 },
	 success: function (data) {
	 //showTimelineInfo(data)
	 }
	 });*/
	showTimelineInfo();
	function showTimelineInfo() {
	    $('.articleImage img').attr('src', timelineData.coverimg);
	}

/***/ },

/***/ 13:
/***/ function(module, exports) {

	module.exports = "<!--timeline start-->\r\n<div class=\"ub ub-ver ub-ac ub-pc\">\r\n    <div class=\"ub-f1 articleTop articleImage\">\r\n        <img src=\"xxxHTMLLINKxxx0.62581505968052340.7018304964145692xxx\" width=\"100%\" alt=\"\">\r\n    </div>\r\n</div>\r\n<!--timeline end-->\r\n<div class=\"commonSpace\"></div>\r\n\r\n<div class=\"appDown ub ub-ver ub-ac\">\r\n    <div class=\"ub-img appImage\"></div>\r\n    <div class=\"ub appText\">\r\n        <div>打开片刻APP</div>\r\n        <div class=\"appComma\">,</div>\r\n        <div>收听更多高质音乐</div>\r\n    </div>\r\n</div>";

/***/ }

});
//# sourceMappingURL=5.build.js.map