<template>
  <section class="index-bg">
    <!-- fullscreen add life word start @author: Miss Q !-->
    <div class="bg-index01" id="indexbg01"><svgbg></svgbg></div>
    <!-- first screen -->
    <el-container class="index-main">
      <el-main>我是首页</el-main>
      <el-aside class="main-info">
        <div>所在城市：{{locationCity}}</div>
        <div>当前气候：{{locationSky}}</div>
        <div>{{new Date(new Date().getFullYear(), parseInt(new Date().getMonth()), 6)}}</div>
      </el-aside>
    </el-container>
  </section>
</template>

<script>
//https://blog.csdn.net/daaikuaichuan/article/details/75204274
import svgbg from '../components/svgbg'
//import BMap from 'BMap'

export default {
  name: 'indexmain',
  data(){
    return{
      locationCity:"正在定位···",
      locationSky:"正在查询···"
    }
    
  },
  methods: {
   setbg: function () {
      indexbg01.style.width =  window.innerWidth+'px';
      indexbg01.style.height = window.innerHeight+'px';
      document.getElementsByClassName("index-bg")[0].style.height = window.innerHeight+'px';
    },
    weather:function(){
    /**  https://www.cnblogs.com/zdz8207/p/vue-axios-vue-resource-proxyTable-cookie.html  https://www.tianqiapi.com/api/?version=v6&ip=124.160.26.254 https://blog.csdn.net/srttina/article/details/83309512   **/
    // https://www.tianqiapi.com/?action=v6   天气API接口文档
     this.$axios.get(this.HOST + '/api', {
        params: {                           //参数
          version: "v6", 
          ip: "124.160.26.254",
        },
      })
      .then( res => {
          console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.setbg();
    
  },
  created:function(){
    this.locationCity = returnCitySN["cname"];
     this.weather()
  },
  components:{svgbg: svgbg}
}



</script>

<style lang="scss">
  @import '../assets/scss/index.scss';
</style>
