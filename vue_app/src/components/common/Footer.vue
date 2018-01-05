<template>
    <div>
        <ul class="foot" :style="{'background-color':bg}">
            <li><router-link to="/movie/movielist">电影</router-link></li>
            <li><router-link to="/music/musiclist">音乐</router-link></li>
            <li><router-link to="/book/booklist">书籍</router-link></li>
            <li><router-link to="/photo/photolist">图片</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['bg']
}
</script>
<style scoped>
    .foot{
        height: 1rem;
        width:100%;
        background-color: #40C381;
        position: fixed;
        bottom:0;
        display:flex;
    }
    .foot li{
        flex-grow: 1;
        text-align: center;
        line-height: 1rem;
        cursor:pointer;
    }
    .foot a{
        color:#ccc;
    }
    .foot .router-link-active{
        color:#fff;
    }
</style>