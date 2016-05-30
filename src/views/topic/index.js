
module.exports = {
    template: require('./template.html'),
    data: function () {
        return {
            msg: 'This is page Note.'
        }
    }
}

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
    $('.topicUserIcon').attr('src', topicData.userinfo.icon);//楼主头像
    $('.joinTopicNum').html(topicData.topicUsers);//参与人数
    $('.topicAdmin').html(topicData.userinfo.uname);//楼主
    $('.topicTitle').html(topicData.title);//话题标题
    var topicContent = topicData.html;
    $('.topicContent').html(topicCols(topicContent).shortHtml);//话题内容
    if(topicCols(topicContent).dataLenght>5){
        $('.more').removeClass('uhide');
    }
    $('.more').click(function(){
        $('.topicContent').html(topicData.html);//话题内容
        $('.more').addClass('uhide');
    })
}


