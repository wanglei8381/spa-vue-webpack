module.exports = {
    template: require('./template.html'),
    data: function () {
        return {};
    },
    route: {
        canReuse: false,
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
        window.scrollTo(0, -100);
        var self = this;
        var id = self.$route.params.id;

        var u = navigator.userAgent;
        if (u.match(/Android/i) || (u.indexOf('iPhone') != -1) || (u.indexOf('iPod') != -1) || (u.indexOf('iPad') != -1)) {
            R.ajax({
                url: 'timeline/info.php',
                data: {
                    contentid: id
                },
                success: function (data) {
                    document.title = data.shareInfo.title;
                    self.$data = data;
                }
            });
        } else {
            window.location.href = 'http://pianke.me/posts/' + id
        }
    }
}
