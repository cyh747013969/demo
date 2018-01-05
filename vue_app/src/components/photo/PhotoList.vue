<template>
    <ul>
        <li v-for="(photo,index) in photoList" :key="index">
            <router-link :to="'/photo/photodetail/'+index">
                <img :src="photo.src" alt="">
            </router-link>
        </li>
    </ul>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            photoList:[],
        };
    },
    mounted(){
        Axios.get("/static/data/photodata.json")
        .then((res)=>{
            this.photoList=res.data.photoData;
            this.$store.dispatch('setPhotoList',res.data.photoData);
            //存入vuex
        }).catch((err)=>{
            console.log("请求失败");
        }
        );
    }
}
</script>
<style scoped>
    li{
        float: left;
        width:50%;
        margin-bottom:0.1rem;
    }
    img{
        width: 100%;
    }
    ul{
        margin: 1rem 0;
    }
    ul::after{
        content:"";
        display: block;
        clear:both;
    }
</style>
