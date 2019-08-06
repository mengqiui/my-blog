<template>
  <!-- 文章详情 -->
  <el-row :gutter="12" style="" class="index-content">
    <el-col :lg="{span:22,push:1}" :md="{span:24}">
      <div class="index-content-middle">  
        <el-card shadow="hover" class="item-box">
          <div class="">{{msg}}
          </div>
          
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name:'articleDetail',
  //props: ["goodsImage", "goodsName", "goodsPrice", "goodsId"],
  data(){
    return {
      msg:"我是文章列表"
    }
  },
  created(){

  }
}
</script>