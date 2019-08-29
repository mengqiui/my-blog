<template>
  <el-header class="topnav" id="headertop">
    <el-row>
      <el-col :span="20" :push="2">
        <div class="pchide meanuxs">
          <el-button class="navbar-toggle" type="info" round>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </el-button>
        </div>
        <el-menu class="xshide" router :default-active="defaultActive" mode="horizontal" background-color="#EDE387" text-color="#56595f" active-text-color="#47b8dc">
          <el-menu-item index="/" class="pchide icontoggle" >
          </el-menu-item>
          <el-menu-item index="/" class="pchide">欢迎来到秋实の博客！！！</el-menu-item>
          <el-menu-item><mylogo></mylogo></el-menu-item>
          <el-menu-item index="/" class="xshide">首页</el-menu-item>
          <el-menu-item index="/articles" class="xshide">文档</el-menu-item>
          <el-menu-item index="/product" class="xshide">作品</el-menu-item>
          <el-menu-item index="/life" class="xshide">生活</el-menu-item>
          <el-menu-item index="/photo" class="xshide">相册</el-menu-item>
          <el-menu-item index="/bili" class="xshide">哔哔</el-menu-item>
          <el-submenu index="7" class="xshide">
            <template slot="title">秋世界</template>
            <el-menu-item index="/admin">后台入口</el-menu-item>
            <el-menu-item index="7-2">退出</el-menu-item>
          </el-submenu>
          <div class="xshide pull-right headsearch">
            <el-input placeholder="search..." v-model="headinput">
              <i slot="suffix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        </el-menu> 
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import mylogo from './mylogo';
export default {
  data() { return { headinput:'' } },
  components:{mylogo: mylogo},
  computed:{
    defaultActive(){
      let activeVal = this.$route.path;
      let pathArr = this.$route.path.split("/").reverse().filter(d=>d);
      if(pathArr.length>=2){
        if(pathArr.includes('articles')){ activeVal = '/articles'; }
        if(pathArr.includes('product')){ activeVal = '/product'; }
        if(pathArr.includes('life')){ activeVal = '/life'; }
      }
      return activeVal;
    }
  }
}
</script>
<style lang="scss" scoped >
  .pull-right{float: right;}
  .topnav{width:$w100;background-color:#EDE387;position: fixed;z-index:999;
    .meanuxs{position: relative;margin: 0;}
  }
  .pchide{display: none;}
  .navbar-toggle {position: relative;float: right;padding: 9px 10px; margin-top: 8px;margin-right: 15px;margin-bottom: 8px;background-color: transparent;background-image: none;border: 1px solid transparent;border-radius: 4px;border-color:#fff;
    .icon-bar {display: block;width: 22px;height: 2px;border-radius: 1px;background-color: #fff;}
    .icon-bar+.icon-bar {margin-top: 4px;}
  }


  /*屏幕分辨率为小于767px时*/
  @media screen and (max-width: 767px){
    .xshide{display: none;}
    .pchide{display: inline-block;}
  }
  
</style>

