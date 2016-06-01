module.exports = {
    template: require('./template.html'),
    data: function () {
        topicData={}
        return topicData;
    },
    computed: {
        minContent: function () {
            return topicCols(this.html).shortHtml
        },
        uhide: function(){
            return
        }
    },
    aync: function () {
        var self = this;
        $.ajax({
            success: function (data) {
                self.info = data;
            }
        });
    },
    ready: function () {
        var id = '574d0add01334daf3828419c'
        /*R.ajax({
         url: 'topic/info.php',
         data: {
         contentid: id
         },
         success: function (data) {
         this.$data.topicData = data
         }
         });*/

        var topicContent = $('.topicContent').html();
        $('.topicContent').html(topicCols(topicContent).shortHtml);//话题内容
        if(topicCols(topicContent).dataLenght>5){
            $('.more').removeClass('uhide');
        }
        $('.more').click(function(){
            $('.topicContent').html(topicData.html);//话题内容
            $('.more').addClass('uhide');
        })
    }
}