module.exports = {
    template: require('./template.html'),
    data: function () {
        return {};
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
    ready: function(){
        var self = this;
        var id = self.$route.params.id;
        R.ajax({
            url: 'timeline/info.php',
            data: {
                contentid: id
            },
            success: function (data) {
                self.$data = data;
            }
        });
    }
}
