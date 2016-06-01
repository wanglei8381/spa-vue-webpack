module.exports = {
    template: require('./template.html'),
    data: function () {
        return {info: articleData, cnt: articleContentData};
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
                contentCols($('.articleContent'), 20);
            }
        });
    }
}