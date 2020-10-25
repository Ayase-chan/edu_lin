<template>
<!--  这个标签下只能有一个根标签，不能有兄弟标签-->
  <div>
    <p>第二个组件</p>
    <h3>{{name}}</h3>
  </div>

</template>

<script>
export default {
  name: "Second",
  data:function (){
    return{
      name:'lin',
    }
  }
}
</script>

<style scoped>

</style>
