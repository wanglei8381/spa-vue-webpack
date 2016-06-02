module.exports = {
    template: require('./template.html'),
    data: function () {
        return {};
    },
    route: {
        canReuse: false,
    },
    watch: {
        "html": function () {
            var topicContent = $('.topicContent').html();
            $('.topicContent').html(topicCols(topicContent).shortHtml);//话题内容
            if (topicCols(topicContent).dataLenght > 5) {
                $('.more').removeClass('uhide');
            }
            $('.more').click(function () {
                $('.topicContent').html(topicContent);//话题内容
                $('.more').addClass('uhide');
            })
        }
    },
    ready: function () {
        window.scrollTo(0, -100);
        var self = this;
        var id = self.$route.params.id;
        R.ajax({
            url: 'topic/info.php',
            data: {
                contentid: id
            },
            success: function (data) {
                self.$data = data;
            }
        });
    }
}