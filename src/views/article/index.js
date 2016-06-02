module.exports = {
    template: require('./template.html'),
    data: function () {
        return {info: {}, cnt: {}};
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
