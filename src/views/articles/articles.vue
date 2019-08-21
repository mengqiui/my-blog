<template>
  <el-container class="article">
    <articlelist></articlelist>
    <asidebox></asidebox>
  </el-container>
</template>
<script>
import articlelist from './articlelist';
import asidebox from './asidebox'
export default {
  name:'articles',
  components:{
    articlelist,asidebox
  }
}
</script>
<style lang="scss" scoped>
@import "./article.scss";
</style>