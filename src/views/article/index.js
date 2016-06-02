module.exports = {
    template: require('./template.html'),
    data: function () {
        return {info: {}, cnt: {}};
    },
    route: {
        canReuse:false,
    },
    watch: {
        "cnt.content": function () {
            contentCols($('.articleContent'), 20);
        },
        "info.coverimg": function (val) {
            if (val == '') {
                $('.articleImage').addClass('uhide');
            }
        }
    },
    ready: function () {
        window.scrollTo(0, -100);
        var self = this;
        var id = self.$route.params.id;
        R.ajax({
            url: 'article/info.php',
            data: {
                contentid: id
            },
            success: function (data) {
                self.info = data;
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
    }
}
