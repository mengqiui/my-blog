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
      <el-row :gutter="12" style="margin-top:20px">
        <el-col :span="24">
          <!-- <div class="clearfix">
            <el-divider content-position="left"><i class="el-icon-sugar"></i>吧唧吧唧</el-divider>
          </div> -->
          <!-- 该模块设计参考：http://demo.cssmoban.com/cssthemes6/tpmo_527_sided/index.html -->
          <div class="index-content"> <!--总背景色-->
            <div class="index-content-middle">  <!-- 模块居中 -->
                <!-- 第一块：内容 -->
              <div class="content-item">
                <el-card shadow="hover" class="item-box">
                  <el-image :src="imgSrc[0]" class="imgfill" lazy>
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                  <div class="textlist">
                    <div class="texttitle">
                      <h4>文章标题</h4>
                      <a href="javascript:void(0)">我是文本文本文本文本，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</a>
                    </div>
                    <div><el-tag size="mini">css3</el-tag><el-tag type="success" size="mini">前端</el-tag><el-tag type="info" size="mini">javascript</el-tag></div>
                    <p class="infobox">
                      <i class="el-icon-time"></i><span>发布于 2019-07-11</span>
                      <i class="el-icon-view"></i><span>1425</span>
                      <i class="el-icon-chicken"><span>352</span></i>
                    </p>
                  </div>
                </el-card>
              </div>
                <!-- 第二块：内容 -->
              <div class="content-item">
                <el-card shadow="hover" class="item-box">
                  <div class="textlist">
                    <h4>文章标题</h4>
                    <a href="javascript:void(0)">我是文本文本文本文本，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</a>
                    <div><el-tag size="mini">css3</el-tag><el-tag type="success" size="mini">前端</el-tag><el-tag type="info" size="mini">javascript</el-tag></div>
                  </div>
                  <el-image :src="imgSrc[1]" class="imgfill">
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </el-card>
              </div>
                <!-- 第三块：内容 -->
              <div class="content-item">
                <el-card shadow="hover" class="item-box">
                  <el-image :src="imgSrc[0]" class="imgfill">
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                  <div class="textlist">
                    <h4>文章标题</h4>
                    <a href="javascript:void(0)">我是文本文本文本文本，图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</a>
                    <div><el-tag size="mini">css3</el-tag><el-tag type="success" size="mini">前端</el-tag><el-tag type="info" size="mini">javascript</el-tag></div>
                  </div>
                </el-card>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      </el-main>
      <el-card shadow="hover" class="main-info">
        <!-- 城市定位 气候获取 -->
        <div v-html="locationHtml">{{locationHtml}}</div>
      </el-card>
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
      timer:null,
      imgSrc:["../../static/img/index01.jpg","../../static/img/index02.jpg"]
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
      }}).then(res=>{that.locationHtml=res.data;
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
