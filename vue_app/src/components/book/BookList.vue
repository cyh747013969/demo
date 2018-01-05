<template>
    <div class="booklist">
            <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>
<script>
require('vue-swipe/dist/vue-swipe.css');
// 引用vue-swipeu轮播图组件
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem 
  }
}
</script>
<style scoped>
.booklist{
    margin-top:1rem;
}
    .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    }

    .slide1 {
    background-color:aquamarine;
    background-image: url('https://img3.doubanio.com/lpic/s24468373.jpg');
    }

    .slide2 {
    background-color: #ffd705;
    background-image: url('https://img3.doubanio.com/lpic/s6989253.jpg');
    color: #000;
    }

    .slide3 {
    background-color: #ff2d4b;
    background-image: url('https://img3.doubanio.com/lpic/s27102925.jpg');
    color: #fff;
    }
</style>
