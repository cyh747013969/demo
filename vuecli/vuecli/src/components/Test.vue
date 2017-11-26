<template>
    <div class="test">
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '欢迎来到新世界'
    }
  },
}
</script>
<style escoped>
    h1{
        background-color:'red';
    }
</style>