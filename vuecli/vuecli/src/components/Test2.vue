<template>
  <div>
      <h3>{{msg}}</h3>
  </div>
</template>
<script>
    export default{
        name:'Test2',
        data () {
            return{
                msg:'这是子路由2'
            }
        }
    }
</script>
<style escoped>
    h3{
        font-weight:lighter;
    }
</style>
