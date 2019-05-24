<template>
    <el-row class="topnav" :gutter="20" id="headertop">
      <el-col :offset="2">
        <el-menu class="el-menu-demo" router :default-active="$router.path" @select="handleSelect" mode="horizontal" background-color="#EDE387" text-color="#56595f"  active-text-color="#ffd04b">
          <el-menu-item index="1">
            <el-image style="width: 55px; height: 50px" :src="url"></el-image>
          </el-menu-item>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/document">文档</el-menu-item>
          <el-menu-item index="/product">作品</el-menu-item>
          <el-menu-item index="/life">生活</el-menu-item>
          <el-menu-item index="/photo">相册</el-menu-item>
          <el-submenu index="7">
            <template slot="title">秋世界</template>
            <el-menu-item index="/admin">后台入口</el-menu-item>
            <el-menu-item index="7-2">退出</el-menu-item>
          </el-submenu>
        </el-menu> 
      </el-col>
    </el-row>
</template>

<script>
  export default {
    data() {
      return {
        url: '../../static/img/logo.png'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        //console.log(key, keyPath);
      }
    }
  }
  //console.log(document.getElementById("headertop").offsetHeight)
</script>
<style lang="scss" scoped >
  .topnav{width:$w100;background-color:#EDE387;position: fixed;z-index:999;}
</style>

