<template>
  <div>
     <h3>uesrId：{{$route.params.userId}}</h3>
     <h3>姓名：{{$route.params.userName}}</h3> 
  </div>
</template>
<script>
    export default{
        name:'testurl'
    }
</script>
<style escoped>
    h3{
        font-weight:lighter;
    }
</style>
