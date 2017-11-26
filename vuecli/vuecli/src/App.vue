<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>{{msg}}</h1>
    <button @click="back()">后退</button>
    <button @click="forward()">前进</button>
    <button @click="home()">主页</button><br/>
    <router-link to='/'>首页</router-link>
    <router-link to='/test'>测试</router-link>
    <router-link :to="{name:'test1',params:{name:'先生',age:18}}">子路由1</router-link>
    <router-link to='/test/test2'>子路由2</router-link>
    <router-link to='/testurl/2015214277/caoxiansheng'>测试URL</router-link>
    <router-link to='/home'>不带参数的重定向</router-link>
    <router-link to='/home2/233333/yanxiaojie'>带参数的重定向</router-link>
    <router-link to='/abc'>alias</router-link>
    <router-link to='/store'>计数器</router-link>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg :'WECLOME TO THE NEW WORLD'
      }
  },
  methods:{
    back(){
      this.$router.go(-1);
    },
    forward(){
      this.$router.go(1);
    },
    home(){
      this.$router.push('/');
    },
  },

}
</script>

<style>
  *{
    text-decoration:none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fade-enter{
    opacity:0;
  }
  .fade-leave{
    opacity:1;
  }
  .fade-enter-active{
    transition: opacity 0.7s;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity 0.7s;
  }
</style>
