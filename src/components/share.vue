<template>
<div class="commonSpace ub">
</div>

<!--hot-share start-->
<div class="hot">
    <div class="ub ub-ver hotTitle ub-ac titleB">
        热门文章
        <div class="titleS">HOT ARTICLES</div>
        <div class="hotLine"></div>
    </div>
    <div class="ub ub-ver articleList">
    </div>
</div>
<div class="commonSpace ub">
</div>
<div class="hotTimgB">
    <div class="ub ub-ver hotTitle ub-ac titleB">
        热门TING
        <div class="titleS">HOT TING</div>
        <div class="hotLine"></div>
    </div>
    <div class="ub tingList">
    </div>
</div>
<div class="commonSpace ub">
</div>
<div class="hot">
    <div class="ub ub-ver hotTitle ub-ac titleB">
        热门话题
        <div class="titleS">HOT TOPICS</div>
        <div class="hotLine"></div>
    </div>
    <div class="topicList"></div>
</div>
<div class="commonSpace ub">
</div>
<div class="hot hotBottom">
    <div class="ub ub-ver hotTitle ub-ac titleB">
        热门音乐
        <div class="titleS">HOT MUSIC</div>
        <div class="hotLine"></div>
    </div>
    <div class="musicList"></div>
</div>
<!--hot-share end-->

<!--footer start-->
<div class="footer">
    <div class="ub ub-ac ub-pc">
        <div class="ub ub-img logo"></div>
        <div class="ub-f1 ub ub-ver">
            片刻
            <div class="footerFontS">世界很美,&nbsp;而你正好有空</div>
        </div>
        <div class="ub footerDown">下载&nbsp;APP</div>
    </div>
</div>
</template>

<script>
    export default {

        name: 'share',

        props: {
            item: Object,
            index: Number
        },

        computed: {
            href () {
                return this.item.url || ('#/item/' + this.item.id)
            },
            showInfo () {
                return this.item.type === 'story' || this.item.type === 'poll'
            },
            showDomain () {
                return this.item.type === 'story'
            }
        }
    }




    //请求接口,获取热门数据
    /*R.ajax({
     url: 'pub/today.php',
     data: {
     pageSize: 30
     },
     success: function (data) {
     showHotTopic(data)
     }
     });*/


    //热门数据分类
    var articleArr = [];
    var tingArr = [];
    var topicArr = [];
    var musicArr = [];
    $.each(hotList, function (idx, item) {
        if (item.content.type == '15') { //article
            var articleItem = {
                'id': item.content.id,
                'title': item.content.title
            }
            articleArr.push(articleItem);

        } else if (item.content.type == '17') { //ting
            var tingItem = {
                'id': item.tingInfo.contentid,
                'title': item.tingInfo.title,
                'coverimg': item.tingInfo.imgUrl
            }
            tingArr.push(tingItem);
        } else if (item.content.type == '24') { //topic
            var topicItem = {
                'id': item.content.id,
                'title': item.content.title,
                'coverimg': item.content.coverimg
            }
            topicArr.push(topicItem);
        } else if (item.content.type == '25') { //music
            var musicItem = {
                'id': item.content.id,
                'title': item.content.title
                //'coverimg': item.content.coverimg
            }
            musicArr.push(musicItem);
        }
    })

    //展示热门文章
    showHotArticle();
    function showHotArticle() {
        var str = '';
        for (var i = 0; i < 3; i++) {
            str += '<div class="ub-f1 hotContent hotArticle" id="'+ articleArr[i].id +'">' + articleArr[i].title + '</div>';
        }
        $('.articleList').html(str);
        $('.hotArticle').click(function(){
            console.log(this.id)
            window.open('/article/'+ this.id);
        })
    }

    //展示热门Ting
    showHotTing();
    function showHotTing() {
        var str = '';
        for (var i = 0; i < 3; i++) {
            var title = tingArr[i].title;
            if (title.length > 6) {
                title = title.substring(0, 6) + '...'
            }
            str += '<div class="ub-f1 ub-ver hotTing hotMarginLR" id="'+ tingArr[i].id +'">' +
                    '<img src="' + tingArr[i].coverimg + '" alt="" width="100%">' +
                    '<div class="hotContentTing">' + title + '</div>' +
                    '</div>';
        }
        $('.tingList').html(str);
        $('.hotTing').click(function(){
            console.log(this.id)
            window.open('/radio/'+ this.id);
        })

    }

    //  展示热门话题
    showHotTopic();
    function showHotTopic() {
        var str = '';
        for (var i = 0; i < 3; i++) {
            str += '<div class="ub ub-ac hotCotentTopic hotMarginTB hotTopicItem" id="'+ topicArr[i].id +'">' +
                    '<div class="ub">' +
                    '<img src="' + topicArr[i].coverimg + '" class="hotTopic" alt="">' +
                    '</div>' +
                    '<div class="hotPaddL ub-f1">' + topicArr[i].title + '</div>' +
                    '</div>';
        }
        $('.topicList').html(str);
        $('.hotTopicItem').click(function(){
            console.log(this.id)
            window.open('/topic/'+ this.id);
        })
    }

    //展示热门音乐
    showHotMusic();
    function showHotMusic() {
        var str = '';
        for (var i = 0; i < 3; i++) {
            str += '<div class="ub ub-ac hotCotentTopic hotMusicItem hotMarginMusicTB" id="'+ musicArr[i].id +'">' +
                    '<div class="ub">' +
                    '<img src="img/hotMusic.png" class="hotMusic" alt="">' +
                    '</div>' +
                    '<div class="hotPaddL ub-f1">' + musicArr[i].title + '</div>' +
                    '<div class="ub ub-img hotMusicPlay"></div>' +
                    '</div>';
        }
        $('.musicList').html(str);
        $('.hotMusicItem').click(function(){
            console.log(this.id)
            window.open('/music/'+ this.id);
        })
    }
</script>