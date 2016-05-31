
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            msg: 'This is page Note.'
        }
    }
}

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