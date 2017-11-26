import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import MovieList from '../components/movie/MovieList'
import MovieDetail from '../components/movie/MovieDetail'
import Music from '../components/music/Music'
import MusicList from '../components/music/MusicList'
import MusicAlbums from '../components/music/MusicAlbums'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/movie/movielist',
    },{
      path:'/movie',
      name:'movie',
      component:Movie,
      children:[
        {
          path:'movielist',
          component:MovieList
        },
        {
          path:'moviedetail',
          component:MovieDetail
        }
      ]
    },{
      path:'/music',
      name:'music',
      component:Music,
      // redirect:'/musiclist',
      children:[
        {
          path:'musiclist',
          component:MusicList
        },{
          path:'musicalbums/:musicId',
          component:MusicAlbums
        }
      ]
    }
  ]
})
