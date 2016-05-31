//设置一个全局变量
var serverUrl = 'http://api.pianke.me/version4.0/';




var R = {
    dataUrl: function (url) {
        return serverUrl + url + "?sig=" + sign;
    },
    ajax: function (options) {

        var d = new Date();
        var timestamp = d.getFullYear() + '' + dateForm(d.getMonth() + 1) + d.getDate() + '' + d.getHours() + '' + d.getMinutes() + '' + d.getSeconds();
        var Authorization = $.base64.encode('0:' + timestamp);
        console.log(Authorization)
        console.log(timestamp)
        var sign = $.md5('0' + timestamp).toUpperCase();
        var headers = {
            'Authorization': Authorization
        }

        options.type = options.type || 'post';
        options.dataType = options.dataType || 'json';
        options.headers = headers;
        options.url = R.dataUrl(options.url);
        var success = options.success;
        var error = options.error;
        options.success = function (req) {
            try {
                if (req.code > 0) {
                    alert('出错')
                } else {
                    success(req.data);
                }
            } catch (e) {
                alert('数据解析出错');
            }
        };
        options.error = function () {
            alert('网络错误');
        };
        $.ajax(options);
    }
}

function dateForm(date) {
    if (date < 10) {
        return '0' + date;
    }
}

function topicCols(data) {
    data = data.substring(data.indexOf('<p'), data.lastIndexOf('</p>') + 4);
    data = data.replace(/[\s\n]+/g, ' ');
    var cols = data.split(/<br\s*\/*>/);
    var shortHtml = data;
    if (cols.length > 5) {
        shortHtml = cols[0] + '<br />' + cols[1] + '<br />' + cols[2] + '<br />' + cols[3] + '<br />' + cols[4] + '</p>';
    }
    var contentData = {
        'shortHtml': shortHtml,
        'dataLenght': cols.length
    };
    return contentData;
}

function contentCols(dom, cols) {
    var lineHeight = dom.css("line-height").toString().substr(0,2);
    var contentHeight = dom.height();
    if (contentHeight / lineHeight > cols) {
        dom.height(lineHeight * cols);
        dom.css("overflow", "hidden");
        $('.more').removeClass('uhide');
        $('.more').click(function () {
            dom.css("overflow", "");
            dom.height(contentHeight);
            $('.more').addClass('uhide');
        })
    }
}

$('.appDown').click(function () {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client');
    } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client&g_f=995016');
    }
})

$('.footer').click(function () {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client');
    } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        window.open('http://a.app.qq.com/o/simple.jsp?pkgname=com.pianke.client&g_f=995016');
    }
})

/*测试数据--->话题详情*/
var topicData = {
    "id": "5740021702334d673ee8e71e",
    "type": 24,
    "title": "你干过什么动机不纯的事？",
    "html": "<html >\n  <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0\" name=\"viewport\">\n      <meta content=\"yes\" name=\"apple-mobile-web-app-capable\">\n          <title>片刻</title>\n      <style type=\"text/css\">\n        audio { width: 100%;}\n      </style>\n    </head>\n    <body>\n        <article class=\"typo container\">\n            <p>醉翁之意不在酒，善假于物也<br />\n醉翁之意不在酒，善假于物也<br />\n醉翁之意不在酒，善假于物也<br />\n<br />\n正如我，发这个话题并不是想要知道你们的故事<br />\n只是想看有多少回应罢了，如此的不纯动机</p>\n        </article>\n    </body>\n</html>",
    "images": [],
    "songid": "",
    "isLike": 0,
    "comments": 150,
    "likes": 45,
    "topicUsers": 195,
    "tag": "自语",
    "tagCount": 1,
    "addtime": 1463812631,
    "userinfo": {
        "uid": 1298743,
        "uname": "茄子才3毛",
        "icon": "http://pkicon.image.alimmdn.com/icon/20160515/3a7c550ec6f5f2698416a02ca7f2eff6.png?v=1463311528"
    },
    "shareInfo": {
        "title": "你干过什么动机不纯的事？",
        "text": "醉翁之意不在酒，善假于物也正如我，发这个话题并不是想要知道你们的故事只是想看有多少回应罢了，如此的不纯动机",
        "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
        "url": "http://pianke.me/posts/5740021702334d673ee8e71e"
    }
}

/*测试数据--->音乐详情*/
var musicData = {
    "id": "5746a27e02334de948e8e74a",
    "type": 25,
    "title": "梦想的彼岸，总是在未知的远方",
    "text": "像从某个山谷传来的声音，空灵、婉转，浅唱低吟，令人沉醉，旋律柔和、安静，后半段小提琴的声音完全将心融化，这样的搭配组合让整首歌散发着一种随心所欲的美。至于歌名“On a Slow Boat to China”，是一句俚语，一艘船从欧美驶向中国，是一个漫长的旅途，当说到“a Slow Boat to China”时，通常暗指他们将会花很长的时间去实现自己的梦想。说到这，关于这首歌要表达的意思也自然明了了吧。\n\n\n梦想的彼岸，总是在未知的远方，虽然有时说不清那个梦想的具体意义，虽然坐上小船的在漫长的旅途里难免摇摇欲坠，但心底总有个叫信念的声音，告诉你，总有一天你终将会到达彼岸。",
    "songid": "1771565857",
    "isLike": 0,
    "comments": 16,
    "likes": 282,
    "tag": "听到就有好心情",
    "tagCount": 217,
    "addtime": 1464246910,
    "userinfo": {
        "uid": 1260676,
        "uname": "Sherry_Fino",
        "icon": "http://pkicon.image.alimmdn.com/icon/676/dfd51f9208fae38d9896caaaf49b146f"
    },
    "collInfo": {
        "id": "57409f1801334d8923284179",
        "name": "音乐",
        "uid": 3792571,
        "spaceName": "Hai.的片刻"
    },
    "shareInfo": {
        "title": "梦想的彼岸，总是在未知的远方",
        "text": "像从某个山谷传来的声音，空灵、婉转，浅唱低吟，令人沉醉，旋律柔和、安静，后半段小提琴的声音完全将心融化，这样的搭配组合让整首歌散发着一种随心所欲的美。至于歌名“",
        "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
        "url": "http://pianke.me/posts/5746a27e02334de948e8e74a"
    }
}

/*测试数据---> 文章详情*/
var articleData = {
    "id": "5527f076dfa6887a63000022",
    "type": 15,
    "typeName": "自由写作",
    "todayInfo": {
        "type": 23,
        "typeName": "奇妙物语"
    },
    "coverimg": "http://pkimg.image.alimmdn.com/upload/20160524/d2e7c297ddb990f8ef043882ebe514a3.JPG",
    "html": "<html >\n  <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n      <meta content=\"width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0\" name=\"viewport\">\n      <meta content=\"yes\" name=\"apple-mobile-web-app-capable\">\n          <title>片刻</title>\n      <style type=\"text/css\">\n        audio { width: 100%;}\n      </style>\n    </head>\n    <body>\n        <article class=\"typo container\">\n            <h1>魔术</h1>\n            <p class=\"author\"><span>作者: 文聰很忙</span>&nbsp;&nbsp; <span>3 min read</span>&nbsp;&nbsp;  <span>61人收录</span></p>\n\t\t\t<div class=\"recommend\"><p><span>“</span>你们眼中的魔术，只是商业手段、赚钱方法，但是在我眼中，是付出的整个人生。<span>”</span></p></div>\n            <p>孩子力竭声嘶地哭喊，大力捶击纹丝不动的木门，一缕灯光在门缝中渗入，孩子看到他的父亲，就在离他不足五米的地方，在捣鼓奇怪的机关箱子。收音机播放着谭咏麟经典怀旧的金曲，但根本不足以遮掩孩子的喊声，那个被父亲亲手锁紧在木箱里面的孩子。</p><p><br /></p><p>父亲关掉收音机，拿起几罐汽油，在木箱四周地上淋上汽油，在远处扔出一根火柴，火焰雄雄包围着木箱，闪烁着幼小的绝望。</p><p><br /></p><p>父亲在喃喃自语，“你一定要成功。”<br /></p><p><br /></p><p>【一】</p><p>观众齐声倒数十声，十，九，八，七，六，五，四，三，二，一！</p><p><br /></p><p>魔术师从十米半空中剧烈燃烧的大木箱里一跃而下，丝毫无损！</p><p><br /></p><p>观众全体站立爆发雷响一样的掌声，刘界天的逃脱魔术又再次成功了。</p><p><br /></p><p>台下有个观众吓出一身冷汗，不出一年，这个刘界天的魔术会让其他魔术师站不起来，实在是高超之极，毫无破绽，无与伦比的精彩。</p><p><br /></p><p>这个观众走出大厅，“我要知道他所有的秘密。”</p><p><br /></p><p>【二】</p><p>孩子长大后，继承了父亲的衣钵，在学校表演起了变鸽子，变玫瑰花的小魔术，成为了学校的明星，讨论人气程度甚至比会考还要高。</p><p><br /></p><p>孩子没什么朋友，只结交了一个成绩很好，也很受欢迎的班长，时间一长，也和这个门外汉班长讨论起魔术的精妙，告诉他很多的秘密。</p><p><br /></p><p>一次级会，孩子受邀表演节目，果然，一个变走扑克牌的魔术令台下的观众爆发热烈的掌声。</p><p><br /></p><p>“龌龊的招数，消失的扑克牌还留在他衣袖里面！”班长突然指出。</p><p><br /></p><p>……</p><p><br /></p><p>刘界天明天要表演一个用巨型电锯切碎一个观众成六份碎片的魔术，然而每个碎片还可以自由移动，毫无疑问，这个表演会再次震惊魔术界，其用具还在后台的仓库里面锁着。</p><p><br /></p><p>穿着黑色衣服的人轻松地解开大门，一窥究竟。</p><p><br /></p><p>奇怪的是，所有的工具都是正常的工具，没有秘密，没有镜子没有藏板没有机关！</p><p><br /></p><p>“你找到你想要的真相吗？”</p><p><br /></p><p>大灯突然亮明，刘界天手持一对手铐出现，黑衣男子发狂似的逃跑，突然一个趔趄倒下，双腿被手铐锁上了！</p><p><br /></p><p>“你……你为什么会出现在这里！”</p><p><br /></p><p>“别忘了我是搞魔术的。”</p><p><br /></p><p>“不可能！你的工具里面什么东西都没有，这里绝对不是你明天用的工具。”</p><p><br /></p><p>刘界天一步一步走近，蹲下，说，“你们眼中的魔术，只是商业手段，赚钱方法，但是在我眼中，是付出的整个人生。”</p><p><br /></p><p>【三】</p><p>孩子紧紧抱住他的父亲，泪如雨下，好像完全遗忘了身后燃烧的木屋。<br /></p><p><br /></p><p>父亲感动地搂住自己的孩子，“果然是我的孩子，你创造了命运，原谅我。”<br /></p><p><br /></p><p>……</p><p><br /></p><p>班长得意地指出男孩的魔术秘密，然后男孩冷静地说，“没有哦。”说罢掀起衣袖，几乎到肩膀。</p><p><br /></p><p>班长急了，大庭广众下揭穿人家的秘密，还失败了，能得了？</p><p><br /></p><p>“不对！藏在桌子里面！”</p><p><br /></p><p>男孩又把桌子正对观众，几个多事的同学看了一遍，什么都没有。</p><p><br /></p><p>“肯定还是藏在你身上，有本事你搜自己！”</p><p><br /></p><p>男孩露出无奈的表情，把全身搜了一次，连袜子都脱了，依然什么秘密都没有。</p><p><br /></p><p>班长一言不发，男孩说，“当然找不到，因为这是魔术哦。”</p><p><br /></p><p>台下观众以为这是魔术节目安排，再次爆发掌声，唯独班长一声不吭地坐下。</p><p><br /></p><p>班长其实是最受欢迎的人，只因男孩开始玩魔术后，他被冷落在一旁，所以想到这个方法想当众侮辱男孩。</p><p><br /></p><p>结束级会后，班长第一个跑回去教室的座位上，理清思路，但是看到语文书上有什么奇怪的东西，他慢慢拉出来，是刚刚的魔术弄消失的扑克牌！</p><p><br /></p><p>上面用黑色字体写着，“你永远猜不到我是怎么做的。”</p><p><br /></p><p>“啊！”</p><p><br /></p><p>【四】</p><p>“这就是你的成长故事？”<br /></p><p><br /></p><p>“对。”</p><p><br /></p><p>“不信，除非你告诉我你当年是怎么在箱子里逃出来的？”</p><p><br /></p><p>“明天表演结束后，告诉你。”</p><p><br /></p><p>刘界天把黑衣男子的嘴巴封上，绑在木椅子上，稳稳当当地。</p><p><br /></p><p>晚上经过一轮表演后，女助手兴奋地说，“下面来表演压轴魔术！电锯人体！”</p><p><br /></p><p>刘界天把黑衣男子推到舞台上，示意后台将器材拿出来，不一会儿，全场都听到震耳欲聋的电锯声音，电锯从天而降，正对着黑衣男子的头上，随着时间推移慢慢下降。</p><p><br /></p><p>黑衣男子吓出五脏六腑，可是又动弹不得，不断对刘界天眼神示意暂停。</p><p><br /></p><p>刘界天接过麦克风，幽默解说，“本来是由我来亲自表演这个逃脱节目的，可是临时有位观众朋友自告奋勇，我们就放眼看看，到底是惊险逃脱，还是被锯开两半呢，嘻嘻。”</p><p><br /></p><p>“好了各位观众，倒数十个数！松开这个电锯！”</p><p><br /></p><p>观众兴奋地鼓动起来。</p><p><br /></p><p>“十！”</p><p><br /></p><p>“九！”</p><p><br /></p><p>“八！”</p><p><br /></p><p>“七！”</p><p><br /></p><p>“六！”</p><p><br /></p><p>“五！”</p><p><br /></p><p>“四！”</p><p><br /></p><p>“三！”</p><p><br /></p><p>“二！”</p><p><br /></p><p>“一！”</p><p><br /></p><hr /><p>陈文聪，我最喜欢奇奇怪怪的文章，非鸡汤，现实，黑暗，绝对，不发人深省，但是你会看到镜子。新浪微博：<a href=\"http://weibo.com/u/1729071544?profile_ftype=1&amp;is_all=1#_0\" style=\"text-decoration:none;\" target=\"_blank\">@文聰很忙</a></p><pre>“奇妙物语”专收惊奇故事，欢迎将作品推荐至邮箱：pkstory@126.com，投稿请直接附上作品链接。</pre>\n            <br />\n            <p style=\"font-style:italic;font-size:0.875em;\">(来自：自由写作)</p>\n        </article>\n    </body>\n</html>",
    "images": [],
    "songid": "",
    "isLike": 0,
    "views": 10345,
    "mins": 3,
    "comments": 21,
    "likes": 151,
    "addtime": 1428680822,
    "userinfo": {
        "uid": 123145,
        "uname": "文聰很忙",
        "icon": "http://tp1.sinaimg.cn/1729071544/180/40000318128/1",
        "desc": "巨蟹座",
        "status": 0
    },
    "tingInfo": {},
    "collInfo": {
        "id": "56d5e3d001334d736428414e",
        "name": "喜欢的文章",
        "uid": 2968102,
        "spaceName": ""
    },
    "shareInfo": {
        "title": "魔术",
        "text": "你们眼中的魔术，只是商业手段、赚钱方法，但是在我眼中，是付出的整个人生。",
        "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
        "url": "http://pianke.me/posts/5527f076dfa6887a63000022"
    }
}
/*测试数据---> 文章内容*/
var articleContentData = {
    "id": "5527f076dfa6887a63000022",
    "title": "魔术",
    "type": 15,
    "songid": "",
    "wordcardid": "",
    "tag": "故事",
    "content": [
        {
            "imageUrl": "",
            "content": "孩子力竭声嘶地哭喊，大力捶击纹丝不动的木门，一缕灯光在门缝中渗入，孩子看到他的父亲，就在离他不足五米的地方，在捣鼓奇怪的机关箱子。收音机播放着谭咏麟经典怀旧的金曲，但根本不足以遮掩孩子的喊声，那个被父亲亲手锁紧在木箱里面的孩子。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "父亲关掉收音机，拿起几罐汽油，在木箱四周地上淋上汽油，在远处扔出一根火柴，火焰雄雄包围着木箱，闪烁着幼小的绝望。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "父亲在喃喃自语，“你一定要成功。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "【一】"
        },
        {
            "imageUrl": "",
            "content": "观众齐声倒数十声，十，九，八，七，六，五，四，三，二，一！"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "魔术师从十米半空中剧烈燃烧的大木箱里一跃而下，丝毫无损！"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "观众全体站立爆发雷响一样的掌声，刘界天的逃脱魔术又再次成功了。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "台下有个观众吓出一身冷汗，不出一年，这个刘界天的魔术会让其他魔术师站不起来，实在是高超之极，毫无破绽，无与伦比的精彩。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "这个观众走出大厅，“我要知道他所有的秘密。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "【二】"
        },
        {
            "imageUrl": "",
            "content": "孩子长大后，继承了父亲的衣钵，在学校表演起了变鸽子，变玫瑰花的小魔术，成为了学校的明星，讨论人气程度甚至比会考还要高。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "孩子没什么朋友，只结交了一个成绩很好，也很受欢迎的班长，时间一长，也和这个门外汉班长讨论起魔术的精妙，告诉他很多的秘密。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "一次级会，孩子受邀表演节目，果然，一个变走扑克牌的魔术令台下的观众爆发热烈的掌声。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“龌龊的招数，消失的扑克牌还留在他衣袖里面！”班长突然指出。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "……"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "刘界天明天要表演一个用巨型电锯切碎一个观众成六份碎片的魔术，然而每个碎片还可以自由移动，毫无疑问，这个表演会再次震惊魔术界，其用具还在后台的仓库里面锁着。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "穿着黑色衣服的人轻松地解开大门，一窥究竟。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "奇怪的是，所有的工具都是正常的工具，没有秘密，没有镜子没有藏板没有机关！"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“你找到你想要的真相吗？”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "大灯突然亮明，刘界天手持一对手铐出现，黑衣男子发狂似的逃跑，突然一个趔趄倒下，双腿被手铐锁上了！"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“你……你为什么会出现在这里！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“别忘了我是搞魔术的。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“不可能！你的工具里面什么东西都没有，这里绝对不是你明天用的工具。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "刘界天一步一步走近，蹲下，说，“你们眼中的魔术，只是商业手段，赚钱方法，但是在我眼中，是付出的整个人生。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "【三】"
        },
        {
            "imageUrl": "",
            "content": "孩子紧紧抱住他的父亲，泪如雨下，好像完全遗忘了身后燃烧的木屋。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "父亲感动地搂住自己的孩子，“果然是我的孩子，你创造了命运，原谅我。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "……"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "班长得意地指出男孩的魔术秘密，然后男孩冷静地说，“没有哦。”说罢掀起衣袖，几乎到肩膀。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "班长急了，大庭广众下揭穿人家的秘密，还失败了，能得了？"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“不对！藏在桌子里面！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "男孩又把桌子正对观众，几个多事的同学看了一遍，什么都没有。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“肯定还是藏在你身上，有本事你搜自己！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "男孩露出无奈的表情，把全身搜了一次，连袜子都脱了，依然什么秘密都没有。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "班长一言不发，男孩说，“当然找不到，因为这是魔术哦。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "台下观众以为这是魔术节目安排，再次爆发掌声，唯独班长一声不吭地坐下。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "班长其实是最受欢迎的人，只因男孩开始玩魔术后，他被冷落在一旁，所以想到这个方法想当众侮辱男孩。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "结束级会后，班长第一个跑回去教室的座位上，理清思路，但是看到语文书上有什么奇怪的东西，他慢慢拉出来，是刚刚的魔术弄消失的扑克牌！"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "上面用黑色字体写着，“你永远猜不到我是怎么做的。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“啊！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "【四】"
        },
        {
            "imageUrl": "",
            "content": "“这就是你的成长故事？”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“对。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“不信，除非你告诉我你当年是怎么在箱子里逃出来的？”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“明天表演结束后，告诉你。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "刘界天把黑衣男子的嘴巴封上，绑在木椅子上，稳稳当当地。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "晚上经过一轮表演后，女助手兴奋地说，“下面来表演压轴魔术！电锯人体！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "刘界天把黑衣男子推到舞台上，示意后台将器材拿出来，不一会儿，全场都听到震耳欲聋的电锯声音，电锯从天而降，正对着黑衣男子的头上，随着时间推移慢慢下降。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "黑衣男子吓出五脏六腑，可是又动弹不得，不断对刘界天眼神示意暂停。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "刘界天接过麦克风，幽默解说，“本来是由我来亲自表演这个逃脱节目的，可是临时有位观众朋友自告奋勇，我们就放眼看看，到底是惊险逃脱，还是被锯开两半呢，嘻嘻。”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“好了各位观众，倒数十个数！松开这个电锯！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "观众兴奋地鼓动起来。"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“十！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“九！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“八！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“七！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“六！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“五！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“四！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“三！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“二！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "“一！”"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "陈文聪，我最喜欢奇奇怪怪的文章，非鸡汤，现实，黑暗，绝对，不发人深省，但是你会看到镜子。新浪微博：<a href=\"http://weibo.com/u/1729071544?profile_ftype=1&amp;is_all=1#_0\" style=\"text-decoration:none;\" target=\"_blank\">@文聰很忙</a>"
        }
    ]
}

/*测试数据---> 碎片详情*/
var timelineData = {
    "id": "574d0add01334daf3828419c",
    "type": 2,
    "coverimg": "http://pkimg.image.alimmdn.com/upload/20160531/7e4222512260b3c7f17cbc9f5f1d20d9.png",
    "text": "f是一朵花，它喜欢水，却不喜欢太多水。",
    "songid": "1770155810",
    "isLike": 0,
    "comments": 0,
    "likes": 0,
    "tag": "故事",
    "tagCount": 81,
    "addtime": 1464666845,
    "userinfo": {
        "uid": 3676000,
        "uname": "我喜欢你爱我的心",
        "icon": "http://pkicon.image.alimmdn.com/icon/20160520/83d0d6ca654cc15a91ecaf8699676b46.jpg?v=1463759082"
    },
    "collInfo": {
        "id": "5716533502334df078e8e6d3",
        "name": "入场",
        "uid": 3676000,
        "spaceName": "我喜欢你爱我的心"
    },
    "shareInfo": {
        "title": "故事",
        "text": "f是一朵花，它喜欢水，却不喜欢太多水。",
        "pic": "http://pkimg.image.alimmdn.com/upload/20160531/7e4222512260b3c7f17cbc9f5f1d20d9.png",
        "url": "http://pianke.me/timeline/574d0add01334daf3828419c"
    },
    "commentList": []
}

/*测试数据---> 电台Ting详情*/
var tingData = {
    "tingid": "5734954b723125fa558b4603",
    "contentid": "5734954b723125fa558b4604",
    "title": "莉莉安 女声翻唱",
    "imgUrl": "http://pkimg.image.alimmdn.com/upload/20160519/df750b16aeb8522209bc2d5e1474c505.JPG",
    "musicUrl": "http://pianke.file.alimmdn.com/upload/20160512/c42523d78fbc4f960da8409789b2adc5.MP3",
    "webview_url": "http://pianke.me/webview/573493745d7743062d8b4578",
    "isLike": 0,
    "comments": 47,
    "likes": 944,
    "plays": 12687,
    "collInfo": {
        "id": "56a4ee5002334dd50818b2e1",
        "name": "",
        "uid": 846232,
        "spaceName": "幺儿 .的片刻"
    },
    "userinfo": {
        "uid": 3745607,
        "uname": "Mukyo狗狗",
        "icon": "http://pkicon.image.alimmdn.com/icon/20160511/f90441a5390f1f1d6906b938d2cc989d.png?v=1462930008"
    },
    "authorinfo": {
        "uid": 3745607,
        "uname": "Mukyo狗狗",
        "icon": "http://pkicon.image.alimmdn.com/icon/20160511/f90441a5390f1f1d6906b938d2cc989d.png?v=1462930008"
    },
    "shareinfo": {
        "title": "莉莉安 女声翻唱",
        "pic": "http://pkimg.image.alimmdn.com/upload/20160519/df750b16aeb8522209bc2d5e1474c505.JPG",
        "text": "我正在收听《莉莉安 女声翻唱》。主播：Mukyo狗狗 用声音交换世界，我在#片刻·ting#",
        "url": "http://pianke.me/ting/5734954b723125fa558b4603"
    }
}
/*测试数据---> 电台Ting原文数据*/
var tingArticleData = {
    "id": "573493745d7743062d8b4578",
    "title": "莉莉安 女声翻唱",
    "type": 15,
    "songid": "",
    "wordcardid": "",
    "tag": "音乐",
    "content": [
        {
            "imageUrl": "",
            "content": "5sing/echo/唱吧：Mukyo狗狗"
        },
        {
            "imageUrl": "",
            "content": "微博：@Mukyo就是狗狗"
        },
        {
            "imageUrl": "",
            "content": "谢谢每一位听歌的人"
        },
        {
            "imageUrl": "",
            "content": ""
        },
        {
            "imageUrl": "http://pkimg.image.alimmdn.com/upload/20160512/f302a5b1efe5919dd6c1403cae1aee3c.jpeg",
            "content": ""
        },
        {
            "imageUrl": "",
            "content": "莉莉安原唱：宋冬野"
        },
        {
            "imageUrl": "",
            "content": "改编首唱：徐佳莹翻唱：Mukyo狗狗后期：麦兜不吃书她发现孤独的人准备动身于是就祷告着 黄昏直到夜里她转头听见悲伤的呜咽一个善良的女子 长发垂肩她已跟随黄昏 来临翠绿的衣裳在炉火中 化为灰烬升起火焰一直烧到 黎明一直到那女子 推开门离去她自言自语在离这很远的地方 有一片海滩孤独的人他就在海上 撑着船帆如果你看到他 回到海岸就请你告诉他你的名字我的名字 莉莉安她已来临翠绿的衣裳在炉火中 化为灰烬升起火焰一直烧到 黎明一直到那女子 推开门离去她自言自语在离这很远的地方 有一片海滩孤独的人他就在海上 撑着船帆如果你看到他 回到海岸就请你告诉他你的名字我的名字 莉莉安她不想忘记了她的名她不想胆怯了失去爱的勇气在离这很远的地方 有一片海滩孤独的人他就在海上 撑着船帆如果你看到他 回到海岸就请你告诉他你的名字 我的名字 在离这很远的地方 有一片海滩孤独的人他就在海上 撑着船帆如果你看到他 回到海岸就请你 告诉他你的名字我的名字 莉莉安End."
        }
    ]
}


/*测试数据--->评论列表(3条)*/
var commentList = [
    {
        "id": "57481f2f02334dce51e8e6c6",
        "content": "发一条她感兴趣的动态等她的回复👽",
        "goods": 0,
        "isGood": 0,
        "addtime": 1464344367,
        "images": [],
        "userinfo": {
            "uid": 1421068,
            "uname": "殘",
            "icon": "http://q.qlogo.cn/qqapp/100339551/2F497912D4F1DDC2485FE735C0335E6C/100"
        },
        "replyList": []
    },
    {
        "id": "57481aee01334d9011284160",
        "content": "冒充网友和他聊天",
        "goods": 10,
        "isGood": 0,
        "addtime": 1464343278,
        "images": [],
        "userinfo": {
            "uid": 3806885,
            "uname": "没有壳的蜗牛3806885",
            "icon": "http://wx.qlogo.cn/mmopen/Qo5MQt4c6EB5duG9pvpI2ez9uAwRQ8eatL8MOHoB0ePwFcoZI4AEop51ibV3pnUmdib3uCexYnFQ7U4FFxs9oe2Fia68Lqv0FoU/0"
        },
        "replyList": []
    },
    {
        "id": "5748190b02334d4a27e8e714",
        "content": "你的图在哪里？",
        "goods": 43,
        "isGood": 0,
        "addtime": 1464342795,
        "images": [],
        "userinfo": {
            "uid": 3607919,
            "uname": "耳火堆石",
            "icon": "http://q.qlogo.cn/qqapp/100339551/E2B580AB0BBD16E910CDF92150A1251A/100"
        },
        "replyList": []
    }
]

/*测试数据--->所有热门(30条)*/
var hotList = [
    {
        "type": 24,
        "typeName": "碎片",
        "date": "27/May.",
        "pubdate": 1464339600,
        "tingInfo": {},
        "content": {
            "id": "5719ace101334df564284196",
            "userinfo": {
                "uid": 2769407,
                "uname": "橘右京",
                "icon": "http://pkicon.image.alimmdn.com/icon/407/947086578e7330dc3a912c6eb935b606"
            },
            "type": 2,
            "title": "写给自己的话",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160422/f1f71c0e8a3a80c435afa7b40cf8c797.png",
            "images": [],
            "text": "“人要让自己活得像一只军队，对自己的大脑和心灵招兵买马。”",
            "tag": "写给自己的话",
            "tagCount": 15261,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 0,
            "likes": 56,
            "addtime": 1461300449,
            "collInfo": {},
            "shareInfo": {
                "title": "写给自己的话",
                "text": "“人要让自己活得像一只军队，对自己的大脑和心灵招兵买马。”",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160422/f1f71c0e8a3a80c435afa7b40cf8c797.png",
                "url": "http://pianke.me/timeline/5719ace101334df564284196"
            }
        }
    },
    {
        "type": 19,
        "typeName": "片刊",
        "date": "27/May.",
        "pubdate": 1464337800,
        "tingInfo": {},
        "content": {
            "id": "57295c9f02334dcb49e8e789",
            "userinfo": {
                "uid": 1414911,
                "uname": "深海一鱼",
                "icon": "http://pkicon.image.alimmdn.com/icon/911/c52885409d0c388ca38b2cb600acb11e"
            },
            "type": 26,
            "title": "匠人匠心李宗盛",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160526/99430bf559c5a0d17c48c1832a059a48.JPG",
            "images": [],
            "text": "用最朴实的话打动你的心。",
            "tag": "音乐",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 1,
            "likes": 0,
            "addtime": 1462328479,
            "collInfo": {
                "id": "57295c9f02334dcb49e8e789",
                "name": "匠人匠心李宗盛",
                "tag": "音乐",
                "contains": 17,
                "subscribes": 50
            },
            "shareInfo": {
                "title": "匠人匠心李宗盛",
                "text": "用最朴实的话打动你的心。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160505/57295c9f02334dcb49e8e789.jpg?v=1462416071",
                "url": "http://pianke.me"
            }
        }
    },
    {
        "type": 5,
        "typeName": "唱片馆",
        "date": "27/May.",
        "pubdate": 1464336000,
        "tingInfo": {},
        "content": {
            "id": "57428e6e02334de975e8e763",
            "userinfo": {
                "uid": 3023558,
                "uname": "晨曦安来",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160329/dfafa966dc95c5ece41d9fbf127184bc.png?v=1459259623"
            },
            "type": 25,
            "title": "没办法，我就是喜欢你啊！",
            "coverimg": "",
            "images": [],
            "text": "之前看小说《挪威的森林》时，特别喜欢小林绿子这个人物角色。印象很深的一个段落，是绿子在跟渡边告白时，说过这样的一段话：“我可是有血有肉的活生生的女孩儿，而且现在就在你的怀抱里表白说喜欢你。只要你一声令下，赴汤蹈火都在所不惜。虽然我多少有蛮不讲理的地方，但心地善良正直，勤快能干，脸蛋也相当俊俏，乳房形状也够好看，饭菜做得又好，父亲的遗产也办了信托存款，你还不以为这是大甩卖？你要是不买，我不久就到别处",
            "tag": "就是喜欢你",
            "tagCount": 2,
            "topicUsers": 0,
            "songid": "1774495634",
            "isLike": 0,
            "comments": 9,
            "likes": 200,
            "addtime": 1463979630,
            "collInfo": {},
            "shareInfo": {
                "title": "没办法，我就是喜欢你啊！",
                "text": "之前看小说《挪威的森林》时，特别喜欢小林绿子这个人物角色。印象很深的一个段落，是绿子在跟渡边告白时，说过这样的一段话：“我可是有血有肉的活生生的女孩儿，而且现在",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/57428e6e02334de975e8e763"
            }
        }
    },
    {
        "type": 10,
        "typeName": "破万卷",
        "date": "27/May.",
        "pubdate": 1464334200,
        "tingInfo": {},
        "content": {
            "id": "5740c5fd5d7743fc548b4569",
            "userinfo": {
                "uid": 2646311,
                "uname": "陈伟恒",
                "icon": "http://pkicon.image.alimmdn.com/icon/311/2646311/2cca911e02a2aeaa585cc1176a9faaf7_180"
            },
            "type": 15,
            "title": "力量源于真实 |《群山回唱》",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160523/b29a3334a994e82b5eaec8b909db1cf3.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160522/40956bfcaed7f583566097d8c9f3f33e.jpeg"
            ],
            "text": "这本书或许要胜过《追风筝的人》，成为卡勒德·胡塞尼的巅峰之作。",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 3,
            "likes": 15,
            "addtime": 1463862781,
            "collInfo": {},
            "shareInfo": {
                "title": "力量源于真实 |《群山回唱》",
                "text": "这本书或许要胜过《追风筝的人》，成为卡勒德·胡塞尼的巅峰之作。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160522/40956bfcaed7f583566097d8c9f3f33e.jpeg",
                "url": "http://pianke.me/posts/5740c5fd5d7743fc548b4569"
            }
        }
    },
    {
        "type": 9,
        "typeName": "良品",
        "date": "27/May.",
        "pubdate": 1464332400,
        "tingInfo": {},
        "content": {
            "id": "56cfd1085d77431b108b45f6",
            "userinfo": {
                "uid": 102379,
                "uname": "片刻",
                "icon": "http://pkicon.image.alimmdn.com/icon/379/102379/816061898f5d1797ea3c7dcb0fe41083_180"
            },
            "type": 15,
            "title": "哪一件小事让你学会了受用至今的道理？",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160517/06a23503e4751391536553c580c3b04b.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160226/175f8586c924693dc54ba1663e850833.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160226/188e51ba65d50bec5e7aef090d858942.png",
                "http://pkimg.image.alimmdn.com/upload/20160226/a5ef849d9309b4e20da15f22fb24572c.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160226/5c9e24fbb95859ee655d8d3a5640fb4a.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160226/1acea7e5ed30d1b9fada9d35a3aa06e0.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160226/fe6054cd37beaa9f548e9f621cc09b22.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160226/3d165ab021bb06ba3ba5ecb2f58f373a.jpeg"
            ],
            "text": "很多生活的真相，就藏在细节中。年幼时长辈不经意讲起的一句话，很多年以后才真正明白；懵懂时读的一本书，竟在今天依然决定着你的选择。我们会学到很多东西，很多学校里没有教过的东西。在一只流浪猫身上学会尊重生命；在一次失败后学会勇敢前行……人与人的不同，有时候只是细微的触觉，一些敏锐的人得到了，而另外的人，却不知道失去过什么。生活带着禅意的美，在不经意间散发光芒。你曾在小事中学会的道理，改变过你什么？我们",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "1772202580",
            "isLike": 0,
            "comments": 165,
            "likes": 698,
            "addtime": 1456460040,
            "collInfo": {},
            "shareInfo": {
                "title": "哪一件小事让你学会了受用至今的道理？",
                "text": "很多生活的真相，就藏在细节中。年幼时长辈不经意讲起的一句话，很多年以后才真正明白；懵懂时读的一本书，竟在今天依然决定着你的选择。我们会学到很多东西，很多学校里没",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160226/175f8586c924693dc54ba1663e850833.jpeg",
                "url": "http://pianke.me/posts/56cfd1085d77431b108b45f6"
            }
        }
    },
    {
        "type": 2,
        "typeName": "Ting",
        "date": "27/May.",
        "pubdate": 1464325200,
        "tingInfo": {
            "tingid": "5734954b723125fa558b4603",
            "contentid": "5734954b723125fa558b4604",
            "title": "莉莉安 女声",
            "imgUrl": "http://pkimg.image.alimmdn.com/upload/20160519/df750b16aeb8522209bc2d5e1474c505.JPG",
            "musicUrl": "http://pianke.file.alimmdn.com/upload/20160512/c42523d78fbc4f960da8409789b2adc5.MP3",
            "webview_url": "http://pianke.me/webview/573493745d7743062d8b4578",
            "isLike": 0,
            "comments": 12,
            "likes": 328,
            "addtime": 1463063891,
            "userinfo": {
                "uid": 3745607,
                "uname": "Mukyo狗狗",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160511/f90441a5390f1f1d6906b938d2cc989d.png?v=1462930008"
            },
            "authorinfo": {
                "uid": 3745607,
                "uname": "Mukyo狗狗",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160511/f90441a5390f1f1d6906b938d2cc989d.png?v=1462930008"
            },
            "shareinfo": {
                "title": "莉莉安 女声翻唱",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160519/df750b16aeb8522209bc2d5e1474c505.JPG",
                "text": "我正在收听《莉莉安 女声翻唱》。主播：Mukyo狗狗 用声音交换世界，我在#片刻·ting#",
                "url": "http://pianke.me/ting/5734954b723125fa558b4603"
            }
        },
        "content": {
            "type": 17,
            "text": "治愈女声翻唱 | 在某个安静的午后，你是否也在轻声哼唱这首《莉莉安》。"
        }
    },
    {
        "type": 3,
        "typeName": "坐谈会",
        "date": "27/May.",
        "pubdate": 1464321600,
        "tingInfo": {},
        "content": {
            "id": "5740021702334d673ee8e71e",
            "userinfo": {
                "uid": 1298743,
                "uname": "茄子才3毛",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160515/3a7c550ec6f5f2698416a02ca7f2eff6.png?v=1463311528"
            },
            "type": 24,
            "title": "你干过什么动机不纯的事？",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160523/26d27682eb79b9ffd3a5b01116270b85.JPEG",
            "images": [],
            "text": "醉翁之意不在酒，善假于物也正如我，发这个话题并不是想要知道你们的故事只是想看有多少回应罢了，如此的不纯动机",
            "tag": "自语",
            "tagCount": 1,
            "topicUsers": 179,
            "songid": "",
            "isLike": 0,
            "comments": 137,
            "likes": 42,
            "addtime": 1463812631,
            "collInfo": {},
            "shareInfo": {
                "title": "你干过什么动机不纯的事？",
                "text": "醉翁之意不在酒，善假于物也正如我，发这个话题并不是想要知道你们的故事只是想看有多少回应罢了，如此的不纯动机",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/5740021702334d673ee8e71e"
            }
        }
    },
    {
        "type": 23,
        "typeName": "奇妙物语",
        "date": "27/May.",
        "pubdate": 1464318000,
        "tingInfo": {},
        "content": {
            "id": "56c855ba5d7743ea508b4571",
            "userinfo": {
                "uid": 3480792,
                "uname": "莫二-",
                "icon": "http://tp3.sinaimg.cn/3183304654/180/5749034304/1"
            },
            "type": 15,
            "title": "狩猎",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160524/1bb0bcd30be5535ad6b3550d1def8e93.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160220/5c2e8733189c642d026ad50d813f9931.jpeg"
            ],
            "text": "如果我也用这种方式跟你交流，那你，接受吗？",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 9,
            "likes": 57,
            "addtime": 1455969722,
            "collInfo": {},
            "shareInfo": {
                "title": "狩猎",
                "text": "如果我也用这种方式跟你交流，那你，接受吗？",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160220/5c2e8733189c642d026ad50d813f9931.jpeg",
                "url": "http://pianke.me/posts/56c855ba5d7743ea508b4571"
            }
        }
    },
    {
        "type": 7,
        "typeName": "在路上",
        "date": "27/May.",
        "pubdate": 1464314400,
        "tingInfo": {},
        "content": {
            "id": "573e95355d774311708b456a",
            "userinfo": {
                "uid": 3346473,
                "uname": "心仪的对象",
                "icon": "http://qzapp.qlogo.cn/qzapp/100339551/5CFFAC8EF0837F54C4FF5BD5F547B87D/100"
            },
            "type": 15,
            "title": "澳门 | 令人动容的赌城小艺术",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160520/151f0748e8425556764bed4e809e5ed9.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160520/845c78d7eff1f4d8b228dd043de3e8be.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160520/ad6f6b435dd295e59530fc28a1bd3c5d.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160520/0e9c554f517d33dce59002d51aa527c3.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160520/4c3d904e45b2cbd933be82e0497052e9.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160520/f106955551098f3b9d40f3cf8f5b3610.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160520/16a864406404e12547935a219944dec0.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160520/8c947cc078c2fdbc4f5d918f0bfc3b7a.jpeg"
            ],
            "text": "澳门，除了纸醉金迷、浮夸娱乐，还有一些令人动容的艺术正等待着你去发现。",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 4,
            "likes": 53,
            "addtime": 1463719221,
            "collInfo": {},
            "shareInfo": {
                "title": "澳门 | 令人动容的赌城小艺术",
                "text": "澳门，除了纸醉金迷、浮夸娱乐，还有一些令人动容的艺术正等待着你去发现。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160520/845c78d7eff1f4d8b228dd043de3e8be.jpeg",
                "url": "http://pianke.me/posts/573e95355d774311708b456a"
            }
        }
    },
    {
        "type": 19,
        "typeName": "片刊",
        "date": "27/May.",
        "pubdate": 1464310800,
        "tingInfo": {},
        "content": {
            "id": "573e5c0302334d4b61e8e69e",
            "userinfo": {
                "uid": 2706571,
                "uname": "列侬的小情人",
                "icon": "http://pkicon.image.alimmdn.com/icon/571/2737f81defdd422bca1cf91ae0d436e4"
            },
            "type": 26,
            "title": "民国情事兴",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160526/b39bacf4d96f75c215b2e553a86c689e.JPG",
            "images": [],
            "text": "情书最美是民国，看文学大咖如何撩妹。",
            "tag": "日志",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 1,
            "likes": 0,
            "addtime": 1463704579,
            "collInfo": {
                "id": "573e5c0302334d4b61e8e69e",
                "name": "民国情事兴",
                "tag": "日志",
                "contains": 11,
                "subscribes": 456
            },
            "shareInfo": {
                "title": "民国情事兴",
                "text": "情书最美是民国，看文学大咖如何撩妹。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160520/573e5c0302334d4b61e8e69e.jpg?v=1463736524",
                "url": "http://pianke.me"
            }
        }
    },
    {
        "type": 4,
        "typeName": "视觉系",
        "date": "27/May.",
        "pubdate": 1464309000,
        "tingInfo": {},
        "content": {
            "id": "574452875d774387698b4579",
            "userinfo": {
                "uid": 3797416,
                "uname": "XuAn",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160525/d627c7780d73cc6477949edff88368e2.jpg?v=1464173450"
            },
            "type": 15,
            "title": "年光驻人",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160526/a14413d5594bb648635b00ba8bbc77c0.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160526/e1be2222fab1dfd1a4cc3847067ce58c.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/401a0b722e6d0c13c6df22c31292fe7d.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/9166a26f7b85a3a1e1e4896c9a2c262b.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/128d5579070a7108fddc0bc7ea76bd89.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/efe77feaae7d9f25b6b57cd2a1642965.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/8909a6f48e7b6f1f163cbfbd2cbc4ec5.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/ea425acf407c8c5ab8bb8d5f08a57eff.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/0c14cd37750da59c1c0014aa155b62b6.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/3ca11d84dd2f8bd7acfba48ca1b6874c.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/38cd8e59b71caff3789ec2a343b1a8bd.jpeg"
            ],
            "text": "年光留不住人，却不胜回忆的美妙。那人不在身边，却始终活在一些地方、一些事物里，不可磨灭。",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 3,
            "likes": 181,
            "addtime": 1464095367,
            "collInfo": {},
            "shareInfo": {
                "title": "年光驻人",
                "text": "年光留不住人，却不胜回忆的美妙。那人不在身边，却始终活在一些地方、一些事物里，不可磨灭。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160526/e1be2222fab1dfd1a4cc3847067ce58c.jpeg",
                "url": "http://pianke.me/posts/574452875d774387698b4579"
            }
        }
    },
    {
        "type": 1,
        "typeName": "早安故事",
        "date": "27/May.",
        "pubdate": 1464307800,
        "tingInfo": {},
        "content": {
            "id": "570eb8f901334db349284120",
            "userinfo": {
                "uid": 3679339,
                "uname": "杨小毅",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160412/221d48a6596ab33c7f3b1230cfd56b9a.jpg?v=1460461198"
            },
            "type": 15,
            "title": "野孩子",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160524/aabb79598cc83d9d77a214e72b5c847e.JPG",
            "images": [],
            "text": "读完故事，不温不火，潸然泪下。",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "1769274349",
            "isLike": 0,
            "comments": 22,
            "likes": 245,
            "addtime": 1460582649,
            "collInfo": {},
            "shareInfo": {
                "title": "野孩子",
                "text": "读完故事，不温不火，潸然泪下。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/570eb8f901334db349284120"
            }
        }
    },
    {
        "type": 2,
        "typeName": "Ting",
        "date": "27/May.",
        "pubdate": 1464307200,
        "tingInfo": {
            "tingid": "57395ffb723125fa558b4609",
            "contentid": "57395ffb723125fa558b460a",
            "title": "如果我明天就会死去",
            "imgUrl": "http://pkimg.image.alimmdn.com/upload/20160522/c5505174d561766c51b500b1e684721a.JPG",
            "musicUrl": "http://pianke.file.alimmdn.com/upload/20160516/600aae8722b32d8032636b3e720d3706.MP3",
            "webview_url": "http://pianke.me/webview/565d73465e7743473a8b45e9",
            "isLike": 0,
            "comments": 26,
            "likes": 123,
            "addtime": 1463378802,
            "userinfo": {
                "uid": 1221449,
                "uname": "森然_",
                "icon": "http://pkicon.image.alimmdn.com/icon/449/b74be143de205c429ce4c1d52fbd8860"
            },
            "authorinfo": {
                "uid": 2984359,
                "uname": "一安焉",
                "icon": "http://pkicon.image.alimmdn.com/icon/359/9114605c56d4e1763af52eb6d7dc3a0e"
            },
            "shareinfo": {
                "title": "如果我明天就会死去",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160522/c5505174d561766c51b500b1e684721a.JPG",
                "text": "我正在收听《如果我明天就会死去》。主播：森然_ 用声音交换世界，我在#片刻·ting#",
                "url": "http://pianke.me/ting/57395ffb723125fa558b4609"
            }
        },
        "content": {
            "type": 17,
            "text": "主播：森然 | 终于没有什么应该不应该，今晚我要在潮湿的礁石上眺望，看月光如何在海面溅出银色细浪。"
        }
    },
    {
        "type": 8,
        "typeName": "生活范",
        "date": "27/May.",
        "pubdate": 1464305400,
        "tingInfo": {},
        "content": {
            "id": "573d36425d7743505d8b4571",
            "userinfo": {
                "uid": 1294425,
                "uname": "足记君",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160322/bdbf4f97e65fff7d202b271d7a4f9118.png?v=1458624354"
            },
            "type": 15,
            "title": "全世界最爱吃的星座",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160524/64abc82e9ce612e66afc83291088d410.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160519/1439cddf728390e7cd01eb679f98e646.gif",
                "http://pkimg.image.alimmdn.com/upload/20160519/9797ee8ccb69cba4893386d2e961854f.gif",
                "http://pkimg.image.alimmdn.com/upload/20160519/8949740bc02e1b44aae8239c4951975a.gif",
                "http://pkimg.image.alimmdn.com/upload/20160519/541bdf901de6e16307211e48f514bf1c.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/d688a09879e519ba736a304da932b509.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/c3c09314a8697b3edd0c72cdd62bd1d1.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/32631e6ed77cf8ed985806d8ff787709.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/455daf3d87bd022a9ff436953e96f26f.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/ed8a389bbef35c67310eb25eedc0695a.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/4978b82c7acd39f61f198220d909fb8e.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/d957820845b179d71866e70477e7214c.png",
                "http://pkimg.image.alimmdn.com/upload/20160519/f0c13e511b5a01bf22b2544a9840aa87.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/46e07d97f1d1844aa813a83cfac56913.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/b599d37202fbd1bddd536f570395d174.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/5ee88ee756a118fadc8a87179d7bcb75.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/af1fde1f3a18c32b54704478d3bd1c45.gif",
                "http://pkimg.image.alimmdn.com/upload/20160519/724fbca50043a8c2192a4a1efc372782.gif",
                "http://pkimg.image.alimmdn.com/upload/20160519/bca377caba76465362c71c91613c1672.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/240f06a7257cc868dba68eaade317f25.png",
                "http://pkimg.image.alimmdn.com/upload/20160519/59c4be047371c1eab4c089f5bb67d373.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/97e072c8576d29e4ce31340cac269c13.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/408136b85d56900418b609d97b75df72.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/c56ab4a430791145becee842ee6e6ac3.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/679a0135d6890cee0c111f92f2583538.png",
                "http://pkimg.image.alimmdn.com/upload/20160519/cb7f266f1dcfabfcf2b7764ed79e8b3b.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160519/9f607f621939a6882896d00346574200.jpeg"
            ],
            "text": "金牛就是世界上最爱吃的星座，不服来看！",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 19,
            "likes": 92,
            "addtime": 1463629378,
            "collInfo": {},
            "shareInfo": {
                "title": "全世界最爱吃的星座",
                "text": "金牛就是世界上最爱吃的星座，不服来看！",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160519/1439cddf728390e7cd01eb679f98e646.gif",
                "url": "http://pianke.me/posts/573d36425d7743505d8b4571"
            }
        }
    },
    {
        "type": 24,
        "typeName": "碎片",
        "date": "27/May.",
        "pubdate": 1464303600,
        "tingInfo": {},
        "content": {
            "id": "5741d52402334d8119e8e6df",
            "userinfo": {
                "uid": 2623888,
                "uname": "道知呤",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160522/6a85fd4d784e826ccba376418ba80bdb.jpg?v=1463932520"
            },
            "type": 2,
            "title": "旧书摊",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160522/d78526e0f04613a1eb4f5fae4904196a.png",
            "images": [],
            "text": "很久以前没有胭脂，女子的脸只为爱人红",
            "tag": "旧书摊",
            "tagCount": 3918,
            "topicUsers": 0,
            "songid": "1776078406",
            "isLike": 0,
            "comments": 19,
            "likes": 304,
            "addtime": 1463932196,
            "collInfo": {},
            "shareInfo": {
                "title": "旧书摊",
                "text": "很久以前没有胭脂，女子的脸只为爱人红",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160522/d78526e0f04613a1eb4f5fae4904196a.png",
                "url": "http://pianke.me/timeline/5741d52402334d8119e8e6df"
            }
        }
    },
    {
        "type": 5,
        "typeName": "唱片馆",
        "date": "27/May.",
        "pubdate": 1464301800,
        "tingInfo": {},
        "content": {
            "id": "574469ab01334d4b76284213",
            "userinfo": {
                "uid": 3665940,
                "uname": "追月逐尘。",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160426/f91e0d0801611ac9d1b0cba27468d453.jpg?v=1461681173"
            },
            "type": 25,
            "title": "开口瞬间惊艳全场",
            "coverimg": "",
            "images": [],
            "text": "这首简直是开口跪的节奏！不同于其他孩童期间的声线，当年才13岁的Greyson跟其他童星相比起来，更加彰显了属于成年人的熟练。他的声音是天籁无误，可却因为有着自己的原则和各种原因，使得他无法红遍全球。身为Grey迷我还是觉得挺可惜的，多么大一颗遗珠啊，想当年他可被说成是Justin Bieber的劲敌呢。6年前因为这首歌彻底饭上了他，直到如今，i'm still in love (*๓´╰╯`๓)",
            "tag": "唱片馆",
            "tagCount": 2185,
            "topicUsers": 0,
            "songid": "1770378267",
            "isLike": 0,
            "comments": 23,
            "likes": 422,
            "addtime": 1464101291,
            "collInfo": {},
            "shareInfo": {
                "title": "开口瞬间惊艳全场",
                "text": "这首简直是开口跪的节奏！不同于其他孩童期间的声线，当年才13岁的Greyson跟其他童星相比起来，更加彰显了属于成年人的熟练。他的声音是天籁无误，可却因为有着自",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/574469ab01334d4b76284213"
            }
        }
    },
    {
        "type": 19,
        "typeName": "片刊",
        "date": "26/May.",
        "pubdate": 1464271200,
        "tingInfo": {},
        "content": {
            "id": "56a5111402334df40c652de4",
            "userinfo": {
                "uid": 1837555,
                "uname": "修行的猫",
                "icon": "http://pkicon.image.alimmdn.com/icon/555/c5b2bb05e5890990774ec9f9fec93f8e"
            },
            "type": 26,
            "title": "身边的故事",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160525/a46f396ad60562fdc003c4342601d80a.JPG",
            "images": [],
            "text": "看完第一篇，你有73%的可能会订阅这本片刊。",
            "tag": "连载",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 2,
            "likes": 0,
            "addtime": 1453658388,
            "collInfo": {
                "id": "56a5111402334df40c652de4",
                "name": "身边的故事",
                "tag": "连载",
                "contains": 23,
                "subscribes": 1323
            },
            "shareInfo": {
                "title": "身边的故事",
                "text": "看完第一篇，你有73%的可能会订阅这本片刊。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150706/daef00c6eef956002002e379187f0467.jpeg",
                "url": "http://pianke.me"
            }
        }
    },
    {
        "type": 2,
        "typeName": "Ting",
        "date": "26/May.",
        "pubdate": 1464268200,
        "tingInfo": {
            "tingid": "5739341d7231255b3a8b45e5",
            "contentid": "5739341d7231255b3a8b45e6",
            "title": "希望你等来的是自己需要的那辆公交车",
            "imgUrl": "http://pkimg.image.alimmdn.com/upload/20160522/237c1c5675ed05b68870efb1bfb20a94.JPG",
            "musicUrl": "http://pianke.file.alimmdn.com/upload/20160516/87ee409e8f357901817c6a187f984db8.MP3",
            "webview_url": "http://pianke.me/webview/5737fba25d7743303b8b458c",
            "isLike": 0,
            "comments": 51,
            "likes": 309,
            "addtime": 1463372635,
            "userinfo": {
                "uid": 296663,
                "uname": "少女绿妖",
                "icon": "http://pkicon.image.alimmdn.com/icon/663/99b04f1f0471622236e4cdc28f433ccd"
            },
            "authorinfo": {
                "uid": 296663,
                "uname": "少女绿妖",
                "icon": "http://pkicon.image.alimmdn.com/icon/663/99b04f1f0471622236e4cdc28f433ccd"
            },
            "shareinfo": {
                "title": "希望你等来的是自己需要的那辆公交车",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160522/237c1c5675ed05b68870efb1bfb20a94.JPG",
                "text": "我正在收听《希望你等来的是自己需要的那辆公交车》。主播：少女绿妖 用声音交换世界，我在#片刻·ting#",
                "url": "http://pianke.me/ting/5739341d7231255b3a8b45e5"
            }
        },
        "content": {
            "type": 17,
            "text": "主播：少女绿妖 | 希望我们都能有这样的好运气，等得到心里的那个人。"
        }
    },
    {
        "type": 3,
        "typeName": "坐谈会",
        "date": "26/May.",
        "pubdate": 1464267600,
        "tingInfo": {},
        "content": {
            "id": "573fd25802334d623be8e6ad",
            "userinfo": {
                "uid": 1416372,
                "uname": "李嬷嬷",
                "icon": "http://pkicon.image.alimmdn.com/icon/372/160801f82cb73db51c63a341578c6f22"
            },
            "type": 24,
            "title": "什么时候你会觉得一个人比两个人好",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160523/efcfe20bf41fa0b1dce0d3af692cdbba.JPEG",
            "images": [],
            "text": "当你不被安慰，不被陪伴，不被理解，不被拥抱的时候谁人曾照顾过我的感受待我温柔吻过我伤口",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 601,
            "songid": "1773956443",
            "isLike": 0,
            "comments": 293,
            "likes": 308,
            "addtime": 1463800408,
            "collInfo": {},
            "shareInfo": {
                "title": "什么时候你会觉得一个人比两个人好",
                "text": "当你不被安慰，不被陪伴，不被理解，不被拥抱的时候谁人曾照顾过我的感受待我温柔吻过我伤口",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/573fd25802334d623be8e6ad"
            }
        }
    },
    {
        "type": 27,
        "typeName": "晚安故事",
        "date": "26/May.",
        "pubdate": 1464264000,
        "tingInfo": {},
        "content": {
            "id": "52ce88c97f8b9a334b000022",
            "userinfo": {
                "uid": 274678,
                "uname": "柳泽",
                "icon": "http://pkicon.image.alimmdn.com/icon/678/274678/d9ccdec402ff7caa3574c094af17dec5_180"
            },
            "type": 1,
            "title": "父亲的面积公式",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160524/404d164275d9210d2b9b648e47dae263.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20140124/1537ba07a1eec6bf8177a20a340f3e4f.jpeg"
            ],
            "text": "人不要懒，不管选择什么，要坚强的走下去，自己去闯。",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 45,
            "likes": 265,
            "addtime": 1389267145,
            "collInfo": {},
            "shareInfo": {
                "title": "父亲的面积公式",
                "text": "人不要懒，不管选择什么，要坚强的走下去，自己去闯。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20140124/1537ba07a1eec6bf8177a20a340f3e4f.jpeg",
                "url": "http://pianke.me/posts/52ce88c97f8b9a334b000022"
            }
        }
    },
    {
        "type": 9,
        "typeName": "良品",
        "date": "26/May.",
        "pubdate": 1464262200,
        "tingInfo": {},
        "content": {
            "id": "572317625d774322448b4579",
            "userinfo": {
                "uid": 102379,
                "uname": "片刻",
                "icon": "http://pkicon.image.alimmdn.com/icon/379/102379/816061898f5d1797ea3c7dcb0fe41083_180"
            },
            "type": 15,
            "title": "你是否还有没放弃过的理想？",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160429/348a8e074f9564ee8e50d8a62cfd1472.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160429/835ed43e49c64e4726467abea808ec45.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160429/7ad614382dbe66d7a0b2c8f9f0322ec3.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160429/4d772da10c2868e12378ed6428bbfe32.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160429/fdea822bc49c4ef7bc42f297f01e41f6.png",
                "http://pkimg.image.alimmdn.com/upload/20160429/94eb25bc0fc8a8f2e335b79aef77191b.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160429/b79c64c7e8627c33c1df61e1458045c0.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160429/65b0d7a350bcbbd7c7eb3f80d9029e02.png"
            ],
            "text": "前些天和几个朋友在后海喝酒，我问了一个问题：你们是否还有至今没放弃过的理想？那天我们在酒吧刷到天亮，喝遍了那里各种奇奇怪怪的啤酒，我已经很久没有这样做了，而我们就是在这个话题开始后，像是撕掉了回忆的封条一样，开始分享彼此的往事。直到后海的岸边出现晨练的老人，我们才离去，在出门的那一刻，我感到一种强烈的孤独感再次席卷而来。我们是从什么时候开始变得孤独的呢？我想大概就是从拥有梦想的那一刻开始的吧。14",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "1770563021",
            "isLike": 0,
            "comments": 46,
            "likes": 520,
            "addtime": 1461917538,
            "collInfo": {},
            "shareInfo": {
                "title": "你是否还有没放弃过的理想？",
                "text": "前些天和几个朋友在后海喝酒，我问了一个问题：你们是否还有至今没放弃过的理想？那天我们在酒吧刷到天亮，喝遍了那里各种奇奇怪怪的啤酒，我已经很久没有这样做了，而我们",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160429/835ed43e49c64e4726467abea808ec45.jpeg",
                "url": "http://pianke.me/posts/572317625d774322448b4579"
            }
        }
    },
    {
        "type": 12,
        "typeName": "片刻Talk",
        "date": "26/May.",
        "pubdate": 1464258600,
        "tingInfo": {},
        "content": {
            "id": "5746c3025d7743b63d8b457f",
            "userinfo": {
                "uid": 102379,
                "uname": "片刻",
                "icon": "http://pkicon.image.alimmdn.com/icon/379/102379/816061898f5d1797ea3c7dcb0fe41083_180"
            },
            "type": 15,
            "title": "海棠访谈：女孩就是女孩，没有好与坏",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160526/811001f4b5698a89774f5d991499a6a9.JPG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20160527/b1526c1474b3211b1b48b532516a0969.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/66108851ba1965c86844ef60774d1136.jpeg",
                "http://pkimg.image.alimmdn.com/upload/20160526/9dc975e58ef40687335903817c3c5759.jpeg"
            ],
            "text": "成功至少有80%的运气成分，你赞同吗？",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 7,
            "likes": 175,
            "addtime": 1464255234,
            "collInfo": {},
            "shareInfo": {
                "title": "海棠访谈：女孩就是女孩，没有好与坏",
                "text": "成功至少有80%的运气成分，你赞同吗？",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160527/b1526c1474b3211b1b48b532516a0969.jpeg",
                "url": "http://pianke.me/posts/5746c3025d7743b63d8b457f"
            }
        }
    },
    {
        "type": 29,
        "typeName": "诗",
        "date": "26/May.",
        "pubdate": 1464256800,
        "tingInfo": {},
        "content": {
            "id": "572a2e6201334d673628418b",
            "userinfo": {
                "uid": 1771252,
                "uname": "疯狂的白菜君",
                "icon": "http://pkicon.image.alimmdn.com/icon/252/543f864f6b7f8bd08874589dc0dd7748"
            },
            "type": 1,
            "title": "夏日于母亲",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160524/32dba246bc456f3d01ce656f7d5109f3.JPG",
            "images": [],
            "text": "我听到，阳光碎裂的嘶鸣/ 那破碎的阳光一定很疼吧/ 因为溅入眼帘的光斑/ 都变成了滚烫的泪/",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "1772130323",
            "isLike": 0,
            "comments": 25,
            "likes": 212,
            "addtime": 1462382178,
            "collInfo": {},
            "shareInfo": {
                "title": "夏日于母亲",
                "text": "我听到，阳光碎裂的嘶鸣/ 那破碎的阳光一定很疼吧/ 因为溅入眼帘的光斑/ 都变成了滚烫的泪/",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/572a2e6201334d673628418b"
            }
        }
    },
    {
        "type": 24,
        "typeName": "碎片",
        "date": "26/May.",
        "pubdate": 1464253200,
        "tingInfo": {},
        "content": {
            "id": "573fc1db02334d4a16e8e6e7",
            "userinfo": {
                "uid": 1372732,
                "uname": "南纬35东经19",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160518/0929f39488b272fcb8ce03668179ddd7.jpg?v=1463535191"
            },
            "type": 2,
            "title": "暖小团",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160521/2f2e1cce98b8c0741b393745ed999f68.png",
            "images": [],
            "text": "不管你用什么方式活着，我们只有一个目的，别违心，以及别后悔，还有，去他的人言可畏。",
            "tag": "暖小团",
            "tagCount": 1,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 39,
            "likes": 759,
            "addtime": 1463796187,
            "collInfo": {},
            "shareInfo": {
                "title": "暖小团",
                "text": "不管你用什么方式活着，我们只有一个目的，别违心，以及别后悔，还有，去他的人言可畏。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160521/2f2e1cce98b8c0741b393745ed999f68.png",
                "url": "http://pianke.me/timeline/573fc1db02334d4a16e8e6e7"
            }
        }
    },
    {
        "type": 19,
        "typeName": "片刊",
        "date": "26/May.",
        "pubdate": 1464251400,
        "tingInfo": {},
        "content": {
            "id": "57397fc501334dae392841d8",
            "userinfo": {
                "uid": 112264,
                "uname": "树上有云",
                "icon": "http://tp2.sinaimg.cn/1863160221/180/5640534745/0"
            },
            "type": 26,
            "title": "送你一分钟",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160518/f32dd93aba5765b7e8a546b1a6f4479d.JPG",
            "images": [],
            "text": "一分钟的故事，十分钟的温暖。",
            "tag": "TING",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 6,
            "likes": 0,
            "addtime": 1463386053,
            "collInfo": {
                "id": "57397fc501334dae392841d8",
                "name": "送你一分钟",
                "tag": "TING",
                "contains": 20,
                "subscribes": 511
            },
            "shareInfo": {
                "title": "送你一分钟",
                "text": "一分钟的故事，十分钟的温暖。",
                "pic": "http://pkimg.image.alimmdn.com/upload/20160516/57397fc501334dae392841d8.png?v=1463386470",
                "url": "http://pianke.me"
            }
        }
    },
    {
        "type": 5,
        "typeName": "唱片馆",
        "date": "26/May.",
        "pubdate": 1464249600,
        "tingInfo": {},
        "content": {
            "id": "573e734302334d4931e8e78d",
            "userinfo": {
                "uid": 3324090,
                "uname": "Alison张失意",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160520/2700508b8c4a8fa735f2769916e0b1af.jpg?v=1463710805"
            },
            "type": 25,
            "title": "我真的渴望拥有一次真爱",
            "coverimg": "",
            "images": [],
            "text": "正如在《挪威的森林》中绿子对渡边君说:“我真希望拥有真爱，哪怕一回都好”“你想要什么样的真爱呢？”“比方说吧，我跟你说我想吃草莓蛋糕，你就立刻丢下一切，跑去给我买，接着气喘吁吁地把蛋糕递给我，然后我说‘我现在不想要了’，于是你二话不说就把蛋糕丢出窗外，这，就是我说的真爱。”“我觉得这跟真爱一点关系都没有嘛”“有啊，我希望对方答道‘知道了，都是我的错，我真是头没脑子的蠢驴，我再去给你买别的，你想要什",
            "tag": "寂寞在唱歌",
            "tagCount": 182,
            "topicUsers": 0,
            "songid": "1770778379",
            "isLike": 0,
            "comments": 27,
            "likes": 680,
            "addtime": 1463710531,
            "collInfo": {},
            "shareInfo": {
                "title": "我真的渴望拥有一次真爱",
                "text": "正如在《挪威的森林》中绿子对渡边君说:“我真希望拥有真爱，哪怕一回都好”“你想要什么样的真爱呢？”“比方说吧，我跟你说我想吃草莓蛋糕，你就立刻丢下一切，跑去给我",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/573e734302334d4931e8e78d"
            }
        }
    },
    {
        "type": 10,
        "typeName": "破万卷",
        "date": "26/May.",
        "pubdate": 1464247800,
        "tingInfo": {},
        "content": {
            "id": "573c05415d7743db148b4576",
            "userinfo": {
                "uid": 3697070,
                "uname": "乔安妮1460949058",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160526/744b32237e8391c94d0280dfd490a5a6.png?v=1464269275"
            },
            "type": 15,
            "title": "职场人应该怎么读书？",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160518/8f3b573eea3a50ef2acf7d25151d7eb0.JPG",
            "images": [],
            "text": "读书本身是没有价值的，记忆知识本身也是没有价值的，那怎样才能把它变得有价值呢？",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "",
            "isLike": 0,
            "comments": 5,
            "likes": 127,
            "addtime": 1463551297,
            "collInfo": {},
            "shareInfo": {
                "title": "职场人应该怎么读书？",
                "text": "读书本身是没有价值的，记忆知识本身也是没有价值的，那怎样才能把它变得有价值呢？",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/573c05415d7743db148b4576"
            }
        }
    },
    {
        "type": 9,
        "typeName": "良品",
        "date": "26/May.",
        "pubdate": 1464246000,
        "tingInfo": {},
        "content": {
            "id": "5603c7e55d7743a62d8b4650",
            "userinfo": {
                "uid": 102379,
                "uname": "片刻",
                "icon": "http://pkicon.image.alimmdn.com/icon/379/102379/816061898f5d1797ea3c7dcb0fe41083_180"
            },
            "type": 15,
            "title": "因放弃而解脱，人生也有这样的时刻",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160406/c508802c6fbf2082700707ce12105bc1.PNG",
            "images": [
                "http://pkimg.image.alimmdn.com/upload/20150924/0f8d5b027a4b42bc7aa81a675b3088af.jpeg"
            ],
            "text": "有些事不太值得坚持。大概在六七年前，具体的时间我记得不是很清楚了，我的一个发小坐了二十几个小时的火车在北京站下车，我去接他，车刚进站，我就在站台看见了他随人群排队而出的身影，又瘦又小，却很显眼。因为他的行李出奇的多。除了旅行箱和半人高的背包，他还提着一个巨大的电吉他箱，里面的那把琴我蛮熟的，日产IBANEZ RG350，INF拾音器，他自己辛苦打工买的，上面贴满了造型夸张的贴纸，视若珍宝。他把行李",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "1772563076",
            "isLike": 0,
            "comments": 111,
            "likes": 1056,
            "addtime": 1443088357,
            "collInfo": {},
            "shareInfo": {
                "title": "因放弃而解脱，人生也有这样的时刻",
                "text": "有些事不太值得坚持。大概在六七年前，具体的时间我记得不是很清楚了，我的一个发小坐了二十几个小时的火车在北京站下车，我去接他，车刚进站，我就在站台看见了他随人群排",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150924/0f8d5b027a4b42bc7aa81a675b3088af.jpeg",
                "url": "http://pianke.me/posts/5603c7e55d7743a62d8b4650"
            }
        }
    },
    {
        "type": 5,
        "typeName": "唱片馆",
        "date": "26/May.",
        "pubdate": 1464238800,
        "tingInfo": {},
        "content": {
            "id": "573ee32d02334de105e8e6b3",
            "userinfo": {
                "uid": 3464809,
                "uname": "庸人说say",
                "icon": "http://pkicon.image.alimmdn.com/icon/20160522/0a9b6248bbe84ec0b73dfcd19817cd8a.jpg?v=1463898943"
            },
            "type": 25,
            "title": "时光无言，如此这般",
            "coverimg": "",
            "images": [],
            "text": "像是早春里的一个故事，轻吟浅唱，人生太短，故事太长，你不要回眸。“小舟从此逝，江海寄余生”念你余生，岁月静好。——遇上你，就当做是我年少初遇的惊鸿一瞥。Let s try to remember these days back in December.Our lives were very differentI was lonely when we first met.A small upstai",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 0,
            "songid": "1297080",
            "isLike": 0,
            "comments": 18,
            "likes": 622,
            "addtime": 1463739181,
            "collInfo": {},
            "shareInfo": {
                "title": "时光无言，如此这般",
                "text": "像是早春里的一个故事，轻吟浅唱，人生太短，故事太长，你不要回眸。“小舟从此逝，江海寄余生”念你余生，岁月静好。——遇上你，就当做是我年少初遇的惊鸿一瞥。Let",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/573ee32d02334de105e8e6b3"
            }
        }
    },
    {
        "type": 3,
        "typeName": "坐谈会",
        "date": "26/May.",
        "pubdate": 1464235200,
        "tingInfo": {},
        "content": {
            "id": "5731e76002334d0a14e8e6dc",
            "userinfo": {
                "uid": 3686988,
                "uname": "解忧少年",
                "icon": "http://tp3.sinaimg.cn/3229024242/180/5754099794/1"
            },
            "type": 24,
            "title": "歌荒 | 爆一下手机里三年中从未删过的歌",
            "coverimg": "http://pkimg.image.alimmdn.com/upload/20160523/321a74616cef3d8f0d1ebb7fc19d372c.JPEG",
            "images": [],
            "text": "壮士请留步！说几首你歌单里三年（起码也要一年）未删的歌曲！最近严重歌荒！还请救我于水火！",
            "tag": "",
            "tagCount": 0,
            "topicUsers": 1610,
            "songid": "",
            "isLike": 0,
            "comments": 1096,
            "likes": 514,
            "addtime": 1462888288,
            "collInfo": {},
            "shareInfo": {
                "title": "歌荒 | 爆一下手机里三年中从未删过的歌",
                "text": "壮士请留步！说几首你歌单里三年（起码也要一年）未删的歌曲！最近严重歌荒！还请救我于水火！",
                "pic": "http://pkimg.image.alimmdn.com/upload/20150818/d5bdde654d8c9317af0f253abc9f3bef.JPG",
                "url": "http://pianke.me/posts/5731e76002334d0a14e8e6dc"
            }
        }
    }
]


