// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"


import axios from "axios"
Vue.prototype.$axios = axios

// 全局样式
import "../static/css/global.css"
import "../static/js/gt"

import settings from './settings';
Vue.prototype.$settings = settings;

Vue.config.productionTip = false
Vue.use(ElementUI)


require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
import VideoPlayer from 'vue-video-player'

Vue.use(VideoPlayer);

Vue.config.productionTip = false

import store from "./store/index";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
