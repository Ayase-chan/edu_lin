<template>
  <div class="footer">
    <ul>
      <li v-for="item in bot_nav_list" :href="item.link">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      bot_nav_list: []
    }
  },
  methods: {
    get_top() {
      this.$axios.get(this.$settings.HOST + "home/navigator_bot/").then(response => {
        this.bot_nav_list = response.data;
      })
    }
  },
  created() {
    this.get_top();
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 128px;
  background: #25292e;
  color: #fff;
}

.footer ul {
  margin: 0 auto 16px;
  padding-top: 38px;
  width: 810px;
}

.footer ul li {
  float: left;
  width: 112px;
  margin: 0 10px;
  text-align: center;
  font-size: 14px;
}

.footer ul::after {
  content: "";
  display: block;
  clear: both;
}

.footer p {
  text-align: center;
  font-size: 12px;
}
</style>
