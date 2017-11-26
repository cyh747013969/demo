<template>
    <div>
        <h3>计数器:{{$store.state.count}}</h3>
        <h3>{{count}}</h3>
        <button @click="$store.commit('add')">加1</button>
        <button @click="$store.commit('reduce')">减1</button>
        <button @click='reduce'>减1</button>
        <p>
            <button @click="addAction">+</button>
            <button @click="reduceAction">-</button>
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapActions} from 'vuex';
export default {
    data(){
        return{};
    },
    store,
//   computed:{
//       count(){
//           return this.$store.state.count;
//       }
//   }
//利用这种插值的方式，可以简化调用方法，但是其本质是和原方法没有区别的
    // computed:mapState({
    //     count:state=>state.count
    // }),
    //mapStore是提供了一个取插值的方法
    computed:{
        ...mapState(['count']),
        // ...mapGetters(['count'])
        },
    methods:{
        ...mapMutations(["add","reduce"]),
    //这个方法是通过mapMutations引用了store中事先定义好的方法
        ...mapActions(["addAction","reduceAction"])
    }
}
</script>
<style scoped>
    h3{
        font-weight:lighter;
    }
</style>
