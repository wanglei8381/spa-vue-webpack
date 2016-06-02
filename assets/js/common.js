//设置一个全局变量
var serverUrl = '/version4.0/';
var R = {
    ajax: function (options) {
        var d = new Date();
        var timestamp = d.getFullYear() + '' + dateForm(d.getMonth() + 1) + dateForm(d.getDate()) + '' + dateForm(d.getHours()) + '' + dateForm(d.getMinutes()) + '' + dateForm(d.getSeconds());
        var Authorization = $.base64.encode('0:' + timestamp);
        var sign = $.md5('0' + timestamp).toUpperCase();
        var headers = {
            'Authorization': Authorization
        }
        options.type = options.type || 'post';
        options.dataType = options.dataType || 'json';
        options.headers = headers;
        options.url = serverUrl + options.url + "?sig=" + sign;
        console.log(options.url);
        console.log();
        var success = options.success;
        options.success = function (req) {
            try {
                if (req.code > 0) {
                    console.log('出错')
                } else {
                    success(req.data);
                }
            } catch (e) {
                console.log('数据解析出错');
            }
        };
        options.error = function () {
            console.log('网络错误');
        };
        $.ajax(options);
    }
}

function dateForm(date) {
    if (date < 10) {
        return '0' + date;
    }else{
        return date;
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
    var lineH = dom.css("line-height");
    var lineHeight = parseInt(lineH);
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


