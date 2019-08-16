<template>
  <el-container class="article">
    <el-main>
      <el-card class="box-card" shadow="hover" v-for="(list,index) in articleData" :key="index">
        <el-image :src="list.bimage" class="imgfill">
          <div slot="error" class="image-slot"><i class="el-icon-picture-outline"></i></div>
        </el-image>
        <div class="textlist">
          <div class="texttitle"><h4>{{list.btitle}}</h4><a href="javascript:void(0)">{{list.bcontent}}</a></div>
        </div>
      </el-card>
    </el-main>
    <el-aside class="hidden-md-and-down">
      <el-card>

      </el-card>
    </el-aside>
  </el-container>
</template>
<script>
export default {
  name:'articles',
  data(){
    return {
      msg:"我是文章列表",
      articleData:[],
    }
  },
  methods:{
    
  },
  created(){
    this.$axios.get(this.HOST + '/getArticle?count=2').then(res=>{
      res.data.map((val) => {this.articleData.push(val)})
    }).catch(err=>{console.log(err)})
  }
}
</script>
<style lang="scss" scoped>
@import "./article.scss";
</style>