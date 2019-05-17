<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#EDE387" text-color="#56595f"  active-text-color="#ffd04b">
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
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
