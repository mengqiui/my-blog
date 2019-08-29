<template>
  <el-aside class="hidden-md-and-down asideitem" >
    <el-card class="asidemod" shadow="never">
      <!-- 搜索、最新文章、标签云、 -->
      <div class="searchbox">
        <el-input placeholder="search..." v-model="searchinput">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="svgtag">
        <tagcloud></tagcloud>
      </div>
      <el-calendar v-model="nowdate"></el-calendar>
      <el-card class="newslist" shadow="never">
        <div slot="header"> <el-link type="head" icon="el-icon-news" :underline="false">最新文档</el-link></div>
        <div v-for="(title,index) in titles" :key="index" class="listitem" :title="(index+1)+'.'+title.btitle">
          <el-link href="#" type="head" :underline="false">{{index+1}}.{{title.btitle}}</el-link>
        </div>
      </el-card>
    </el-card>
  </el-aside>
</template>
<script>
import tagcloud from '../../components/tagcloud';
export default {
  name:'asidebox',
  data(){
    return {
      searchinput:'',nowdate: new Date(),titles:[]
    }
  },
  components:{
    tagcloud
  },
  created(){
    this.$axios.get(this.HOST + '/getArticle?count=8&time=desc').then(res=>{
      res.data.map((val) => {this.titles.push(val)})
    }).catch(err=>{console.log(err)})
  }
}
</script>
<style lang="scss">
.el-link--head{color: #56595f;}
.el-link--head:hover{color:#333;text-decoration: none;}

.asideitem{background-color: #ffffff38;
  .el-card{background-color: transparent;border-color:transparent;}
  .asidemod{border:none;background-color: transparent;color:$fcmain;
    .el-card__body{padding:0;
      .searchbox{
        .el-input__inner{
          @include input(1px,transparent,#fff,#a6d7bc);
        }
        .el-input__suffix{color:#fff;}
      }
      .svgtag{margin:20px 0;

      }
      .newslist{margin:20px 0;
        .el-card__header{
          padding:10px;background-color: #a6d7bc;
        }
        .el-card__body{
          .listitem{transition: transform .5s;background-color: #a6d7bc;border-bottom:1px solid #fff;padding:10px;
            &:last-child{border:none;}
            &:hover{ transform: translate(-8%, 0); }
            a{
              span{@include articletitle();}
            }
          }
        }

      }
      .el-calendar{background-color:rgba(142, 206, 142, 0.5);
        .el-calendar__header{.el-calendar__title{color:$fcmain;}
        .el-calendar__button-group{
          .el-button{background-color:transparent;padding: 7px 10px;
            &:not(:first-child):not(:last-child){display: none;}
            }
          }
        }
        .el-calendar__body{ 
          .el-calendar-table{
            .el-calendar-table__row{
              .el-calendar-day{height: 30px;
                &:hover{background-color:#bfe1ec;}
              }
              .is-selected{background-color:#bfe1ecb8;}
            }
            &:not(.is-range) td.next,
            &:not(.is-range) td.prev{
              color:$redcol;opacity: .7;
            }
            
          }
        }
      }
    }

    
  }

}
</style>