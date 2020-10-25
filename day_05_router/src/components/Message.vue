<template>
  <div>
    <input type="text" v-model="msg" placeholder="请输入留言" @change="add">
    <input type="button" value="发表" @click="add">
    <ul>
      <li v-for="(i, index) in list" :key="index">{{ i }} <a href="javascript:;" @click="del(index)">删除</a></li>
    </ul>
    <p>留言数量：{{ list.length }}</p>
    <button v-if="list.length" @click="del_all">删除所有</button>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return{
      msg:'',
      list:localStorage['pad'] ? JSON.parse(localStorage['pad']) : [],
      del_all_show:true,
    }
  },
  methods: {
    add() {
      let flag = this.msg
      if (flag){
        this.list.unshift(this.msg)
        let m_pad = JSON.stringify(this.list)
        localStorage.setItem('pad', m_pad)
        this.msg = ''
      }
    },
    del(index) {
      this.list.splice(index, 1)
      localStorage.setItem('pad', JSON.stringify(this.list))

    },
    del_all() {
      this.list = [];
      localStorage.clear()
    }
  },
}
</script>

<style scoped>

</style>
