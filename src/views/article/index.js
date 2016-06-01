module.exports = {
    template: require('./template.html'),
    data: function () {
        return {info: articleData, cnt: articleContentData};
    },
    /*computed: {
        uhide: function () {
            return this.cnt.content.length > 20 ? '' : 'uhide';
        },
        minContent: function () {
            return this.cnt.content.splice(0,this.offset);
        }
    },
    methods: {
        'showAll': function (e) {
            this.offset = this.cnt.content.length;
        }
    },*/
    aync: function(){
        var self = this;
        $.ajax({
            success: function(data){
                self.info = data;
            }
        });
    },
    ready: function(){
        contentCols($('.articleContent'), 20);
    }
}