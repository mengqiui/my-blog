<template>
  <!-- 文章详情 -->
  <el-main>
    <div class="index-content-middle">  
      <el-card shadow="hover" class="item-box">
        <div class="">{{msg}}</div>
        
      </el-card>
    </div>
  </el-main>
</template>
<script>
export default {
  name:'articleDetail',
  data(){
    return {
      msg:"我是文章列表"
    }
  },
  created(){

  }
}
</script>
<style lang="scss" scoped>
  .index-content-middle{width:100%;margin-bottom:25px;height:260px;position: $postRela;background-color:transparent;border:none;cursor: pointer;
    .item-box{background-color: rgba(255,255,255,0);}
    
  }
  /*屏幕大于1280px（大屏幕电脑）*/
@media screen and (min-width: 1280px){
  .index-content-middle{

      
  }
}
</style>