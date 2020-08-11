<template>
  <el-container class="article">
    <transition name='fade'>
     <router-view></router-view>
    </transition>
    <asidebox></asidebox>
  </el-container>
</template>
<script>
import asidebox from './asidebox';
export default {
  name:'articles',
  components:{asidebox},
}
</script>
<style lang="scss" scoped>
@import "./article.scss";
</style>