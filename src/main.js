var Vue = require('vue');
var VueRouter = require('vue-router');
// 安装路由模块
Vue.use(VueRouter);


// 创建一个路由器实例
var router = new VueRouter({
});
window.pagedata= false;
router.map({
    '/topic/:id': {
        name: 'topic',
        component: function (resolve) {
            require(['./views/topic'], resolve);
        }
    },
    '/music/:id': {
        name: 'music',
        component: function (resolve) {
            require(['./views/music'], resolve);
        }
    },
    '/article/:id': {
        name: 'article',
        component: function (resolve) {
            require(['./views/article'], resolve);
        }
    },
    '/radio/:id': {
        name: 'radio',
        component: function (resolve) {
            require(['./views/radio'], resolve);
        }
    },
    '/timeline/:id': {
        name: 'timeline',
        component: function (resolve) {
            require(['./views/timeline'], resolve);
        }
    }
});

//全局组件
Vue.component('comment-cpt', require('./components/comment.vue'));
Vue.component('share-cpt', require('./components/share.vue'));

// 路由器需要一个根组件。
var App = Vue.extend({
    data: function() {
        return {title: '微信分享'};
    }
});

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, 'html');


