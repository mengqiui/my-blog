<template>
  <el-container class="article">
     <router-view></router-view>
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