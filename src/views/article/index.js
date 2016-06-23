module.exports = {
    template: require('./template.html'),
    data: function () {
        return {info: {}, cnt: {}};
    },
    route: {
        canReuse: false,
    },
    watch: {
        "cnt.content": function () {
            contentCols($('.articleContent'), 20);
        },
        "info.coverimg": function (val) {
            if (val == '') {
                $('.articleImage').addClass('uhide');
            }
        },
        "info.html": function () {
            contentCols($('.articleContent'), 30);
        }
    },
    ready: function () {
        window.scrollTo(0, -100);
        var self = this;
        var id = self.$route.params.id;
        var u = navigator.userAgent;
        if (u.match(/Android/i) || (u.indexOf('iPhone') != -1) || (u.indexOf('iPod') != -1) || (u.indexOf('iPad') != -1)) {
            R.ajax({
                url: 'article/info.php',
                data: {
                    contentid: id,
                    lazy: 1
                },
                success: function (data) {
                    $('.commentsL').html(data.comments);
                    document.title = data.shareInfo.title;
                    self.info = data;
                    var bLazy = new Blazy({});
                }
            });
            R.ajax({
                url: 'article/editableInfo.php',
                data: {
                    id: id
                },
                success: function (data) {
                    self.cnt = data;
                }
            });
        } else {
            window.location.href = 'http://pianke.me/posts/' + id
        }
    }
}
