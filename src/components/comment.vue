<template>
    <div class="commonSpace"></div>
    <!--commend strat-->
    <div class="comment">
        <div class="ub ub-ver commentTitle titleB">
            <div>热门评论</div>
            <div class="titleS">HOT COMMENTS</div>
        </div>
        <div class="ub ub-ver commentBody">
            <div class="ub ub-ac">
                <div class="ub">
                    <img src="img/userIcon.png" class="commentUserIcon" alt="">
                </div>
                <div class="ub-f1 commentUserName">春风十里不如我</div>
                <div class="ub ub-pe">
                    <div class="ub-img praiseImg"></div>
                    <div class="praise"></div>
                </div>
            </div>
            <div class="commentContent">
                每个人都是特蕾莎,每个人都是托马斯.如果出现了太多字就在这里这行.
            </div>
        </div>
        <div class="ub ub-ver commentBody">
            <div class="ub ub-ac">
                <div class="ub">
                    <img src="img/userIcon.png" class="commentUserIcon" alt="">
                </div>
                <div class="ub-f1 commentUserName">bitter sugar</div>
                <div class="ub ub-pe">
                    <div class="ub-img praiseImg"></div>
                    <div class="praise">43</div>
                </div>
            </div>
            <div class="commentContent">
                每个人都是特蕾莎,每个人都是托马斯.如果出现了太多字就在这里这行.
            </div>
        </div>
        <div class="ub ub-ver commentBody">
            <div class="ub ub-ac">
                <div class="ub">
                    <img src="img/userIcon.png" class="commentUserIcon" alt="">
                </div>
                <div class="ub-f1 commentUserName">空白记忆</div>
                <div class="ub ub-pe">
                    <div class="ub-img praiseImg"></div>
                    <div class="praise">1</div>
                </div>
            </div>
            <div class="commentContent">
                每个人都是特蕾莎,每个人都是托马斯.如果出现了太多字就在这里这行.
            </div>
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
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'other-component':OtherComponent,
            HeaderComponent,
        }
    }

    //请求接口,获取话题评论列表
    /*var id = '5740021702334d673ee8e71e';
     R.ajax({
     url: 'comment/list.php',
     data: {
     contentid: id,
     pageSize: 3,
     isAll: 0
     },
     success: function (data) {
     showTopicCommentList(data)
     }
     });*/
    showTopicCommentList();
    function showTopicCommentList() {
        var str = '';
        for (var i = 0; i < 3; i++) {
            str += '<div class="ub ub-ver commentBody">' +
                    '<div class="ub ub-ac">' +
                    '<div class="ub">' +
                    '<img src="' + commentList[i].userinfo.icon + '" class="commentUserIcon" alt="">' +
                    '</div>' +
                    '<div class="ub-f1 commentUserName">' + commentList[i].userinfo.uname + '</div>' +
                    '<div class="ub ub-pe">' +
                    '<div class="ub-img praiseImg"></div>' +
                    '<div class="praise">' + commentList[i].goods + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="commentContent">' + commentList[i].content + '</div>' +
                    '</div>';
        }
        $('.commentList').html(str);
    }
</script>