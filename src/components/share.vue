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
        <template v-for="item in articleArr">
            <div class="ub ub-ver articleList" v-link="{ name:'article',params: {id:item.id} }">
                <div class="ub-f1 hotContent hotArticle titleWeight ut-s">{{item.title}}</div>
            </div>
        </template>
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
            <template v-for="item in tingArr">
                <div class="ub-f1 ub-ver hotTing hotMarginLR" v-link="{ name:'radio',params: {id:item.id} }">
                    <img v-bind:src="item.coverimg" alt="" width="100%">
                    <div class="hotContentTing titleWeight">{{item.title}}</div>
                </div>

            </template>
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
        <div class="topicList">
            <template v-for="item in topicArr">

                <div class="ub ub-ac hotCotentTopic hotMarginTB hotTopicItem"
                     v-link="{name:'topic',params: {id:item.id}}">
                    <div class="ub">
                        <img v-bind:data-src="item.coverimg" alt="" class=" hotTopic b-lazy">
                    </div>
                    <div class="hotPaddL ub-f1 titleWeight">{{item.title}}</div>
                </div>
            </template>
        </div>
    </div>
    <div class="commonSpace ub">
    </div>
    <div class="hot hotBottom">
        <div class="ub ub-ver hotTitle ub-ac titleB">
            热门音乐
            <div class="titleS">HOT MUSIC</div>
            <div class="hotLine"></div>
        </div>
        <div class="musicList">
            <template v-for="item in musicArr">
                <div class="ub ub-ac hotCotentTopic hotMusicItem hotMarginMusicTB"
                     v-link="{ name:'music',params: {id:item.id} }">
                    <div class="ub">
                        <img v-bind:data-src="item.coverimg" alt="" class="hotMusic b-lazy">
                    </div>
                    <div class="hotPaddL ub-f1 titleWeight titleFont">{{item.title}}</div>
                    <div class="ub ub-img hotMusicPlay"></div>
                </div>

            </template>
        </div>
    </div>
    <!--hot-share end-->

    <!--footer start-->
    <div class="footer" v-on:click="download">
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
    module.exports = {
        data: function () {
            return {articleArr: [], tingArr: [], topicArr: [], musicArr: []};
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
        ready: function () {
            var self = this;
            R.ajax({
                url: 'pub/today.php',
                data: {
                    pageSize: 40
                },
                success: function (data) {
                    var articleArr = [];
                    var tingArr = [];
                    var topicArr = [];
                    var musicArr = [];
                    $.each(data, function (idx, item) {
                        if (item.content.type == '15') { //article
                            var articleItem = {
                                'id': item.content.id,
                                'title': item.content.title
                            }
                            articleArr.push(articleItem);
                        } else if (item.content.type == '17') { //ting
                            var tingItem = {
                                'id': item.tingInfo.tingid,
                                'title': item.tingInfo.title.substr(0,6),
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
                                'title': item.content.title,
                                'coverimg': item.content.coverimg
                            }
                            musicArr.push(musicItem);
                        }
                    })
                    self.articleArr = articleArr.splice(0, 3);
                    self.tingArr = tingArr.splice(0, 3);
                    self.topicArr = topicArr.splice(0, 3);
                    self.musicArr = musicArr.splice(0, 3);

                    var bLazy = new Blazy({
                    });

                }
            });
        }
    };

</script>