<template>
  <el-container class="clearfix">
    <el-header>
      <div class="banner">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="(item,index) in banners" :key="index">
            <img :src="item.imageUrl" alt>
            <p :class="{active:item.titleColor}">{{item.typeTitle}}</p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-header>
    <el-main>
      <div class="iconlist">
        <div class="video"><p>私人电台</p></div>
        <div class="music"><p>每日推荐</p></div>
        <a href="#/playlists"><div class="list"><p>精选歌单</p></div></a>
        <div class="rank"><p>热门排行</p></div>
      </div>
      <div class="musiclist">
        <a href="#/playlists">热门歌单   <i class="fa fa-angle-right"></i></a>
        <ul>
          <li v-for='(item,index) in playlists' :key='index'>
            <img :src="item.coverImgUrl" alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="musiclist">
        <a href="#/playlists">最新音乐   <i class="fa fa-angle-right"></i></a>
        <ul>
          <li v-for='(song,index) in songs' :key='index'>
            <img :src="song.album.blurPicUrl" alt="">
            <p>{{song.album.name}}<span class="right"><i class="fa fa-microphone"></i>{{song.artists[0].name}}</span></p>
          </li>
        </ul>
      </div>
    </el-main>
    <el-footer height="50px">
      <!-- Footer content -->
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'homepage',
  data () {
    return {
      banners: null,
      playlists: null,
      songs: null
    }
  },
  mounted () {
    let that = this
    that.axios
      .get('http://localhost:3000/banner')
      .then(response => (this.banners = response.data.banners))
    that.axios
      .get('http://localhost:3000/top/playlist?limit=6&order=hot')
      .then(response => (this.playlists = response.data.playlists))
    that.axios
      .get('http://localhost:3000/top/song')
      .then(response => (this.songs = response.data.data.splice(0, 6)))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header{
  margin:0;
  height:195px !important;
  padding:0;
}
.el-main{
  padding:0;
}
.banner {
  margin-top: 45px;
  position: relative;
  z-index: 20;
  /* background-image: linear-gradient(135deg, #ff9d6c 10%, #bb4e75 100%); */
}
.el-carousel {
  margin: 0 auto;
  overflow: hidden;
}
.banner img {
  width: 100%;
  /* height: 100%; */
}
.banner ul li {
  padding: 0 !important;
}
.el-carousel__container div {
  margin-top: 0px;
}
.active {
  position: absolute;
  bottom: 11px;
  min-width: 40px;
  text-align: center;
  right: 0;
  font-size: 0.6em;
  /* border-radius:5px; */
  padding: 5px;
  background-color: rgba(58, 182, 240, 0.9);
  color: #fff;
}
.iconlist{
  padding:0 10px 0 12px;
  height:60px;
  overflow: auto;
  border-bottom: 1px solid #eee;
  padding-bottom:15px;
}
.iconlist div{
  position: relative;
  float:left;
  width:40px;
  height:40px;
  margin:0 22px;
  border-radius:20px;
  /* border:1px solid #b0e2ff; */
  background-size:72%;
  box-shadow: 2px 2px 2px  rgba(187, 227, 255,.8);
}
.iconlist div:hover{
  background-color: #b6e4ff;
}
.video{
  background:#f2f8fc url('../assets/img/video.svg') no-repeat center center;
}
.music{
  background:#f2f8fc url('../assets/img/mus.svg') no-repeat center center;
}
.list{
  background:#f2f8fc url('../assets/img/list.svg') no-repeat center center;
}
.rank{
  background:#f2f8fc url('../assets/img/rank.svg') no-repeat center center;
}
.iconlist p{
  position: relative;
  top:48px;
  left:-4px;
  width:70px;
  font-size: .7em;
}

.musiclist{
  position: relative;
}
.musiclist a{
  font-size: 0.7em;
  padding:0 0 4px 4px;
}

.musiclist ul{
  position: relative;
  top: 10px;
  overflow: auto;
}
.musiclist ul li{
  width:33.33%;
  display: inline-block;
  list-style: none;
  font-size: 0.5em;
  text-align: left;
}
.musiclist ul li img{
  width:94%;
  padding:0 3%;
  border-radius:5px;
}
.musiclist ul li p{
  width:94%;
  padding:5px 3% 10px;
  height:2em;
  overflow: hidden;
}
.right{
  float:right;
  opacity: 0.7;
}
</style>
