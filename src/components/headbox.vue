<template>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">文档</el-menu-item>
  <el-menu-item index="3">作品</el-menu-item>
  <el-menu-item index="4">生活</el-menu-item>
  <el-menu-item index="5">相册</el-menu-item>
  <!-- <el-submenu index="3">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      </template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <el-menu-item index="6">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
  </el-menu-item>
  <el-menu-item index="7">退出</el-menu-item>
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
