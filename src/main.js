var Vue = require('vue');
var VueRouter = require('vue-router');
require('../assets/js/common.js');

// 安装路由模块
Vue.use(VueRouter);

// 创建一个路由器实例
var router = new VueRouter({
    basePath: '/assets/img'
});

router.map({
    '/topic': {
        component: function (resolve) {
            require(['./views/topic'], resolve);
        }
    },
    '/note': {
        component: function (resolve) {
            require(['./views/note'], resolve);
        }
    },
    '/article': {
        component: function (resolve) {
            require(['./views/article'], resolve);
        }
    }
});

// 路由器需要一个根组件。
var App = Vue.extend({
    data: function(){
        return {title: '首頁'};
    }
});

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, 'html');