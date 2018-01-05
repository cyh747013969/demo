import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import MovieList from '../components/movie/MovieList'
import MovieDetail from '../components/movie/MovieDetail'
import Music from '../components/music/Music'
import MusicList from '../components/music/MusicList'
import MusicAlbums from '../components/music/MusicAlbums'
import Book from '@/components/book/Book'
import BookList from '@/components/book/BookList'
import Photo from '@/components/photo/Photo'
import PhotoList from '@/components/photo/PhotoList'
import PhotoDetail from '@/components/photo/PhotoDetail'
Vue.use(Router)

// 配置路径
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
          path:'moviedetail/:movieId',
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
    },{
      path:'/book',
      name:'book',
      component:Book,
      children:[{
        path:'booklist',
        name:'booklist',
        component:BookList
      }]
    },{
      path:'/photo',
      name:'photo',
      component:Photo,
      children:[{
        path:'photolist',
        name:'photolist',
        component:PhotoList
      }, {
        path:'photodetail/:index',
        name:'photodetail',
        component:PhotoDetail
      }]
    }

  ]
})
