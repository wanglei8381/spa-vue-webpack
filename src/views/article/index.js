module.exports = {
    activate: function (done) {
        console.log('在router下activate不执行气人');
    },
    template: require('./template.html'),
    data: function () {
        return {info:{},cnt:{}};
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
    ready: function(){
        var self = this;
        fetch(function(info,cnt){
            self.$data.info = info;
            self.$data.cnt = cnt;
        });
        //contentCols($('.articleContent'), 20);
    }
}

//获取数据
function fetch(cb){
    var info,cnt;
    var count = 0;
    var done = function(err){
        count++;
        if(count === 2) {
            cb(info,cnt);
        }
    };

    $.ajax({
        url: 'src/views/article/data.json',
        dataType: 'json',
        success: function(data){
            info = data;
            done();
        },
        error: function(){
            done();
        }
    });

    $.ajax({
        url: 'src/views/article/data2.json',
        dataType: 'json',
        success: function(data){
            cnt = data;
            done();
        },
        error: function(){
            done();
        }
    });
}