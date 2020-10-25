<template>
  <div>
    这是User组件
    <hr>
    <table border="1" cellspacing="0" title="用户信息表" v-if="users.length">
      <tr>
        <td>ID</td>
        <td>姓名</td>
        <td>生日</td>
        <td>个人信息</td>
        <td>操作</td>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.bir }}</td>
        <td>{{ user.content }}</td>
        <td><a href="javascript:;" @click="del(user.id)">删除</a> |
          <router-link :to="`/detail/${user.id}`">详情</router-link>
        </td>
      </tr>

    </table>

    <hr>
    添加用户：<br>
    <table>
      <tr>
        <td>用户名：</td>
        <td><input type="text" v-model="name"></td>
      </tr>
    </table>
    <tr>
      <td>生 日：</td>
      <td><input type="text" v-model="bir"></td>
    </tr>
    <tr>
      <td>详 情：</td>
      <td><input type="text" v-model="content"></td>
    </tr>
    <button @click="add">添加用户</button>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      users: localStorage['data'] ? JSON.parse(localStorage['data']) : [],
      name: "",
      bir: "",
      content: "",
    }
  },
  methods: {
    add() {
      let b = 0
      if(this.name && this.bir && this.content){
        // let b = this.users.length + 1
        for (let i=0;i<this.users.length;i++){
          b = b > this.users[i].id ? b :this.users[i].id

        }
        let a = {id: b+1, name: this.name, bir: this.bir, content: this.content}
        this.users.push(a)
        let c = JSON.stringify(this.users)
        localStorage.setItem('data', c)
      }
      else {
        alert("输入有误")
      }
    },
    del(a){
      // console.log(a)
      for (let i=0;i<this.users.length;i++){
        // console.log(this.users[i])
        if (this.users[i].id === a){
          let b = this.users.indexOf(this.users[i])
          console.log(typeof b);
          this.users.splice(b,1)
          let c = JSON.stringify(this.users)
          localStorage.setItem('data', c)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
