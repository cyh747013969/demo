<template>
    <div>
        <ul>
            <li @click="goDetail(movie.id)" v-for="movie in movielist" :key="movie.id">
                <div class="left">
                    <img :src="movie.img" alt="">
                </div>
                <div class="right">
                    <h4>{{movie.nm}}</h4>
                    <span>导演：{{movie.dir}}</span>
                    <span>主演：{{movie.star}}</span>
                    <span>上映日期：{{movie.rt}}</span>
                </div>
                
            </li>
        </ul>
        <div class="loading">
            <img src="../../assets/img/loading.gif" alt="loading" v-show="loadingShow">
        </div>
    </div>
</template>
<script>
import Axios from 'axios'

export default {
    data(){
        return {
            movielist:[],
            loadingShow:true
        };
    },
    mounted(){
        // 使用axios向端口发送请求
        let url1=API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&limit=20&offset="+this.movielist.length;
        let url2='/static/data/MovieList.json';
        Axios.get(url1).then((res)=>{
        console.log(res);
        this.loadingShow=true;
        this.movielist=res.data.data.movies;
        }).catch(()=>{
            console.log('数据获取失败')
        }) 
        },
        
    // methods:{
    //      loadData() {
    //   // url1表示猫眼电影的远程服务接口
    //   let url1 =
    //     API_PROXY +
    //     "http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset=" +
    //     this.moveList.length;
    //   // url2表示本地的电影数据json文件
    //   let url2 = "/static/MovieList.json";
    //   Axios.get(url2)
    //     .then(res => {
    //       this.loadingShow = false;
    //       let list = res.data.data.movies;
    //       let data = list.slice(
    //         this.moveList.length,
    //         this.moveList.length + 10
    //       );
    //       if (data.length < 10) {
    //         this.tip = true;
    //       }
    //       this.moveList = this.moveList.concat(data);
    //     })
    //     .catch(() => {
    //       alert("获取数据失败");
    //     });
    //     }
    // },

    methods:{
        goDetail(movieId){
            // console.log(movieId); 
            //  let url1=API_PROXY+"http://m.maoyan.com/movie/"+movieId+".json";
            //  Axios.get(url1).then((res1)=>{
            //      console.log(res1);
            //      }
            //  ).catch();
             this.$router.push('/movie/movieDetail/'+ movieId);      
            }
    }
}
</script>
<style scoped>
    ul{
        margin:1rem 0 0.5rem 0;
    }
    li{
        display: flex;
        font-weight:lighter;
        border-top:0.02rem solid #ccc;
        padding:0.3rem;
    }
    .img{
        width:100%;
    }
    .left{
        flex-grow: 1;
        /* margin:0.3rem; */
        width:0;
    }
    .right{
        flex-grow:2;
        width:0;
        margin-left:0.3rem;
    }
    span{
        display:block;
    }
    .loading{
        text-align: center;
    }
</style>