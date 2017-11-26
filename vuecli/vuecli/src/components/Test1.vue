<template>
    <div>
        <h3>{{msg}}</h3>
        <h3>姓名：{{$route.params.name}}，年纪：{{$route.params.age}}</h3>
    </div>
</template>
<script>
   export default{
       name :'Test1',
       data(){
           return{
               msg:'这是子路由1'
           }
       }
   } 
</script>
<style escoped>
    h3{
        font-weight: lighter;
    }
</style>
