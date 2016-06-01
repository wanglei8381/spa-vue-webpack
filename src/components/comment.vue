<template>
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
                        <div class="ub">
                            <img :src="item.userinfo.icon" class="commentUserIcon" alt="">
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

        <div class="appDown ub ub-ver ub-ac">
            <div class="ub-img appImage"></div>
            <div class="ub appText">
                <div>打开片刻APP</div>
                <div class="appComma">,</div>
                <div>查看全部<span>78</span>条评论</div>
            </div>
        </div>
    </div>
    <!--commend end-->
</template>

<script>

    module.exports = {
        data: function () {
            //timelineData = {}
            return {list: []};
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
            console.log("id====" + this.$route.params.id);
            var self = this;
            var id = self.$route.params.id;
            $.ajax({
                url: './src/components/data.json',
                data: {
                    contentid: id
                },
                dataType:'json',
                success: function (data) {
                    self.list = data.splice(0,3);
                }
            });
        }
    };

</script>