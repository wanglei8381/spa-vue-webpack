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
        },
        "info.html": function(val){
            $(val).find('h1').first().css({display:'none'});
            contentCols($('.articleContent'), 30);
        }
    },
    ready: function () {
        window.scrollTo(0, -100);
        var self = this;
        var id = self.$route.params.id;
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
                var bLazy = new Blazy({
                });
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
