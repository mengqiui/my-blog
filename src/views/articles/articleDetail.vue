<template>
  <!-- 文章详情 -->
  <el-main>
    <div class="index-content-middle">  
      <el-card shadow="hover" class="item-box">
        <h2 class="item-head">{{articleData.btitle}}</h2>
        <div class="item-info">
          <span><i class="el-icon-time"></i>{{articleData.updatedAt | formatDate}}</span><span><i class="el-icon-view"></i>{{articleData.bview}}</span>
          <span><i class="el-icon-lollipop"></i>{{articleData.blike}}</span>
        </div>
        <div class="item-content"><p>{{articleData.bcontent}}</p><p>{{articleData.bcontent}}</p><p>{{articleData.bcontent}}</p><p>{{articleData.bcontent}}</p><p>{{articleData.bcontent}}</p></div>
        <div class="item-related">
          <h1>相关推荐</h1>
          <ul>
            <li>
              <h2>文档标题1 <span style="float:right">2019-08-12 08:30</span></h2>
              <a href="#">我们知道在面向对象编程时，无法做到重复使用与主业务无关的某些方法。比如 A、B 两个类，如果都要使用日志功能，按照面向对象的设计原则，你必须在每个类里面都写上这样
                一个方法，尽管他们几乎一摸一样。当然你也可以选择将这样一段代码放到一个独立的类里，然后再在A、B类中调用，但是这样就等于形成了一个强耦合的关系，它的改变会影响到这
                两个类。面向切面编程，正是解决的这样一个问题：把和主业务无关的事情，放到代码外面去做。</a>
            </li>
            <li>
              <h2>文档标题1 <span style="float:right">2019-08-12 08:30</span></h2>
              <a href="#">我们知道在面向对象编程时，无法做到重复使用与主业务无关的某些方法。比如 A、B 两个类，如果都要使用日志功能，按照面向对象的设计原则，你必须在每个类里面都写上这样
                一个方法，尽管他们几乎一摸一样。当然你也可以选择将这样一段代码放到一个独立的类里，然后再在A、B类中调用，但是这样就等于形成了一个强耦合的关系，它的改变会影响到这
                两个类。面向切面编程，正是解决的这样一个问题：把和主业务无关的事情，放到代码外面去做。</a>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </el-main>
</template>
<script>
export default {
  name:'articleDetail',
  data(){
    return {
      articleData:{}
    } 
  },
  created(){
    this.$axios.get(this.HOST + '/getArticle?id='+this.$route.params.info).then(res=>{
      res.data.map((val) => {this.articleData=val})
    }).catch(err=>{console.log(err)})
  }
}
</script>
<style lang="scss" scoped>
.el-main{overflow: inherit;height:auto;
  .index-content-middle{width:100%;margin-bottom:25px;position: $postRela;background-color:transparent;border:none;cursor: pointer;min-height:260px;
    .item-box{background-color: rgba(255,255,255,0);text-align:center;color:$fcmain;
      .item-head{font-weight:bold;font-size:20px;margin-bottom: 15px;}
      .item-info{
        span{margin-right:20px;font-size:13px;
          i{margin-right:5px;}
        }
      }
      .item-content{margin: 15px 0;
        p{text-align: left;font-size:15px;line-height: 2em;letter-spacing:.5px;text-indent: 2em;}
      }
      .item-related{text-align: left;border-top: 1px dashed #87a1ac;
        h1{ font-size: 16px; font-weight: bold; margin: 15px 0; }
        ul{
          li{border-bottom: 1px doshed #ddd;margin:20px 0;
            h2{ font-weight: bold;margin: 15px 0; &::before{content: '●'}}
            a{@include articletitle();color:$fcmain;}
          }
        }
      }
    }
  }
}
  /*屏幕大于1280px（大屏幕电脑）*/
@media screen and (min-width: 1280px){
  .index-content-middle{

      
  }
}
</style>