module.exports = {
    template: require('./template.html'),
    data: function () {
        //timelineData = {}
        return timelineData;
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
        var id = '574d0add01334daf3828419c'
        /*R.ajax({
            url: 'timeline/info.php',
            data: {
                contentid: id
            },
            success: function (data) {
                this.$data.timelineData = data
            }
        });*/
    }
}