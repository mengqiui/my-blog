<template>
  <el-aside class="hidden-md-and-down asideitem" >
    <el-card class="asidemod" shadow="never">
      <!-- 搜索、最新文章、标签云、 -->
      <div class="searchbox">
        <el-input placeholder="search..." v-model="searchinput">
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <el-card class="newslist" shadow="never">
        <div slot="header"> <span>最新文档</span> </div>
        <div v-for="o in 5" :key="o" class="listitem">{{o}}、列表内容</div>
      </el-card>
      <el-calendar v-model="nowdate"></el-calendar>
    </el-card>
  </el-aside>
</template>
<script>
export default {
  name:'asidebox',
  data(){
    return {
      searchinput:'',nowdate: new Date(), 
    }
  }
}
</script>
<style lang="scss">
.asideitem{background-color: #ffffff38;
  .el-card{background-color: transparent;}
  .asidemod{border:none;background-color: transparent;color:$fcmain;
    .el-card__body{padding:0;
      .searchbox{
        .el-input__inner{
          @include input(1px,#fff);
        }
        .el-input__suffix{color:#fff;}
      }
      .newslist{margin:20px 0;
        .el-card__header{
          padding:10px;
        }
        .listitem{
          border-bottom:1px solid #fff;padding:10px;&:last-child{border:none;}
        }
      }
      .el-calendar{background-color:$greencol;
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
              .is-selected{background-color:#bfe1ec;}
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