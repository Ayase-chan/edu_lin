<template>
  <div id="app">
    <h3>这是主页</h3>
<!--    <router-link to="/home">访问home组件</router-link>-->
    <router-link to="/user">访问user组件</router-link>
    <router-link to="/message">访问Message组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
</style>
