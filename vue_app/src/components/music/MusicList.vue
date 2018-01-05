<template>
<ul>
    <li v-for="music in musiclist" :key="music.id">
        <router-link :to="'/music/musicAlbums/' + music.id">
            <img :src="music.bg" alt="#">
        </router-link>
    </li>
</ul> 
</template>
<script>
import Axios from 'axios';
export default {
    data(){
        return{
            //必须事先做好声明一个数组，将请求的结果返回到数组里面
            musiclist:[]
        }
    }, 
    mounted(){
        Axios.get("/static/data/musiclist.json").then(res=>{
            console.log(res);
            this.musiclist=res.data.albums;
        }).catch(
            console.log("请求失败")
        )
        // console.log(this.musiclist)
    }
}
</script>
<style scoped>
    ul{
        float:left;
        margin:1rem 0;
    }
    li{
        float:left;
        width:50%;
    }
    img{
        width:100%;
    }
</style>