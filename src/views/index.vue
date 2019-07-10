<template>
  <section class="index-bg">
    <!-- fullscreen add life word start @author: Miss Q !-->
    <div class="bg-index01" id="indexbg01">
      <svgbg></svgbg>
    </div>
    <!-- first screen -->
    <el-container class="index-main">
      <el-main>
        <!-- 滚动喇叭消息 -->
        <el-row :gutter="12">
        <el-col :span="24">
          <el-card shadow="hover" class="notice-item">
            <i class="el-icon-bell"></i>
            <ul class="notice-text" id="noticeBox" :class="{marquee_top:noticeanimate}" @mouseenter="mouseStop" @mouseleave="mousego">
              <li v-for="(notice,index) in noticeList" :key="index">{{notice}}</li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="12">
        <el-col :span="24">
          <div class="clearfix">
            <el-divider content-position="left"><i class="el-icon-sugar"></i>吧唧吧唧</el-divider>
          </div>
          <el-card shadow="hover" class="index-main-content">
            <div class="content-item">我是list内容</div>
          </el-card>
        </el-col>
      </el-row>
      </el-main>
      <el-aside class="main-info">
        <!-- 城市定位 气候获取 -->
        <div v-html="locationHtml">{{locationHtml}}</div>
      </el-aside>
    </el-container>
  </section>
</template>

<script>
//https://blog.csdn.net/daaikuaichuan/article/details/75204274
import svgbg from '../components/svgbg'
export default {
  name: 'indexmain',
  data(){
    return{
      locationCity:"正在定位···",
      locationHtml:"",
      noticeanimate:false,
      noticeList:'',
      timer:null
    }
  },
  methods: {
    setbg: function () {
      indexbg01.style.width =  window.innerWidth+'px';
      indexbg01.style.height = window.innerHeight+'px';
      document.getElementsByClassName("index-bg")[0].style.height = window.innerHeight+'px';
    },
    weather:function(){
      var that = this;
      /**  https://www.cnblogs.com/zdz8207/p/vue-axios-vue-resource-proxyTable-cookie.html  https://www.tianqiapi.com/api/?version=v6&ip=124.160.26.254 https://blog.csdn.net/srttina/article/details/83309512   **/
      // https://www.tianqiapi.com/?action=v6   天气API接口文档

      this.$axios.get(this.HOST + '/api.php',{params:{style:'ts',skin:'gif',ip:returnCitySN["cip"]?returnCitySN["cip"]:"124.160.26.254",column:1
      }}).then(res=>{that.locationHtml=res.data?res.data:"网络加载异常···";
      }).catch(err=>{console.log(err)})
  
    },
    noticeUpdate:function(){
      this.noticeList = ["秋の博客1.0版本上线啦a~~~","秋の博客1.0版本上线啦b~~~","秋の博客1.0版本上线啦c~~~","秋の博客1.0版本上线啦d~~~","秋の博客1.0版本上线啦e~~~"];
    },
    noticeScroll:function(){
      this.noticeanimate = true;
      setTimeout(()=>{
        this.noticeList.push(this.noticeList[0]);
        this.noticeList.shift();
        this.noticeanimate = false;
      },500)
    },
    mousego:function(){
      this.timer = setInterval(this.noticeScroll,2000);
    },
    mouseStop:function(){
      clearInterval(this.timer)
    }
  },
  mounted: function () {
    this.setbg();
  },
  created:function(){
    this.locationCity = returnCitySN["cname"]?returnCitySN["cname"]:"浙江省杭州市";
    this.weather(); this.noticeUpdate();
    this.timer=setInterval(this.noticeScroll,2000)
    
  },
  components:{svgbg: svgbg}
}

</script>

<style lang="scss">
@import "../assets/scss/index.scss";
</style>
