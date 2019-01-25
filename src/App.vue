<template>
  <div id="app">
    <div class="header">
      <i class="fa fa-medium" aria-hidden="true"> music</i>
      <el-input class='search'
    placeholder="搜索您喜欢的音乐/歌手"
    size="mini">
    <i slot="suffix" class="el-input__icon el-icon-search"></i>
  </el-input>
    <div class="bottom">
      <a class="fa fa-music" href="#/"></a>
      <a class="fa fa-video-camera"></a>
      <a class="fa fa-user"></a>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
<style>
html,body{
  width:100%;
  height:100%;
}
*{
  margin:0;
  padding:0;
}
a{
  font-size: 0.7em;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width:100%;
  height:100%;
}
a{
  color: #2c3e50;
}
.header{
  position: fixed;
  z-index:21;
  top:0;
  left:0;
  width:100%;
  height:45px;
  /* background-color: rgba(58, 182, 240); */
  background-color:#55ce97;
  /* background-image: linear-gradient( 135deg, #FFAA85 10%, rgb(201, 48, 102) 100%); */
}
.header i.fa{
  float:left;
  font-size:1em;
  color:#fff;
  position: relative;
  top:12px;
  left:10px;
}
.search{
  float:right;
  width:50%;
  margin-top:8px;
  opacity: .9;
  margin-right:10px;
}
.el-header,.el-main,.el-footer{
  padding:10px;
}
.bottom{
  position:fixed;
  width:100%;
  left:0;
  z-index: 30;
  height:50px;
  bottom:0;
  background: rgba(238, 238, 238,.9);
  overflow: hidden;
}
.bottom a{
  float: left;
  width:33.3%;
  height:80%;
  padding-top:4.2%;
  text-align: center;
  color:#304357 !important;
}
.bottom::after{
   content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,1);
    z-index: -1;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(20px);
}
.banner ul li{
  padding: 3px !important;
}
.banner ul{
  bottom:18px;
}
.banner ul li button{
  width:6px;
  height:6px;
  border-radius:6px;
}
.musiclist{
  padding:10px 15px;
}
</style>
