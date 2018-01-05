<template>
    <v-touch class="detail" :style="styleObj" @swipeleft="swipeleft()" @swiperight="swiperight()" @tap="tap()"></v-touch>
</template>
<script>
export default {
    data(){
        return{
            nowIndex:0,
        };
    },
    computed:{
        styleObj(){
            return{
                background:`#000 url(${this.$store.state.photoList[this.nowIndex].src}) no-repeat center/contain`,
            }
            }
    },
    mounted(){
        this.nowIndex=this.$route.params.index;
    },
    methods:{
        swipeleft(){
            console.log('left');
            this.nowIndex++;
            // if(this.nowIndex=this.$store.state.photoList){
            //     alert("这是最后一张图片");
            // }
            
        },
        swiperight(){
            console.log(this.nowIndex);
            this.nowIndex--;
            // if(this.nowIndex==-1){
            //     alert("这是第一张图片");
            // }
            
        },
        tap(){
           this.$router.go(-1); 
        }

    }
}
</script>
<style scoped>
.detail{
    margin: 1rem 0;
    position:absolute;
    top:0;
    left:0;
    bottom: 0;
    right: 0;
} 
</style>


