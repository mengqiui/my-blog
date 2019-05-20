<template>
    <el-row class="container">
      <el-col :span="24">
        <el-col :span="6">
          <div class="logo-block">
            <a href="/"><img src="../../static/img/logo.png" /></a>
          </div>
        </el-col>
        <el-col :span="18">
          <el-menu class="el-menu-demo" mode="horizontal" background-color="#EDE387" text-color="#56595f"  active-text-color="#ffd04b">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">文档</el-menu-item>
            <el-menu-item index="3">作品</el-menu-item>
            <el-menu-item index="4">生活</el-menu-item>
            <el-menu-item index="5">相册</el-menu-item>
            <el-submenu index="6">
              <template slot="title">秋世界</template>
              <el-menu-item index="6-1">后台入口</el-menu-item>
              <el-menu-item index="6-2">退出</el-menu-item>
            </el-submenu>
          </el-menu> 
        </el-col>
      </el-col>
    </el-row>
</template>

<script>
  
</script>
<style lang="scss">
  @import '../assets/scss/common';
</style>

