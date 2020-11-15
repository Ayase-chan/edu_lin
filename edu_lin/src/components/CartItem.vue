<template>
    <div class="cart_item">
        <div class="cart_column column_1">
            <el-checkbox class="my_el_checkbox" v-model="course.selected" @click="change_selected"></el-checkbox>
        </div>
        <div class="cart_column column_2">
            <img :src="course.course_img" alt="">
            <span><router-link to="/course/detail/1">{{ course.name }}</router-link></span>
        </div>
        <div class="cart_column column_3">
        <el-select v-model="course.expire_id" size="mini" placeholder="请选择购买有效期" class="my_el_select">
          <el-option :label="item.expire_text" :value="item.id" :key="item.id" v-for="item in course.expire_list">
            {{ item.price }}</el-option>
        </el-select>
      </div>
        <div class="cart_column column_4" v-if="course.expire_id">¥{{ real_expire_price }}</div><div class="cart_column column_4" v-else>¥{{ course.real_price }}</div>
        <div class="cart_column column_4"> <span @click="del_item">删除</span> </div>
    </div>
</template>


<script>
export default {
    name: "CartItem",
    data() {
        return {
            expire: 0,
            real_expire_price: 0,
        }
    },
    props: ['course'],
    methods: {
        // 发起请求  在后台修改商品的选中状态
        // 课程id， 选中状态
        change_selected(){
          let token = this.check_user_login();
          this.$axios({
            url: this.$settings.HOST + 'cart/option/',
            method: 'put',
            data: {
              course_id: this.$props.course.id
            },
            headers:{
              "Authorization": "jwt " + token
            }
          }).then(res=>{
            this.$emit("change_select")
          })
        },
        check_user_login() {
        let token = localStorage.token || sessionStorage.token;
        if (!token) {
          let self = this;
          this.$confirm("对不起,请登录后再添加购物车", {
            callback() {
              self.$router.push("/login");
            }
          });
          return false
        }
        return token;
      },

        del_item(){
          let token = this.check_user_login();
          this.$axios({
            url: this.$settings.HOST + 'cart/option/',
            method: 'delete',
            data: {
              course_id: this.$props.course.id
            },
            headers:{
              "Authorization": "jwt " + token
            }
          }).then(res=>{
            this.$emit("delete_course")
            this.$parent.get_cart()
          })

        },

      // 发起修改有效期的请求
        change_expire(){
          let token = this.check_user_login();
          this.$axios({
            url: this.$settings.HOST + 'cart/option/',
            method: 'patch',
            data:{
              expire_id:this.$props.course.expire_id,
              course_id:this.$props.course.id,
            },
            headers:{
              "Authorization": "jwt " + token
            }
          }).then(res=>{
            this.real_expire_price = res.data.real_expire_price
            this.$props.course.real_expire_price = res.data.real_expire_price
            console.log(res);
            this.$emit("change_exp")
          })
        },
    },
    watch: {
        "course.selected": function () {
            this.change_selected();
        },
      "course.expire_id": function () {
        this.change_expire();
      },
    },
    created() {
      this.change_expire()
    }
}
</script>

<style scoped>
.cart_item::after {
    content: "";
    display: block;
    clear: both;
}

.cart_column {
    float: left;
    height: 250px;
}

.cart_item .column_1 {
    width: 88px;
    position: relative;
}

.my_el_checkbox {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    width: 16px;
    height: 16px;
}

.cart_item .column_2 {
    padding: 67px 10px;
    width: 520px;
    height: 116px;
}

.cart_item .column_2 img {
    width: 175px;
    height: 115px;
    margin-right: 35px;
    vertical-align: middle;
}

.cart_item .column_3 {
    width: 197px;
    position: relative;
    padding-left: 10px;
}

.my_el_select {
    width: 117px;
    height: 28px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}

.cart_item .column_4 {
    padding: 67px 10px;
    height: 116px;
    width: 142px;
    line-height: 116px;
}

</style>

