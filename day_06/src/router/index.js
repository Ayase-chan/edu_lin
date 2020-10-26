import Vue from 'vue'
import Router from 'vue-router'
import Second from "../components/Second";
import First from "../components/First";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/first',
      name: 'first',
      component:First
    },
    {
      path: '/second',
      name: 'second',
      component:Second
    },
  ]
})
