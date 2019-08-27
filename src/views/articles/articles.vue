<template>
  <el-container class="article">
    <detail></detail>
    <!-- <articlelist></articlelist> -->
    <asidebox></asidebox>
  </el-container>
</template>
<script>
import articlelist from './articlelist';
import asidebox from './asidebox';
import detail from './articleDetail'
export default {
  name:'articles',
  components:{
    articlelist,asidebox,detail
  }
}
</script>
<style lang="scss" scoped>
@import "./article.scss";
</style>