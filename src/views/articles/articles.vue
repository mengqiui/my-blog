<template>
  <el-container class="article">
    <el-main>
      <el-card class="box-card" shadow="hover" v-for="(list,index) in articleData" :key="index">
        <div v-if="list.btype == '原创'">
          <div class="cutbox">
            <el-image :src="list.bimage" class="imgfill">
              <div slot="error" class="image-slot"><i class="el-icon-picture-outline"></i></div>
            </el-image>
            <div  class="cardtype original">原创</div>
            <div class="textlist">
              <div class="texttitle">
                <h4>{{list.btitle}}</h4>
                <div><span v-for="blabel in list.blabel" :key="blabel" class="otext">{{blabel}}</span></div>
                <a href="javascript:void(0)">{{list.bcontent}}</a>
              </div>
              <div class="textdata">
                <span><i class="el-icon-time"></i>{{list.updatedAt | formatDate}}</span>
                <span><i class="el-icon-view"></i>{{list.bview}}</span><span><i class="el-icon-lollipop"></i>{{list.blike}}</span>
              </div>
            </div>
          </div>
          <div class="borderw btop bordergreen"></div><div class="borderw bbottom bordergreen"></div>
          <div class="borderh bleft"></div><div class="borderh bright"></div>
        </div>
        <div v-else>
          <div class="cutbox">
            <el-image :src="list.bimage" class="imgfill">
              <div slot="error" class="image-slot"><i class="el-icon-picture-outline"></i></div>
            </el-image>
            <div class="cardtype transshipment">转载</div>
            <div class="textlist">
              <div class="texttitle">
                <h4>{{list.btitle}}</h4>
                <div><span v-for="blabel in list.blabel" :key="blabel" class="ztext">{{blabel}}</span></div>
                <a href="javascript:void(0)">{{list.bcontent}}</a>
              </div>
              <div class="textdata">
                <span><i class="el-icon-time"></i>{{list.updatedAt | formatDate}}</span>
                <span><i class="el-icon-view"></i>{{list.bview}}</span><span><i class="el-icon-lollipop"></i>{{list.blike}}</span>
              </div>
            </div>
          </div>
          <div class="borderw btop borderred"></div><div class="borderw bbottom borderred"></div>
          <div class="borderh bleft"></div><div class="borderh bright"></div>
        </div>
      </el-card>
    </el-main>
    <el-aside class="hidden-md-and-down">
      <el-card>
        <!-- 搜索、最新发表、标签云、 -->
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
    this.$axios.get(this.HOST + '/getArticle').then(res=>{
      res.data.map((val) => {this.articleData.push(val)})
    }).catch(err=>{console.log(err)})
  }
}
</script>
<style lang="scss" scoped>
@import "./article.scss";
</style>