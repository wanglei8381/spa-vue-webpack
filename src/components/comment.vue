<template>
    <div class="allComments">
        <div class="commonSpace"></div>
        <!--commend strat-->
        <div class="comment">
            <div class="ub ub-ver commentTitle titleB">
                <div>热门评论</div>
                <div class="titleS">HOT COMMENTS</div>
            </div>

            <div class="commentList">
                <template v-for="item in list">
                    <div class="ub ub-ver commentBody">
                        <div class="ub ub-ac">
                            <div class="ub" v-if="item.userinfo.icon">
                                <img v-bind:data-src="item.userinfo.icon" class="b-lazy commentUserIcon userIconDefault" :src="loading">
                            </div>
                            <div class="ub" v-else="item.userinfo.icon">
                                <img class="commentUserIcon userIconDefault" alt="">
                            </div>
                            <div class="ub-f1 commentUserName">{{item.userinfo.uname}}</div>
                            <div class="ub ub-pe">
                                <div class="ub-img praiseImg"></div>
                                <div class="praise">{{item.goods}}</div>
                            </div>
                        </div>
                        <div class="commentContent">{{item.content}}</div>
                    </div>
                </template>
            </div>

            <div class="appDown ub ub-ver ub-ac" v-on:click="download">
                <div class="ub-img appImage"></div>
                <div class="ub appText">
                    <div>打开片刻APP</div>
                    <div class="appComma">,</div>
                    <div>查看全部<span class="commentsL"></span>条评论</div>
                </div>
            </div>
        </div>
        <!--commend end-->
    </div>
</template>

<script>

    module.exports = {
        data: function () {
            return {
                list: [],
                loading: 'http://pianke.image.alimmdn.com/wxshare/assets/img/loading.jpg'
            };
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
            var id = self.$route.params.id;
            R.ajax({
                url: 'comment/listOfHot.php',
                data: {
                    contentid: id,
                    isAll: 1
                },
                success: function (data) {
                    if (data.length == 0) {
                        $('.allComments').addClass('uhide')
                    } else if (data.length < 3) {
                        self.list = data
                    } else {
                        self.list = data.splice(0, 3);
                    }
                    var bLazy = new Blazy({

                    });
                }
            });


        }
    };

</script>