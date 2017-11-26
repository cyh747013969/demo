<template>
    <div class="head" :style="{'background-color':bg}">
        <button class="button" :style="{'background-color':bg}">首页</button>
        <h3 class="home"><slot name="title">默认值</slot></h3>
    </div>
</template>
<script>
export default {
    props:['bg']
}
</script>
<style scoped>
    .head{
        height: 1rem;
        width:100%;
        background-color: #40C381;
        position: fixed;
        top:0;   
    }
    .button{
        border:none;
        background-color:#40C381;
        line-height:1rem;
        color:#fff;
    }
    .home{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:#fff;
    }
</style>
