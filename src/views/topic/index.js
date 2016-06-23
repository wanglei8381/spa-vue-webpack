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

        var u = navigator.userAgent;
        if (u.match(/Android/i) || (u.indexOf('iPhone') != -1) || (u.indexOf('iPod') != -1) || (u.indexOf('iPad') != -1)) {
            R.ajax({
                url: 'topic/info.php',
                data: {
                    contentid: id,
                    lazy: 1
                },
                success: function (data) {
                    $('.commentsL').html(data.comments);
                    document.title = data.shareInfo.title;
                    self.$data = data;
                    var bLazy = new Blazy({});
                }
            });
        } else {
            window.location.href = 'http://pianke.me/posts/' + id
        }
    }
}