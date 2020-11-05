<template>
  <div id="app">
    <h3>根组件</h3>
    <router-view></router-view>
    <button @click="fun">点击发请求</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    fun(){
      this.$axios({
        url: 'http://127.0.0.1:8000/',
        method: 'get',
      }).then(response=> {
        console.log(response);
      }).catch(error=>{
        console.log(error);
      })
      // this.$axios.get('http://127.0.0.1:8000/').then(response=>{
      //   console.log(response);})
    }
  }
}
</script>

<style>

</style>
