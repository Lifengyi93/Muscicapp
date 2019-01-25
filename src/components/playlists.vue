<template>
  <el-container>
    <el-header height="25px">
      <el-button class='list' type='primary' round plain size='mini'>{{msg}}</el-button>
    </el-header>
    <el-main height="80%">
      <ul>
        <li v-for='(item,index) in playlists' :key='index'>
          <div class="playlist-item">
            <img :src="item.coverImgUrl" alt="">
            <p>{{item.name}}</p>
            <div class="info">
              <i class="fa fa-user-o left">  {{item.creator.nickname}}</i>
              <i class="fa fa-headphones right">  {{item.playCount}}</i>
            </div>
          </div>
        </li>
      </ul>
    </el-main>
    <el-footer>

    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'playlist',
  data () {
    return {
      msg: '热门歌单',
      playlists: null
    }
  },
  mounted () {
    let that = this
    that.axios
      .get('http://localhost:3000/top/playlist')
      .then(response => (this.playlists = response.data.playlists))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3,h4 {
  font-weight: normal;
}
.el-header{
  padding-bottom:0;
}
.list{
  margin: 0 8px ;

}
.play-btn{
  margin-top:20px;
}
.play-btn i{
  font-size:20px;
  margin:0 10px;
}
.playlist-item{
  width:100%;
  border-radius: 5px;
  position: relative;
}
.playlist-item img{
  width:100%;
  border-radius: 5px;
}
.playlist-item p{
  position: absolute;
  bottom:24px;
  left:0;
  min-height: 32px;
  width:90%;
  padding:8px 5%;
  font-size: 0.7em;
  background: rgba(0,0,0,0.5);
  display: inline-block;
  color:#fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
li{
  width:46%;
  padding: 2%;
  list-style: none;
  display:inline-block;
}
.left{
  float:left;
}
.right{
  float:right;
}
.info{
  color:#aaa;
  overflow: auto;
  font-weight: 100;
  height:10px;
  padding:5px 0;
  font-size:0.5em;
}
.info i{
  width:50%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
i.right{
  text-align: right;
}
</style>
