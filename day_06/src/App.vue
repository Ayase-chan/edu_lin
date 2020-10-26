<template>
  <div id="app">
    <h3>用户主页</h3>
    <hr>
    <router-link to="/first"></router-link>
    <router-link to="/second"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import First from "./components/First";
import Second from "./components/Second";

export default {
  name: 'App',
  components:{
    First: First,
    Second: Second
  }
}
</script>

<style>

</style>
