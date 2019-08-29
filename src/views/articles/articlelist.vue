<template>
  <el-main>
    <el-card class="box-card" shadow="hover" v-for="(list,index) in articleData" :key="index">
      <div v-if="list.btype == '原创'" @click="handleitem(articleData[index]._id)">
        <div class="cutbox">
          <el-image :src="list.bimage" class="imgfill">
            <div slot="error" class="image-slot"><i class="el-icon-picture-outline"></i></div>
          </el-image>
          <div  class="cardtype original">原创</div>
          <div class="textlist">
            <div class="texttitle">
              <h4 v-bind:title="list.btitle">{{list.btitle}}</h4>
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
      <div v-else @click="handleitem(articleData[index]._id)">
        <div class="cutbox">
          <el-image :src="list.bimage" class="imgfill">
            <div slot="error" class="image-slot"><i class="el-icon-picture-outline"></i></div>
          </el-image>
          <div class="cardtype transshipment">转载</div>
          <div class="textlist">
            <div class="texttitle">
              <h4 v-bind:title="list.btitle">{{list.btitle}}</h4>
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
</template>
<script>
export default {
  name:'articlelist',
  data(){
    return {articleData:[]}
  },
  methods:{
    handleitem(index){
      this.$router.push({path: 'articles/'+index})
    }
  },
  created(){
    this.$axios.get(this.HOST + '/getArticle').then(res=>{
      res.data.map((val) => {this.articleData.push(val)})
    }).catch(err=>{console.log(err)})
  }
}
</script>
<style lang="scss" scoped>
  .box-card{width:100%;margin-bottom:25px;height:260px;position: $postRela;background-color:transparent;border:none;cursor: pointer;
    .cutbox{position: absolute;.imgfill{width:28%;height:220px;vertical-align: top;}
      .cardtype{position: absolute;top:0px;left: -40px;width: 108px;height:30px;z-index: 666;-webkit-transform: rotate(-35deg);transform: rotate(-45deg);transform-origin: center;
        text-align: center;font-size: 13px;line-height:30px;font-family: monospace;font-weight: bold;color: #fff; box-shadow: -1.204px 1.597px 4px 0 rgba(0,0,0,0.22);
      }
      .original{background-color: $greencol;transition:transform .5s;}
      .transshipment{background-color:$redcol;transition:transform .5s;}
      .textlist{width:70%;float:$fr;margin: 0 10px;
        .texttitle{height:200px;h4{font-size:18px;font-weight: 800;margin-bottom:10px;@include articletitle();}
          a{-webkit-line-clamp:3;display: -webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow: ellipsis;line-height: 25px;letter-spacing: .6px;}
          a,h4{text-indent:16px;color:$fcmain;cursor: pointer;}//text-indent:16px; a标签该首行缩进属性不管用
          a:hover,a:active,h4:hover,h4:active{color:#333;}
          div{text-indent:16px;margin:15px 0;span{margin-right: 15px;font-size: 10px;color: #fff;padding: 5px 8px;text-transform: uppercase;border-radius: 5px;}
            .otext{background-color: $greencol;}.ztext{background-color: $redcol;}
          }
        }
        .textdata{color:#777;span{margin:0 8px;i{margin:0 5px;}}}
      }
    }
    .borderw{position: $postAsol;width:100%;height:2px;transition: all 1s;}
    .borderh{position: $postAsol;height:100%;width:2px;transition: all 1s;background-color: #d9e2d9;}
    .btop{top:0;left:92%;}.bleft{top:85%;left:0;}
    .bbottom{bottom:0;right:92%;}.bright{bottom:85%;right:0;}
    .bordergreen{background-color: $greencol;}
    .borderred{background-color: $redcol;}

    &:hover{.btop{top:0;left:0%;}.bbottom{bottom:0;right:0%;}.original,.transshipment{transform:translate3d(10px, 10px, 10px);font-size: 15px;}}
  }
  /*屏幕大于1280px（大屏幕电脑）*/
@media screen and (min-width: 1280px){
  .box-card{
    .cutbox{
      .textlist{width:65%;float:$fr;margin: 0 10px;

      }
      
    }
  }
}
</style>