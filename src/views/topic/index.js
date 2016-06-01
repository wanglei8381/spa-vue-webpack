module.exports = {
    template: require('./template.html'),
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
                $('.topicContent').html(topicCols(topicContent).shortHtml);//话题内容
                if (topicCols(topicContent).dataLenght > 5) {
                    $('.more').removeClass('uhide');
                }
                $('.more').click(function () {
                    $('.topicContent').html(topicData.html);//话题内容
                    $('.more').addClass('uhide');
                })
            }
        });
    }
}