<template>
    <div class="albums">
        <a-player :autoplay="false"  :music="songs" v-if="isShow" :showlrc="3">
        </a-player>
    </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'
import Axios from 'axios'
export default {
    data(){
       return{
           songs:[],
           isShow:false
       } 
    },
    components:{
        'a-player':VueAplayer
    },
    mounted(){
        Axios.get("/static/data/musicdata.json").then((res)=>{
            let list=res.data.musicData;
            list.forEach((element)=>{
                let obj={
                    title:element.title,
                    author:element.author,
                    url:element.src,
                    pic:element.musicImgSrc,
                    lrc:'/static/'+element.lrc
                };
                this.songs.push(obj);
                console.log(this.songs);
            });
            
            this.isShow=true;
        }).catch()
    }

}
</script>
<style scoped>
    .albums{
        margin:1rem 0;
    }
</style>
